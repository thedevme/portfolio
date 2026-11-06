// Small renderer for the quote tool pages: {{holes}}, <sc-for>, <sc-if> and a Component class.
(function () {
  var HOLE = /\{\{\s*([\w.]+)\s*\}\}/g, ONE = /^\{\{\s*([\w.]+)\s*\}\}$/;
  var EVENTS = { onclick: 'click', onchange: 'input', onfocus: 'focus', onblur: 'blur', onmouseenter: 'mouseenter', onmouseleave: 'mouseleave' };
  function get(scope, path) {
    return path.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, scope);
  }
  function fill(text, scope) {
    return text.replace(HOLE, function (_, p) { var v = get(scope, p); return v == null ? '' : String(v); });
  }
  function build(tpl) {
    if (tpl.nodeType === 3) {
      var node = document.createTextNode(tpl.nodeValue), raw = tpl.nodeValue;
      return { nodes: [node], update: raw.indexOf('{{') < 0 ? function () {} : function (s) {
        var t = fill(raw, s); if (node.nodeValue !== t) node.nodeValue = t;
      } };
    }
    if (tpl.nodeType !== 1) return { nodes: [], update: function () {} };
    var name = tpl.localName.toLowerCase();
    if (name === 'sc-for' || name === 'sc-if') return block(tpl, name);
    var el = tpl.cloneNode(false), ups = [];
    Array.prototype.slice.call(tpl.attributes).forEach(function (a) {
      var key = a.name.toLowerCase(), m = ONE.exec(a.value);
      if (key.indexOf('hint-') === 0) { el.removeAttribute(a.name); return; }
      if (EVENTS[key]) {
        el.removeAttribute(a.name);
        var fn = null;
        el.addEventListener(EVENTS[key], function (e) { if (fn) fn(e); });
        ups.push(function (s) { fn = get(s, m[1]); });
      } else if (key === 'value' && m) {
        el.removeAttribute(a.name);
        ups.push(function (s) { var v = get(s, m[1]), t = v == null ? '' : String(v); if (el.value !== t) el.value = t; });
      } else if (a.value.indexOf('{{') >= 0) {
        el.removeAttribute(a.name);
        ups.push(function (s) { var t = fill(a.value, s); if (el.getAttribute(a.name) !== t) el.setAttribute(a.name, t); });
      }
    });
    tpl.childNodes.forEach(function (c) {
      var b = build(c);
      b.nodes.forEach(function (n) { el.appendChild(n); });
      ups.push(b.update);
    });
    return { nodes: [el], update: function (s) { ups.forEach(function (u) { u(s); }); } };
  }
  function block(tpl, name) {
    var mark = document.createComment(name), path = ONE.exec(tpl.getAttribute(name === 'sc-for' ? 'list' : 'value'))[1];
    var as = tpl.getAttribute('as'), kids = Array.prototype.slice.call(tpl.childNodes), rows = [];
    function row() {
      var parts = kids.map(build);
      return { nodes: parts.reduce(function (a, p) { return a.concat(p.nodes); }, []), update: function (s) { parts.forEach(function (p) { p.update(s); }); } };
    }
    return { nodes: [mark], update: function (s) {
      var v = get(s, path), items = name === 'sc-for' ? (v || []) : (v ? [s] : []);
      while (rows.length > items.length) rows.pop().nodes.forEach(function (n) { n.remove(); });
      items.forEach(function (item, i) {
        var scope = s;
        if (name === 'sc-for') { scope = Object.create(s); scope[as] = item; }
        if (!rows[i]) {
          rows[i] = row();
          var after = i ? rows[i - 1].nodes[rows[i - 1].nodes.length - 1] : mark;
          rows[i].nodes.forEach(function (n) { after.parentNode.insertBefore(n, after.nextSibling); after = n; });
        }
        rows[i].update(scope);
      });
    } };
  }
  function DCLogic(props) { this.props = props || {}; this.state = {}; }
  DCLogic.prototype.setState = function (next) {
    this.state = Object.assign({}, this.state, typeof next === 'function' ? next(this.state) : next);
    if (this.__draw) this.__draw();
  };
  document.addEventListener('DOMContentLoaded', function () {
    var root = document.querySelector('x-dc'), src = document.querySelector('script[data-dc-script]');
    var helmet = root.querySelector('helmet');
    if (helmet) { while (helmet.firstChild) document.head.appendChild(helmet.firstChild); helmet.remove(); }
    var Component = new Function('DCLogic', src.textContent + '\nreturn Component;')(DCLogic);
    var app = new Component({}), parts = Array.prototype.slice.call(root.childNodes).map(build);
    root.textContent = '';
    parts.forEach(function (p) { p.nodes.forEach(function (n) { root.appendChild(n); }); });
    app.__draw = function () { var v = app.renderVals(); parts.forEach(function (p) { p.update(v); }); };
    root.style.display = 'block';
    app.__draw();
  });
})();
