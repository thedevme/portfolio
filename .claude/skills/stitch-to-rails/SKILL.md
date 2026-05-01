# Skill: Stitch → Rails Walking Skeleton
# Purpose: Convert Stitch HTML exports into a fully clickable Rails prototype
#          where every page renders pixel-perfect and every button goes somewhere.
#          Zero business logic. Zero database. Full design fidelity.
# Run in:  Claude Code CLI from the Rails project root

---

## WHAT THIS SKILL BUILDS

A "walking skeleton" — a Rails app where:
  ✅ Every page renders exactly as Stitch designed it
  ✅ Every button and link navigates to the correct next page
  ✅ You can walk the entire app flow start to finish in a browser
  ✅ One shared CSS file drives all pages — no drift, no duplication
  ✅ All data is hardcoded/fake — no database, no models, no logic

This is Phase 1. Business logic comes in Phase 2, after the design is locked.

---

## PRIME DIRECTIVE

> The designs are finished and approved.
> Your job is mechanical conversion — nothing more.
> You are a file operation tool, not a designer.
> You make zero visual decisions. Zero.
> If you feel the urge to improve, clean up, or fix anything visual — stop. Don't.
> If something looks wrong after conversion, RESTORE from original. Never edit CSS to fix it.

---

## GOLDEN RULES (Never Break These)

```
❌ Never change a CSS class name on any element
❌ Never restructure or reorder HTML
❌ Never add, remove, or edit styles
❌ Never "clean up" or "improve" anything
❌ Never create models, migrations, or database logic
❌ Never process more than one file without user confirmation
❌ Never touch the originals folder — it is sacred
❌ Never combine stages — always stop and wait for "proceed"
❌ Never guess a route or controller name — always ask first
❌ Never skip a build verification step
❌ Never hardcode data without flagging it clearly with a comment
```

---

## STAGE 0 — ORIENTATION + PROJECT MODE DETECTION

CLI announces itself, asks for the Stitch folder, then detects whether a
Rails app already exists. Two modes diverge here.

Say this first:

> "I'm going to convert your Stitch files into a fully clickable Rails app
> where every page looks perfect and every button goes somewhere.
> No database. No logic. Just the full app flow working in a browser.
>
> I work in stages. I confirm with you before each one.
> Nothing gets batch-processed. Nothing gets changed without your go-ahead.
>
> Where are your Stitch HTML files?
> (e.g. ~/Desktop/stitch-exports)"

Wait for the Stitch folder path. Confirm it exists and contains .html files.
Show the count: "Found [N] HTML files."

Then ask:
```
Do you have a Rails app already, or should I create one?
  [1] Create a new Rails app now
  [2] I already have a Rails app — give me the path
```

Wait for answer.

---

### MODE A — NEW PROJECT (no Rails app yet)

Ask:
```
What should the app be named? (e.g. wpm-coach)
Where should I create it? (e.g. ~/Projects)
```

Then run these commands ONE AT A TIME, confirming each succeeded:
```bash
cd [destination]
rails new [app-name] --css tailwind --database postgresql
cd [app-name]
bundle install
rails db:create
```

If any command fails — show the exact error, stop, tell the user what to fix.
Do NOT attempt workarounds or continue past a failed command.

When the app is created successfully, say:
```
════════════════════════════════════════════════════════
✅ Rails app created at [full path]
   Tailwind: configured (--css tailwind)
   Database: created

Skipping Stage 1 — nothing to diagnose on a fresh app.
Continuing to Stage 2 (Tailwind verification).
Type 'proceed' to continue.
════════════════════════════════════════════════════════
```

Skip Stage 1. Jump directly to Stage 2.

---

### MODE B — EXISTING PROJECT

Ask for the Rails app root path. Verify it looks like a Rails project:
```bash
ls [path]/app [path]/config [path]/Gemfile
```

If it looks right, say: "Got it. Starting Stage 1 — Diagnose. Type 'proceed' to continue."
Then continue to Stage 1 as normal.

---

## STAGE 1 — DIAGNOSE (Mode B only — existing Rails apps)

**Skip this stage entirely for Mode A (new project). Jump to Stage 2.**

Read-only scan. Touch nothing.

