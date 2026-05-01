# Testing Swift — A Different Perspective
## Full Chapter Breakdown

---

**Introduction — Why I Avoided Testing and Why I Wrote This Book**
The honest story behind this book. How testing never clicked for years, what finally made it click, and why the way most books teach testing doesn't work for the way most developers think. Jon Reid, the NBA All-Star Voting app, Deep Dish Swift, and the framework that came out of all of it. This book isn't the destination — it's the record of a journey.

**Chapter 1 — The Testing Mindset**
No code. Just thinking. The two schools of testing — Detroit school inside-out and London school outside-in — and why knowing both exist changes everything. Red, green, refactor explained plainly. Testing vocabulary introduced through scenarios you already understand, not definitions you have to memorize. By the end of this chapter you know what a test is, why you write it, and what the rest of the book is going to do.

---

## PART 1A — SWIFT TESTING · NEW APP
### SkyTrack — Built from scratch. Tests from day one.

You're starting fresh. SkyTrack is a flight booking app and you're building it the right way — tests written before the code that makes them pass. This is the ideal world. You know it rarely happens. But understanding how to do it from scratch is the foundation everything else is built on.

---

**Chapter 2 — Search**
Your first tests. You look at the search screen and ask — what does this screen need to do? From that question you build the FlightSearch model and write your first three tests using @Test, #expect, and #require. If you've never written a test before the beginner callout walks you through it step by step — function first, then @Test, then #expect. If you have, you already know where this is going. Either way you end this chapter with green tests and a model that does exactly what the screen needs.

**Chapter 3 — Flight Results**
The results come from the SkyBook API which means async code. You build FlightResult, write your first async tests using await, and introduce test doubles — a fake API that always returns exactly what you tell it to. No more tests that fail because the network was slow. No more tests that pass because the server happened to be up. Fast, predictable, and always green.

**Chapter 4 — Fare Selection**
The fare selection screen has rules. Basic Economy doesn't allow seat selection. Main does. Prices depend on cabin class, route, and passenger count. You build FareOption and write tests that lock in every rule — including what happens when someone tries to select an invalid combination. This is where you learn what it means to test code that depends on other code.

**Chapter 5 — Passenger Details**
One passenger, one form. Three passengers, three forms. The screen changes based on what the user already told you — and every state needs to be tested. You build the Passenger model, write state-based tests that confirm the screen behaves correctly in every scenario, and use parameterized tests to cover all the validation rules without writing the same test five times.

**Chapter 6 — Seat Selection**
The most complex screen in the app. Seat maps change based on aircraft type. A window seat on a 737 is a completely different thing than a window seat on an A380 with two floors. You build Seat and SeatMap, write tests that cover every layout rule, section assignment, and boundary condition — including what happens when a section fills up and someone tries to book it anyway.

**Chapter 7 — Confirmation**
The booking is made and the reference number comes back. Now you need to make sure it's still there when the app relaunches. You introduce SwiftData and write tests that confirm data is saved correctly, loaded correctly, and nothing is lost between sessions. The chapter that turns a feature into something you can actually trust.

**Bonus — AI as a Testing Partner**
Now that you understand Swift Testing you can actually use AI effectively. How to prompt for tests that mean something, how to read what AI gives you, and why a passing test and a meaningful test are not the same thing. The difference between AI writing the syntax and AI understanding what you're testing.

---

## PART 1B — USERSPEC · NEW APP
### SkyTrack — Same app. Same screens. Now start from the design.

You already built SkyTrack with tests. Now you come back to it with a completely different approach. Instead of starting with the model you start with the finished design. You write user stories in plain English that describe what the user does — and let those stories drive everything. This is the outside-in approach. This is what finally made testing click.

---

**Chapter 8 — Introduction to Design-Driven Development**
You step back from code entirely. What does it mean to start from the design? What is a user story? What is Given, When, Then — and why does it make tests readable by anyone, not just developers? You look at the finished SkyTrack search screen and write your first user stories from what you see. Not from what the model needs. From what the user does. Then you watch those stories become executable tests using UserSpec.

**Chapter 9 — Search**
The search screen as a UserSpec suite. You write step definitions that map plain English to real Swift Testing code and make those steps reusable so every scenario that needs them can share them. The same screen you tested in Chapter 2 — now tested from the outside in. The contrast between the two approaches on identical code is where outside-in testing starts to make sense.

**Chapter 10 — Flight Results**
One story, many examples. The flight results screen has dozens of valid scenarios — different prices, stop counts, airlines, baggage options. Scenario outlines let you run the same story with multiple sets of data without writing a separate scenario for each combination. Less code. More coverage. And tests that read like a product spec.

**Chapter 11 — Fare Selection**
Every fare scenario starts from the same place — a specific flight, a specific passenger count. Background steps set that shared context once so every scenario in the suite starts clean. The chapter where you stop repeating setup code and start writing stories that focus on what actually matters.

**Chapter 12 — Passenger Details**
The passenger details screen has two completely different types of validation — name rules and government ID rules. Tags let you group them separately, run only what you need, and keep your suite organized as it grows. You also learn how to write scenarios for edge cases that never come up in normal use but will absolutely come up in production.

**Chapter 13 — Seat Selection**
Passenger 1 picks a seat. Passenger 2 picks a seat. Both confirmed. You write multi-step flows that cover the full seat selection process for single and multi-passenger bookings — including the A380 upper deck vs main deck as a scenario a product manager could hand to a developer and have them understand immediately.

