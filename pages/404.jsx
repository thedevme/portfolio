import Head from "next/head";
import { useEffect, useState } from "react";

// One 404 for both domains: studio.craigclayton.dev gets the studio look,
// everything else keeps the plain portfolio message.
const NotFound = () => {
  const [host, setHost] = useState(null);
  useEffect(() => setHost(window.location.hostname), []);

  if (host === null) return null;
  return host.startsWith("studio.") ? <StudioNotFound /> : <PortfolioNotFound />;
};

const PortfolioNotFound = () => (
  <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center", padding: 24 }}>
    <Head><title>404 · Page not found</title></Head>
    <div>
      <h1 style={{ fontSize: 48, margin: 0 }}>404</h1>
      <p style={{ marginTop: 12 }}>This page could not be found.</p>
      <a href="/">Back to the home page</a>
    </div>
  </div>
);

const StudioNotFound = () => (
  <div className="sx404">
    <Head>
      <title>Page not found · Craig Clayton Studio</title>
      <meta name="robots" content="noindex" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,900;1,900&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;600&display=swap"
      />
    </Head>
    <style>{`
      .sx404 { --bg:#17181a; --line:#2e3035; --text:#f4f2ec; --muted:#9b9aa3; --accent:#b3001b; --accent-ink:#ef3b55;
        --cond:"Barlow Condensed","Arial Narrow",sans-serif; --serif:"Instrument Serif",Georgia,serif;
        position:fixed; inset:0; z-index:2147483000; overflow:auto; background:var(--bg); color:var(--text);
        font:400 17px/1.6 Inter,system-ui,sans-serif; -webkit-font-smoothing:antialiased; display:flex; flex-direction:column; }
      .sx404 a { color:inherit; background:none; box-shadow:none; }
      .sx404 .sx-btn:hover { color:#fff; }
      .sx404 .top { display:flex; justify-content:space-between; align-items:center; max-width:1320px; width:100%; margin:0 auto; padding:24px 36px; }
      .sx404 .sx-mark { font:900 26px/1 var(--cond); text-decoration:none; letter-spacing:.02em; text-transform:uppercase; }
      .sx404 .sx-mark b { color:var(--accent); }
      .sx404 main { flex:1; display:flex; flex-direction:column; justify-content:center; max-width:1320px; width:100%; margin:0 auto; padding:0 36px 8vh; position:relative; isolation:isolate; overflow:hidden; }
      .sx404 .ghost { position:absolute; z-index:-1; right:-.04em; bottom:0; font:900 clamp(220px,38vw,620px)/.8 var(--cond); color:rgba(255,255,255,.04); pointer-events:none; user-select:none; }
      .sx404 .kicker { font:600 13px/1 Inter,sans-serif; letter-spacing:.16em; text-transform:uppercase; color:var(--accent-ink); }
      .sx404 h1 { margin:18px 0 0; font:900 clamp(56px,10vw,150px)/.86 var(--cond); text-transform:uppercase; letter-spacing:-.01em; }
      .sx404 h1 em { font-family:var(--serif); font-style:italic; font-weight:400; text-transform:none; letter-spacing:0; color:var(--accent-ink); }
      .sx404 p { color:var(--muted); max-width:520px; margin:22px 0 32px; }
      .sx404 .sx-row { display:flex; gap:12px; flex-wrap:wrap; }
      .sx404 .sx-btn { display:inline-flex; align-items:center; gap:8px; font-weight:600; font-size:15px; padding:13px 20px; border-radius:999px; text-decoration:none; border:1px solid var(--line); }
      .sx404 .sx-btn.fill { background:var(--accent); border-color:var(--accent); color:#fff; }
      @media (max-width:560px) { .sx404 .top, .sx404 main { padding-left:20px; padding-right:20px; } }
    `}</style>
    <header className="top">
      <a className="sx-mark" href="/">Craig<b>.</b></a>
    </header>
    <main>
      <span className="ghost" aria-hidden="true">404</span>
      <span className="kicker">Error 404</span>
      <h1>This page <em>moved</em><br />or never was.</h1>
      <p>The link might be old or mistyped. Everything I make, from videos to websites to iPhone apps, is on the studio home page.</p>
      <div className="sx-row">
        <a className="sx-btn fill" href="/">Back to the studio &rarr;</a>
        <a className="sx-btn" href="/#work">See the work</a>
      </div>
    </main>
  </div>
);

export default NotFound;