### 1a. Scan the Rails app
```bash
ruby --version
bundle exec rails --version
cat Gemfile | grep -E "tailwind|ruby|rails"
ls config/tailwind.config.js 2>/dev/null && echo "TAILWIND CONFIG: EXISTS" || echo "TAILWIND CONFIG: MISSING"
ls app/assets/stylesheets/
cat app/assets/stylesheets/application.tailwind.css 2>/dev/null | head -5 || echo "application.tailwind.css: MISSING"
ls bin/dev 2>/dev/null && echo "BIN/DEV: EXISTS" || echo "BIN/DEV: MISSING"
```

### 1b. Scan Stitch files
```bash
ls -la [path from user]/*.html | sort
```
List every file with its full name and size.

### 1c. Scan existing views
```bash
find app/views -name "*.html.erb" | sort
find app/controllers -name "*.rb" | sort
cat config/routes.rb 2>/dev/null || echo "routes.rb: EMPTY OR MISSING"
```

### 1d. Deliver the Diagnosis Report
```
════════════════════════════════════════
DIAGNOSIS REPORT
════════════════════════════════════════
Ruby:              [version]
Rails:             [version]
Tailwind gem:      [installed / missing]
Tailwind config:   [exists / missing]
application.tailwind.css: [exists / missing]
bin/dev:           [exists / missing]

STITCH FILES ([count] total)
────────────────────────────
[numbered list of every .html filename]

EXISTING RAILS VIEWS ([count])
──────────────────────────────
[list or "none"]

EXISTING ROUTES
───────────────
[summary or "none"]

WHAT I NEED TO DO
─────────────────
[ ] Fix Tailwind setup     (Stage 2)
[ ] Build shared CSS       (Stage 3)
[ ] Create shared layout   (Stage 4)
[ ] Build flow map         (Stage 5)
[ ] Convert views          (Stage 6)
[ ] Wire navigation        (Stage 7)
[ ] Create routes          (Stage 8)
[ ] Final verify           (Stage 9)
════════════════════════════════════════
```

Say: "Does this look right? Type 'proceed' when ready."
Wait. Do not continue until user says proceed.

---

## STAGE 2 — FIX TAILWIND (Skip If Already Working)

Only run this if Diagnosis shows Tailwind is broken or missing.

### 2a. If tailwindcss-rails gem is missing:
```bash
bundle add tailwindcss-rails
bundle install
bin/rails tailwindcss:install
```

### 2b. If gem exists but config or css file is missing:
```bash
bin/rails tailwindcss:install
```

### 2c. Test the build:
```bash
bin/rails tailwindcss:build 2>&1
```

If this fails: stop, show the full error, do not proceed.
If this passes: report "Tailwind build working ✅"

### 2d. Write the WPM Coach canonical config to config/tailwind.config.js:
```javascript
module.exports = {
  darkMode: "class",
  content: [
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9BFC50",
        annotation: "#B2FA6C",
        "background-dark": "#000000",
        "accent-mid": "#6BD62E",
        "accent-dark": "#57A325",
        "ui-grey": "#9E9E9E",
        "ui-border": "#4B4B4B",
        "ui-white": "#F0F0F0",
        "bg-surfaceAlt": "#181A1B",
        "stroke-divider": "#595959",
        "bg-card": "#1F2224",
        "blue-accent": "#2D6AEF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Oswald", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
      },
    },
  },
};
```

Say: "Tailwind is set up and building correctly. Type 'proceed' for next stage."
Wait.

---

## STAGE 3 — BUILD THE SHARED CSS

This is the single wardrobe. Every page will dress from here.

### 3a. Read every Stitch HTML file and extract:
- Everything inside `<style type="text/tailwindcss">` tags
- Everything inside plain `<style>` tags
- DO NOT extract `<script>` blocks with tailwind.config — those are replaced by the config file

### 3b. Write app/assets/stylesheets/application.tailwind.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ============================================================
   WPM Coach — Custom Utility Classes
   Single source of truth for ALL custom CSS across the app.
   Extracted verbatim from Stitch exports.
   
   DO NOT edit styles here to fix visual issues.
   If something looks wrong, restore from original Stitch file.
   ============================================================ */

/* ---- Source: [filename] ---- */
[paste full style block contents verbatim]

/* ---- Source: [next filename] ---- */
[paste full style block contents verbatim]