**Chapter 14 — Confirmation**
One spec that goes from search all the way to a confirmed booking reference. The full user journey in plain English. Hooks set up the complete booking state before each scenario and clean up after — making the end-to-end suite fast, reliable, and readable. The chapter that ties everything in Part 1 together.

**Bonus — AI and Design-Driven Development**
How to use AI to help write user stories from a finished design — and where it completely falls apart. AI can write the Given, When, Then syntax. It cannot tell you what the user actually needs. That gap is where your judgment as a developer matters most.

---

## PART 2A — SWIFT TESTING · EXISTING APP
### SkyBook — Already built. Zero tests. More broken than you think.

SkyBook is a Flighty-style live flight tracker. It's already built. It works — at least you think it does. Nobody has ever written a test against it. And the moment you start you're going to find things you never knew were broken. This is the real world. This is where most developers actually are.

---

**Chapter 15 — Live Flight Map**
Where do you even start? When you open an existing codebase with zero tests the first question is always the same — where do I even begin? You develop a strategy for approaching untested code, find the seams where it can be pulled apart for testing, and write your first tests against the LiveFlight model. The chapter that answers the question nobody else bothers to answer.

**Chapter 16 — Flight List**
You start writing tests against the existing flight list and find something. The filtering logic that was assumed to work has a bug. The sort order that was never questioned produces the wrong result in an edge case. The code that looked fine has been quietly wrong since it was written. This is why you test existing code. Not to prove it works. To find out if it does.

**Chapter 17 — Flight Detail**
The flight detail screen has computed properties that were never designed for testing — progress percentage, estimated arrival time, deck information for the A380. You refactor just enough to make the code testable without breaking what already works. The chapter on doing the minimum necessary to make untestable code testable.

**Chapter 18 — Airport Detail**
The airport model has dependencies baked into it that make it hard to test. Location data. External services. Things that were convenient when you wrote them and are a problem now. You introduce protocol boundaries that let you replace real dependencies with fakes — without rewriting everything from scratch. This is how you add tests to code you didn't design for testing.

**Chapter 19 — Route Browser**
28 routes, 20 cities, 6 aircraft types. You write parameterized tests against the existing route data and find edge cases the original implementation never handled. Not because someone was careless — because edge cases are invisible until a test makes them visible. The chapter that shows you what parameterized testing finds when it runs against real data.

**Chapter 20 — Stats**
The stats screen shows live data that changes every day. You can't hardcode expected values because the values change. You write behavior-focused tests that confirm what the screen does rather than what it returns — and discover the difference between testing the output and testing the behavior. A distinction that matters more than almost anything else when you're testing a screen connected to a live data source.

**Bonus — AI and Existing Codebases**
AI is especially useful when adding tests to code you didn't write — and especially dangerous. How to use AI to explore an unfamiliar codebase, prompt for tests against existing models, and recognize when AI-generated tests are giving you false confidence instead of real coverage.

---

## PART 2B — USERSPEC · EXISTING APP
### SkyBook — Same app. Now do it outside-in.

You've already added Swift Testing to SkyBook. Now you come back one more time with UserSpec. You're going to write user stories for screens you didn't design, against code you didn't write, for behavior that was never documented. This is the hardest version of outside-in testing. It's also the most valuable.

---

**Chapter 21 — Live Flight Map**
Writing user stories for a screen you didn't design is different from writing them for a screen you built. You have to figure out what the user is supposed to experience before you can describe whether the screen delivers it. You write the first stories for the live flight map and discover behavior that was assumed, never documented, and in one case quietly wrong.

**Chapter 22 — Flight List**
You can't hardcode which flights are delayed today because the data resets daily. You write behavior-focused scenarios that confirm what the list does — how it filters, how it sorts, what it shows when everything is on time — without ever referencing a specific flight number or status. The chapter on testing live data without making your tests fragile.

**Chapter 23 — Flight Detail**
The flight detail screen changes every few seconds. Hooks let you set up a specific live flight state before each scenario and tear it down after — giving you control over a screen that was never designed with testing in mind. The chapter on making unstable screens testable without rewriting them.

**Chapter 24 — Airport Detail**
Writing user stories for existing code forces you to articulate behavior that was assumed, not documented. The airport detail screen does things that nobody wrote down. Some of them are right. Some of them aren't. You find both by trying to describe the expected behavior in plain English and discovering where the description doesn't match the reality.

**Chapter 25 — Route Browser**
Scenario outlines against a fixed data set. 28 routes written as stories. The edge cases the original implementation never handled become visible the moment you try to describe the expected behavior for every combination. The chapter where outside-in testing finds the same bugs parameterized testing found — just from a completely different direction.

**Chapter 26 — Stats**
The final chapter. A UserSpec suite that describes everything the stats screen does in plain English that anyone on the team can read — developer, designer, or product manager. Living documentation. The thing that keeps your specs in sync with the app as it evolves and makes onboarding a new developer something that takes hours instead of weeks.

**Bonus — AI and UserSpec at Scale**
When your UserSpec suite grows AI becomes a powerful maintenance tool. How to use AI to audit your suite for gaps, find missing scenarios across multiple screens, and keep living documentation current as the product changes. The limits of AI in BDD — and why the Given always requires human understanding.

---

## SUMMARY

```
Part 1A  SkyTrack  Swift Testing  New App       Ch 2–7    + Bonus
Part 1B  SkyTrack  UserSpec       New App       Ch 8–14   + Bonus
Part 2A  SkyBook   Swift Testing  Existing App  Ch 15–20  + Bonus
Part 2B  SkyBook   UserSpec       Existing App  Ch 21–26  + Bonus
```

**26 chapters. 4 bonus chapters. 2 apps. 1 live API.**