[repeat for every file]
```

Extraction rules:
- Copy every rule exactly as written — no reformatting, no deduplication
- If identical class appears in multiple files, include it once from the first file
  and note: `/* also defined in: [filename, filename] */`
- Preserve all comments from original style blocks

### 3c. Run the build and verify:
```bash
bin/rails tailwindcss:build 2>&1
```

Report:
```
application.tailwind.css  →  [X] lines written
Source files included:        [list]
Build result:                 ✅ success / ❌ error
```

If error: show full output, stop, do not proceed.

Say: "Shared CSS built. Type 'proceed' for next stage."
Wait.

---

## STAGE 4 — CREATE THE SHARED LAYOUT

One layout to rule them all. Every page uses this automatically.

Write app/views/layouts/application.html.erb:

```erb
<!DOCTYPE html>
<html class="dark" lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title><%= content_for?(:title) ? yield(:title) : "WPM Coach" %></title>

  <%# Google Fonts — Inter + Oswald + Material Icons %>
  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Oswald:wght@700&display=swap" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>

  <%# Single compiled stylesheet — all pages share this %>
  <%= stylesheet_link_tag "application", "data-turbo-track": "reload" %>
  <%= csrf_meta_tags %>
  <%= csp_meta_tag %>
</head>
<body class="<%= content_for?(:body_class) ? yield(:body_class) : "bg-[#000000] text-ui-white font-sans antialiased min-h-screen" %>">
  <%= yield %>
</body>
</html>
```

Say: "Shared layout created. Type 'proceed' for next stage."
Wait.

---

## STAGE 5 — BUILD THE FLOW MAP FROM THE SPEC DOC

This is the most important stage. Before converting a single view, we derive
the complete navigation map from the spec doc — no questions asked.

### 5a. Find the spec doc automatically:
```bash
find . -maxdepth 3 -name "*.md" | grep -iv "readme\|changelog\|gemfile\|skill" | sort
```

Show the list and say:
> "I found these markdown files. Which one is the WPM Coach spec / screen flow doc?
> Or give me the exact path."

Wait for user to confirm the path. Then read the full file.

### 5b. Extract from the spec doc — derive three things:

**1. Screen inventory** — every screen name and its Stitch filename equivalent
**2. Navigation map** — every button/link and where it goes
**3. Controller grouping** — which screens belong together (onboarding, assessment, etc.)

### 5c. Cross-reference with actual Stitch files:
```bash
ls [stitch folder]/*.html | sort
```

Match every screen in the spec to a Stitch filename.

**If files are numbered** (e.g. `15_adult_assessment_complete.html`):
Use the number + descriptive name to auto-match. The number sequence and
description together make this near-exact. Present auto-matched pairs
with a ✅ and only flag items where you genuinely can't determine the match.

**If files are not numbered:** Use fuzzy matching on the descriptive name
and flag anything ambiguous.

If a spec screen has no matching file — flag it with ⚠️
If a Stitch file has no matching spec entry — flag it with ⚠️

### 5d. Build and present the complete auto-generated flow map:

```
════════════════════════════════════════════════════════
FLOW MAP — Auto-generated from spec doc
════════════════════════════════════════════════════════
Source: [spec doc path]

CONTROLLER: onboarding
────────────────────────────────────────────────────────
Stitch file                    → Rails view              
01_onboarding_step_1.html      → onboarding#step1        
02_onboarding_step_2a.html     → onboarding#step2a       

NAVIGATION WIRING:
  onboarding/step1  "Get Started"    → /onboarding/step2a
  onboarding/step1  "Learn More"     → /onboarding/step2b
  onboarding/step2a "Continue"       → /assessment/start

CONTROLLER: assessment
────────────────────────────────────────────────────────
[continues for every controller group]

════════════════════════════════════════════════════════
FLAGGED ITEMS (need your attention):
  ⚠️  Spec screen "Dashboard" — no matching Stitch file found
  ⚠️  File "12_misc.html" — not mentioned in spec
════════════════════════════════════════════════════════
Does this look right? 
Type 'proceed' to use this map, or correct anything that's wrong.
If everything looks good, I won't ask you about individual pages again.
════════════════════════════════════════════════════════
```

### 5e. Wait for a single confirmation — then lock the map.

Once the user says 'proceed', this map is locked and used for:
- Stage 6: naming every view file
- Stage 7: wiring every href
- Stage 8: generating every route and controller

The user is never asked about individual pages again.

### 5f. Save the locked flow map to .claude/wpm-coach-flow-map.md:

```markdown
# WPM Coach Flow Map
# Generated from: [spec doc path]
# Locked: [date]
# Do not edit manually — re-run Stage 5 to regenerate

## Screen → View Mapping
| Stitch File | Rails Controller | Action | URL Path |
|-------------|-----------------|--------|----------|
| 01_onboarding_step_1.html | onboarding | step1 | /onboarding |
[complete table]

## Navigation Wiring
| From Page | Element | Label | To Path |
|-----------|---------|-------|---------|
| onboarding/step1 | button | Get Started | /onboarding/step2a |
[complete table]
```

This file is the source of truth for Stages 6, 7, and 8.
If anything needs to change, update this file and the user confirms before continuing.

---

## STAGE 6 — CONVERT VIEWS (One at a Time, In Flow Order)

Process files in the order of the flow map — start page first.

### 6a. For each file, ask user to confirm the Rails view path:
> "Converting: [stitch filename]
> I'll save it as: app/views/[controller]/[action].html.erb
> Is that correct? Say 'yes' or give me the correct path."

Wait for confirmation before writing anything.

### 6b. What to STRIP from the Stitch file (remove these exactly):
```
<!DOCTYPE html>
<html ...> tag
Everything from <head> to </head> inclusive
<body ...> opening tag  
</body> closing tag
</html> closing tag
ALL <style> blocks (already in application.tailwind.css)
ALL <script> blocks containing tailwind.config
```

### 6c. What to KEEP (copy verbatim, touch nothing):
```
Every single element inside <body>...</body>
All CSS classes on all elements — exactly as written
All text content
All SVGs, icons, images
All existing href="#" values — DO NOT change them yet (Stage 7 does this)
All data-* attributes
All aria-* attributes
```

### 6d. The converted file format:
```erb
<%# ═══════════════════════════════════════════════════════════
    Walking Skeleton View
    Converted from: [original stitch filename]
    Stage: PROTOTYPE — all data is hardcoded, no logic
    To add real data: replace hardcoded values with erb tags
    ═══════════════════════════════════════════════════════════ %>
<%= provide(:title, "WPM Coach — [Page Name]") %>

<%# NOTE: Values like scores, names, etc. are hardcoded for prototype %>
<%# Replace with real data when wiring business logic in Phase 2 %>

[paste full body content verbatim — every class, every element, unchanged]
```

### 6e. After writing each file:
```
✅ [stitch filename] → [rails path]
   Stripped: DOCTYPE, html, head, body wrapper tags, style blocks, config scripts
   Kept:     all [X] body elements, all classes, all content — untouched
   Lines:    [before] → [after]
   
   👀 Open http://localhost:3000/[path] — does it look right?
   Type 'next' to continue or 'stop' if something looks wrong.
```

Wait for 'next' or 'stop' before processing the next file.

### 6f. If user says 'stop':
```
Stopped on [filename]. No other files have been touched.
Options:
  (a) Restore this file from the original Stitch source
  (b) Show me the diff so you can decide what happened
  (c) Skip this file and come back to it later
Which do you want?
```

Never try to fix a visual issue by editing CSS. Always restore from original.

---

## STAGE 7 — WIRE THE NAVIGATION

Now we take the flow map from Stage 5 and apply it to every view.
This is what turns a set of pages into a walkable app.

### 7a. For each view, apply the flow map:

Go through every navigation element identified in Stage 5.
Replace `href="#"` with the confirmed Rails path.

Rules for href replacement:
```
CHANGE:  href="#"  →  href="/confirmed/path"
CHANGE:  href=""   →  href="/confirmed/path"

DO NOT CHANGE:
  - Any href that already has a real path
  - Any class, style, or other attribute
  - Any text content
  - Any HTML structure

For "dead end" buttons: replace href="#" with href="javascript:void(0)"
and add a comment: <%# DEAD END — no destination in prototype %>
```

### 7b. Process one file at a time:
```
Wiring navigation in: [filename]
  "Get Started" button    #  →  /onboarding/step2  ✅
  "Profile" nav link      #  →  /profile           ✅
  
  Changes made: 2 href values
  Everything else: untouched
  
  👀 Click the buttons — do they go to the right pages?
  Type 'next' to continue or 'stop' if something is wrong.
```

Wait between each file.

---

## STAGE 8 — ROUTES AND CONTROLLERS

All views wired. Now create the Rails routing layer.

### 8a. Generate the complete routes file from the flow map.
Show it to the user first:

```ruby
Rails.application.routes.draw do

  # ── Onboarding ──────────────────────────────
  root to: "onboarding#step1"
  get "/onboarding",           to: "onboarding#step1"
  get "/onboarding/step2",     to: "onboarding#step2"

  # ── Assessment ──────────────────────────────
  get "/assessment",           to: "assessment#start"
  get "/assessment/results",   to: "assessment#results"

  # [complete routes generated from flow map]

end
```

Ask: "Does this routing look correct? Any changes before I write it?"
Wait for confirmation.

### 8b. Generate controllers — one per resource group:

```ruby
# app/controllers/onboarding_controller.rb
class OnboardingController < ApplicationController
  # PROTOTYPE: These actions render views with hardcoded data.
  # Phase 2 will replace hardcoded data with real models and logic.
  
  def step1; end
  def step2; end
end
```

No models. No instance variables with real data. No before_actions for auth.
Empty actions only — the view handles everything for the prototype.

### 8c. Verify every route:
```bash
bin/rails routes | grep -v "^  Prefix"
```

Then test each one:
```bash
curl -s -o /dev/null -w "%{http_code}  %{url_effective}\n" http://localhost:3000/[each route]
```

Report:
```
200  /onboarding          ✅
200  /onboarding/step2    ✅
404  /assessment/results  ❌ — fixing now
```

Fix all 404s before proceeding.

---

## STAGE 9 — FINAL VERIFICATION

### 9a. Rebuild CSS one final time:
```bash
bin/rails tailwindcss:build 2>&1
```

### 9b. Run the full route check:
```bash
curl -s -o /dev/null -w "%{http_code}  %{url_effective}\n" http://localhost:3000/[every route]
```

All must return 200.

### 9c. Ask the user to do a full walkthrough:
> "Please click through the complete app flow from the first page to the last.
> Check that every page looks right and every button goes somewhere.
> Report anything that looks wrong and I'll fix it before we close out."

### 9d. Deliver the completion report:

```
════════════════════════════════════════
WALKING SKELETON COMPLETE 🎉
════════════════════════════════════════
Pages converted:       [X]
Controllers created:   [X]
Routes wired:          [X]
Navigation links:      [X]

What you have now:
  ✅ Every page renders exactly as designed
  ✅ Every button navigates correctly
  ✅ Full app flow is walkable start to finish
  ✅ One shared CSS file — no drift, no duplication
  ✅ Designs are locked — no more CSS work needed

Key files:
  CSS source:   app/assets/stylesheets/application.tailwind.css
  CSS output:   app/assets/builds/application.css
  Config:       config/tailwind.config.js
  Layout:       app/views/layouts/application.html.erb

Originals untouched: [original stitch path]

What comes next (Phase 2):
  → Add models and database logic
  → Replace hardcoded data in views with real erb
  → Add authentication
  → Connect APIs
  The design never needs to change again.
════════════════════════════════════════
```

---

## RECOVERY PROTOCOL (Any Stage)

If a page looks visually wrong after any operation:

```
Step 1: Stop all processing immediately
Step 2: Do NOT edit any CSS or HTML to fix it
Step 3: Say exactly this:
        "Visual issue on [page]. No other files touched.
         Options:
         (a) Restore [filename] from original Stitch file
         (b) Show me exactly what changed
         (c) Skip and come back later"
Step 4: Wait for user instruction
Step 5: After restore, confirm it looks right before continuing
```

The original Stitch files are the ground truth. Always.

---

## PHASE 2 HANDOFF NOTES (Add at End of Each View File)

At the bottom of every converted view, add this comment block:

```erb
<%#
  ═══════════════════════════════════════════════════
  PHASE 2 WIRING NOTES — [Page Name]
  ═══════════════════════════════════════════════════
  Hardcoded values in this view that need real data:
  
  Line [X]: Score "52" → replace with <%= @result.wpm %>
  Line [X]: "Your email address" → replace with form_with
  Line [X]: User name "Alex" → replace with <%= current_user.name %>
  
  Actions needed in Phase 2:
  - [ ] [describe what logic this page needs]
  ═══════════════════════════════════════════════════
%>
```

This means when Phase 2 starts, every view is pre-annotated with exactly
what needs to be replaced. No hunting through files.
