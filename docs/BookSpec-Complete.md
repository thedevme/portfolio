# Testing Swift — A Different Perspective
## Complete Book Spec
### For Claude Code / CLI Implementation
*Craig Clayton — mobiledesigndev.com*

---

## OVERVIEW

**Title:** Testing Swift — A Different Perspective
**Author:** Craig Clayton
**Website:** mobiledesigndev.com
**Platform:** Gumroad
**Format:** PDF (all future updates included)

**Pricing:**
- Early Access: $29 (April 7, 2026)
- Full Book: $39 (May 2026)
- Challenge Companion PDF: $10
- Bundle (Book + Companion): $45

---

## THE BOOK

### What This Book Is

Testing Swift covers two real-world scenarios that mirror what developers actually face. The first is a flight tracker app you build from scratch — tests written from day one, the ideal starting point.

But we all know that almost never happens. Most developers are dealing with legacy code, or someone else started the project, or upper management just decided tests are now a priority and you have no idea where to begin.

That's where Part 2 comes in.

In Part 2 of Testing Swift we work through an app that's entirely built but has zero tests. And it has way more broken code than you think — you just don't know it yet because nothing is catching it. We'll come up with a plan to integrate tests slowly and strategically so that eventually the parts that desperately need coverage have it. So you can actually sleep at night knowing tests have your back.

---

## THE TWO APPS

### App 1 — SkyTrack (Built From Scratch in Part 1A and Part 2A)
A Flighty-style live flight tracker. Built from scratch in Part 1A with tests from day one. Revisited in Part 2A with UserSpec outside-in approach.

**SkyTrack Screens (6):**
1. Search
2. Flight Results
3. Fare Selection
4. Passenger Details
5. Seat Selection
6. Confirmation

**Challenge (end of Chapter 6):** Review & Pay — solution in companion PDF.

---

### App 2 — SkyBook (Already Built in Part 1B and Part 2B)
A full airline booking app — already built, zero tests, more broken than you think. Used in Part 1B to show how to add Swift Testing to an existing codebase. Revisited in Part 2B with UserSpec.

**SkyBook Screens (6):**
1. Live Flight Map
2. Flight List
3. Flight Detail
4. Airport Detail
5. Route Browser
6. Stats

---

## THE API

**Rails 7.2 / PostgreSQL / Hosted on Railway**
**Domain:** skybook-api.up.railway.app (Railway auto-generated domain)
**Auth:** API key via Gumroad webhook ping — readers get their key by email after purchase

### Auth Flow
1. Reader buys book on Gumroad
2. Gumroad fires POST to /gumroad/ping with buyer email
3. Rails generates unique API key (sk_ + 32 hex chars)
4. Emails reader their key via ApiKeyMailer
5. Reader uses key as Authorization: Bearer token on all requests

### Key Recovery
- POST /api/v1/keys/recover — public, no auth required
- Accepts email, resends existing key
- Rate limited: 3 requests/hour per IP
- Always returns same 200 response — never reveals if email exists

### Reset Schedule
- Daily midnight UTC: Flight statuses randomize
- Weekly Sunday midnight UTC: Seat availability and pricing reset

### Endpoints

#### Flights
- GET /api/v1/flights — search/browse flights
- GET /api/v1/flights/:id — single flight detail

#### Seats
- GET /api/v1/flights/:flight_id/seats — seat map for flight
- GET /api/v1/flights/:flight_id/seats/:id — single seat

#### Bookings
- POST /api/v1/bookings — create booking
- GET /api/v1/bookings — reader's bookings
- GET /api/v1/bookings/:id — single booking
- DELETE /api/v1/bookings/:id — cancel booking

#### Live Flights
- GET /api/v1/live/flights — all flights currently in air
- GET /api/v1/live/flights/:id — single flight live position
- GET /api/v1/live/stats — summary stats

#### Airports
- GET /api/v1/airports — all 20 airports
- GET /api/v1/airports/:id — single airport with routes

#### Routes
- GET /api/v1/routes — all 28 routes
- GET /api/v1/routes/:id — single route detail

#### Stats
- GET /api/v1/stats — on time percentage, cancellations, flights in air

#### Public
- GET /health — health check
- POST /gumroad/ping — Gumroad purchase webhook
- POST /api/v1/keys/recover — key recovery

### Aircraft Types (7)
| Aircraft | Layout | Used For |
|---|---|---|
| Boeing 737-800 | 3-3 single aisle | Short domestic |
| Airbus A320 | 3-3 single aisle | Short domestic |
| Boeing 757-200 | 3-3 single aisle | Medium domestic |
| Airbus A330-300 | 2-4-2 twin aisle | Transatlantic |
| Boeing 777-200 | 3-3-3 twin aisle | Heavy international |
| Boeing 767-300 | 2-3-2 twin aisle | International |
| Airbus A380-800 | Main: 3-4-3 / Upper: 2-4-2 | JFK→DXB only — TWO FLOORS |

### Cities (20)
**Domestic (10):** TPA, JFK, LAX, ORD, BOS, MIA, SEA, DEN, ATL, DFW
**International (10):** LHR, CDG, NRT, SYD, DXB, YYZ, MEX, AMS, SIN, GRU

### Routes: 28 total, 107 daily flight segments

---

## CHAPTER BY CHAPTER BREAKDOWN

### Introduction — Why I Avoided Testing and Why I Wrote This Book
Available at launch.

The story of how testing never clicked until Jon Reid jumped on a Zoom call and said — what do you see on screen? Let's write a test for that. The NBA All-Star Voting app. Deep Dish Swift. UserSpec. This book isn't the destination. It's the record of a journey.

---

### Chapter 1 — The Testing Mindset
Available at launch.

The two schools of testing — Detroit (inside-out) and London (outside-in). Red, green, refactor. Testing vocabulary without a single line of code. The road trip analogy. Why most developers get stuck at the starting point, not the concept.

---

## PART 1A — SWIFT TESTING · NEW APP
*SkyTrack — built from scratch, tests from day one, the ideal world.*

---

### Chapter 2 — Search
Your first tests with Swift Testing. @Test, #expect, #require. The FlightSearch model and what the search screen tells you it needs. Building up step by step — function first, then @Test, then #expect. Red, green, refactor in action for the first time. Beginner callout boxes for first-time concepts. Everyone lands on the same final code block.

**Swift Testing Concepts:** @Test, @Suite, #expect, #require
**Model:** FlightSearch
**API:** None — local model only
**Challenge:** The departure date can't be in the past. Write the test, then add the property to make it pass.

---

### Chapter 3 — Flight Results
Async testing with await. The FlightResult model. What happens when your data comes from a real API instead of a local struct. Test doubles introduced for the first time — replacing the real API with a fake that returns exactly what you tell it to.

**Swift Testing Concepts:** async/await testing, test doubles, protocols, fakes
**Model:** FlightResult
**API:** GET /api/v1/flights
**Challenge:** The Lowest Price badge should appear on the cheapest flight in results. Write a test that confirms the correct flight gets the badge given a list of flights with different prices.

---

### Chapter 4 — Fare Selection
Testing with dependencies. The FareOption model. Pricing rules, cabin classes, and what happens when an invalid combination is selected. How the test tells you what the model needs rather than designing the model first.

**Swift Testing Concepts:** Dependency testing, computed properties
**Model:** FareOption
**API:** GET /api/v1/flights/:id
**Challenge:** Basic Economy doesn't allow seat selection. Write a test that confirms a FareOption with .basicEconomy returns false for allowsSeatSelection. Then confirm .main returns true.

---

### Chapter 5 — Passenger Details
State-based testing. The Passenger model. Form validation, government ID rules, and how the screen changes based on passenger count. One passenger — one form. Three passengers — three forms. Testing state transitions.

**Swift Testing Concepts:** State-based testing, parameterized tests
**Model:** Passenger
**API:** None — local model only
**Challenge:** Review & Pay — the reader has everything they need. Write tests for the ReviewSession model that confirms the total price, passenger count, and selected seats are all correct before the Pay button is enabled. Solution in companion PDF.

---

### Chapter 6 — Seat Selection
Testing complex models. Seat maps, aircraft layouts, section assignments. The difference between a window seat on a 737 and a window seat on an A380 with two floors. What happens when a section fills up.

**Swift Testing Concepts:** Complex model testing, computed properties, nested data
**Models:** Seat, SeatMap
**API:** GET /api/v1/flights/:flight_id/seats
**Challenge:** The A380 has two floors. Write a test that confirms a seat on the upper deck returns .upperDeck and a seat on the main deck returns .mainDeck. Then confirm upper deck seats are always Business or First — never Economy.

---

### Chapter 7 — Confirmation
Persistence with SwiftData. The Booking model. Saving a booking reference, reading it back, confirming nothing is lost between sessions. The difference between a test that passes and a test that actually proves something.

**Swift Testing Concepts:** SwiftData testing, persistence, integration tests
**Model:** Booking
**API:** POST /api/v1/bookings, GET /api/v1/bookings/:id
**Challenge:** Book three flights, delete the second, confirm the remaining two are still correct after the model container is recreated from scratch.

---

### BONUS — AI as a Testing Partner
Now that you understand Swift Testing you can actually use AI effectively. How to prompt for tests that mean something. How to evaluate what AI gives you — because a passing test and a meaningful test are not the same thing. When to trust AI-generated tests and when to throw them out. The difference between AI writing the syntax and AI understanding what you're testing.

**Topics:**
- How to prompt Claude/Copilot for Swift Testing tests
- How to evaluate if a generated test actually tests anything
- When AI gets it wrong and why
- Using AI to find edge cases you missed
- AI for generating parameterized test data
- What AI still can't do — and why that matters

---

## PART 1B — SWIFT TESTING · EXISTING APP
*SkyBook — already built, zero tests, more broken than you think.*

---

### Chapter 8 — Live Flight Map
Where do you even start? A strategy for approaching an untested codebase. The LiveFlight model and what the map screen is actually doing under the hood. Finding the seams — the places where the code can be pulled apart for testing.

**Swift Testing Concepts:** Testing strategy for existing code, finding seams
**Model:** LiveFlight
**API:** GET /api/v1/live/flights, GET /api/v1/live/flights/:id
**Challenge:** Write a test that confirms a flight's calculated position moves forward over time without hitting the real API.

---

### Chapter 9 — Flight List
Finding the gaps. What the flight list reveals when you start writing tests against code you didn't write — or wrote too fast to think about. Untested filtering logic. Sort orders that were assumed to work. Edge cases hiding in plain sight.

**Swift Testing Concepts:** Testing existing filtering and sorting logic
**Model:** FlightList, FlightFilter
**API:** GET /api/v1/flights
**Challenge:** The flight list can be filtered by nonstop only. Find the bug in the existing filter implementation using a test. Fix it. Confirm the test passes.

---

### Chapter 10 — Flight Detail
Testing computed properties you didn't design for testing. Flight progress percentage, estimated arrival time, deck information for the A380. Refactoring just enough to make untestable code testable — without breaking what already works.

**Swift Testing Concepts:** Refactoring for testability, computed property testing
**Model:** FlightDetail
**API:** GET /api/v1/flights/:id
**Challenge:** The flight progress percentage should never exceed 100 or go below 0. Write tests for both boundary conditions. Find out if the existing code handles them correctly.

---

### Chapter 11 — Airport Detail
Untangling dependencies. The Airport model, coordinates, routes, and code that was never meant to be tested. How to introduce a protocol boundary into existing code so you can replace real dependencies with fakes.

**Swift Testing Concepts:** Protocol boundaries, dependency injection in existing code
**Model:** Airport
**API:** GET /api/v1/airports/:id
**Challenge:** The airport detail screen shows distance from the user's current location. Write a test that confirms the distance calculation is correct without using CoreLocation directly.

---

### Chapter 12 — Route Browser
Parameterized testing against a fixed data set. 28 routes, 20 cities, 6 aircraft types — and the edge cases your original code never handled. What parameterized tests reveal about assumptions baked into the original implementation.

**Swift Testing Concepts:** Parameterized testing against existing data
**Model:** Route
**API:** GET /api/v1/routes
**Challenge:** Find a route in the data set that your existing validation logic handles incorrectly. Write the failing test. Fix the implementation. Confirm it passes.

---

### Chapter 13 — Stats
Testing live data. The FlightStats model, daily resets, and how you write tests against data that changes every single day. The difference between testing what something returns and testing what something does.

**Swift Testing Concepts:** Testing live data, behavior-over-value testing
**Model:** FlightStats
**API:** GET /api/v1/live/stats, GET /api/v1/stats
**Challenge:** Write a test that confirms the stats screen always shows at least one flight in each status category without hardcoding which specific flights those are.

---

### BONUS — AI and Existing Codebases
AI is especially useful when you're adding tests to code you didn't write — but it's also especially dangerous. How to use AI to explore an unfamiliar codebase and find testable seams. How to prompt for tests against existing models. Why AI-generated tests for legacy code need more scrutiny than tests for new code — and how to tell when AI is testing the wrong thing entirely.

**Topics:**
- Using AI to understand code you didn't write
- Prompting for tests against existing untested models
- How AI finds edge cases in legacy code
- When AI-generated tests give you false confidence
- Using AI to suggest refactoring for testability
- AI for generating test data that matches real-world edge cases

---

## PART 2A — USERSPEC · NEW APP
*SkyTrack — start from the design, write the story first, let it drive everything.*

---

### Chapter 14 — Introduction to Design-Driven Development
What is outside-in testing. How to read a finished design and turn it into user stories. Given, When, Then. Your first executable UserSpec spec. The moment testing stops feeling like extra work and starts feeling like the work.

**UserSpec Concepts:** @UserStory, @Scenario, Given/When/Then, first executable spec
**Screen:** Search
**Challenge:** Look at the Flight Results design. Write 3 user stories from what you see — without looking at any code.

---

### Chapter 15 — Search
The search screen as a user story. What the traveler does, what the app responds with, and what should never be allowed to happen. Reusable steps — write them once, use them across every scenario that needs them.

**UserSpec Concepts:** Step definitions, reusable steps
**Screen:** Search
**Challenge:** The passenger count stepper has a minimum of 1 and a maximum of 7. Write scenarios for both boundary conditions using reusable steps.

---

### Chapter 16 — Flight Results
Scenario outlines. One story, many examples. Testing the same behavior against multiple flights, prices, stop counts, and baggage options without writing a separate scenario for each.

**UserSpec Concepts:** Scenario outlines, multiple examples
**Screen:** Flight Results
**Challenge:** Write a scenario outline that confirms the Lowest Price badge appears on the correct flight for at least 4 different price combinations.

---

### Chapter 17 — Fare Selection
Background steps and shared context. Every fare scenario starts from the same place — a specific flight, a specific passenger count. Background steps set that up once so every scenario starts clean.

**UserSpec Concepts:** Background steps, shared context
**Screen:** Fare Selection
**Challenge:** Write a scenario that confirms Basic Economy shows the correct restrictions for a multi-passenger booking — where the restrictions apply to every passenger, not just one.

---

### Chapter 18 — Passenger Details
Tags and focused runs. Group the government ID validation scenarios separately from the name validation scenarios. Run only what you need. Keep your suite fast and organized.

**UserSpec Concepts:** Tags, filtering scenarios, focused test runs
**Screen:** Passenger Details
**Challenge:** Tag the government ID scenarios separately. Write a focused run that executes only those scenarios.

---

### Chapter 19 — Seat Selection
Multi-step flows. Passenger 1 picks a seat. Passenger 2 picks a seat. Both confirmed. The A380 upper deck vs main deck as a UserSpec scenario — written in plain English that a product manager could read.

**UserSpec Concepts:** Complex scenarios, multi-step flows, multi-passenger
**Screen:** Seat Selection
**Challenge:** Write a scenario for the A380 specifically — a passenger tries to book a main deck seat and an upper deck seat in the same booking. Confirm the correct deck is shown for each.

---

### Chapter 20 — Confirmation
End-to-end scenarios. One spec that goes from search all the way to a confirmed booking reference. The full journey in plain English. Hooks — setting up complete booking state before each scenario and cleaning up after.

**UserSpec Concepts:** End-to-end scenarios, hooks, before/after
**Screen:** Confirmation
**Challenge:** Write an end-to-end scenario for a round trip booking with 2 passengers on an A380 — from search through confirmation. It should read like a story a product manager could hand to a developer and have them understand immediately.

---

### BONUS — AI and Design-Driven Development
How to use AI to help write user stories from a finished design. Where AI is genuinely useful in the outside-in workflow — and where it completely falls apart. AI can write the Given/When/Then syntax. It cannot tell you what the user actually needs. That gap is where your judgment as a developer matters most.

**Topics:**
- Prompting AI to generate user stories from a design screenshot
- How to evaluate AI-generated scenarios for completeness
- Using AI to find scenario edge cases you missed
- Where AI gets outside-in testing wrong — and why
- AI for generating step definitions from existing scenarios
- The difference between AI writing a spec and AI understanding a product

---

## PART 2B — USERSPEC · EXISTING APP
*SkyBook — same app, no tests, now do it outside-in.*

---

### Chapter 21 — Live Flight Map
Writing user stories for a screen you didn't design. What does the user actually expect to see — and when do those expectations break. Finding the behavior that was never written down.

**UserSpec Concepts:** Writing stories for existing screens, uncovering undocumented behavior
**Screen:** Live Flight Map
**Challenge:** Write a scenario that confirms the map always shows at least one live flight regardless of time of day — without hardcoding which flight that is.

---

### Chapter 22 — Flight List
Behavior over values. You can't hardcode which flights are delayed today. You test what the list does — how it filters, how it sorts, what it shows when everything is on time — not what specific values it contains.

**UserSpec Concepts:** Behavior-focused scenarios, testing without hardcoded values
**Screen:** Flight List
**Challenge:** Write a scenario that confirms the delayed flights always appear at the top of the list when the Delayed filter is active — regardless of which specific flights are delayed that day.

---

### Chapter 23 — Flight Detail
Hooks in an existing codebase. Setting up a specific live flight state before each scenario and cleaning up after. Testing a screen whose content changes every few seconds.

**UserSpec Concepts:** Hooks in existing code, setup/teardown, live data scenarios
**Screen:** Flight Detail
**Challenge:** Write a scenario that confirms the flight progress indicator never shows more than 100% or less than 0% regardless of the flight's current state.

---

### Chapter 24 — Airport Detail
Finding untested behavior in existing code using UserSpec. What stories does this screen tell that nobody wrote down when it was built. How writing user stories reveals assumptions baked into the original implementation.

**UserSpec Concepts:** Discovering undocumented behavior, assumption testing
**Screen:** Airport Detail
**Challenge:** Write a user story for a feature the airport detail screen should have but doesn't. Spec it out completely. Don't build it — just write the story.

---

### Chapter 25 — Route Browser
Scenario outlines against a fixed data set. 28 routes written as stories. The edge cases the original code never handled — found only when you tried to describe the behavior in plain English.

**UserSpec Concepts:** Scenario outlines against existing data, edge case discovery
**Screen:** Route Browser
**Challenge:** Find one route in the existing data set where the original implementation behaves incorrectly. Write the failing scenario. Fix the implementation. Confirm it passes.

---

### Chapter 26 — Stats
Living documentation. A UserSpec suite that describes what the stats screen does in plain English that anyone can read — developer, designer, or product manager. How to keep your specs in sync with the app as it evolves.

**UserSpec Concepts:** Suite organization, living documentation, spec maintenance
**Screen:** Stats
**Challenge:** Generate a human-readable report from the full UserSpec suite. Share it with someone who isn't a developer and ask if they understand what the app does from reading it alone.

---

### BONUS — AI and UserSpec at Scale
When you have a large UserSpec suite, AI becomes a powerful maintenance tool. How to use AI to identify gaps in your scenario coverage. How to prompt for missing edge cases across an entire suite. How AI can help keep living documentation in sync with a changing product — and where human judgment is still the only thing that works.

**Topics:**
- Using AI to audit your UserSpec suite for gaps
- Prompting for missing scenarios across multiple screens
- AI for keeping living documentation current
- How to use AI to generate scenarios from design change notes
- The limits of AI in BDD — why the "given" always requires human understanding
- Using AI to translate UserSpec output into product documentation

---

## CHALLENGE COMPANION PDF — $10

Every chapter ends with a challenge. The companion PDF has every solution.

**Section 1** — Solution code only. Drop it in, run the tests, move on. For experienced developers who just want to check their work.

**Section 2** — Step-by-step walkthrough of how to arrive at the solution. For developers who want to understand not just what the answer is but how to think through it.

The 80/20 split: the main book covers the common scenarios. The companion covers the harder edge cases.

---

## LANDING PAGE CONTENT

### Headline
This Isn't Your Normal Testing Book.

### Subheadline
A Different Perspective

### Body
Most testing books teach you the same thing the same way. This one doesn't. Testing Swift shows you how to test from two completely different starting points — a brand new app built with tests from day one, and an existing app that has none. Same framework. Same live API. Completely different reality.

### Buy Buttons
- Buy Early Access — $29
- Bundle with Challenge Companion — $45
- Download a free chapter (link to Chapter 1 PDF)

### Chapter List Format
Same as azamsharp.school/swiftui-architecture-book.html — chapter title, one sentence description, Available or Coming Soon status.

### Who This Book Is For
- The developer who has an existing app and has no idea where to start adding tests
- The developer starting a new project who wants to do it right from day one
- The developer who bought every other testing book and put it down three chapters in
- The intermediate developer who needs testing to move into a senior role
- The developer using AI to write tests who wants to know if those tests are actually any good

### What You Get
Two real iOS apps. A live shared API that every reader hits simultaneously. Flights that actually take off. Seats that actually get booked. A plan for both starting fresh and retrofitting an existing codebase. PDF format. All future updates included.

---

## OUTREACH TARGETS AT FULL LAUNCH
- Sean Allen
- Paul Hudson
- Jon Reid
- Azam Sharp

---

## TIMELINE
- April 7, 2026 — Early access launch at $29, landing page live, Chapter 1 and 2 available
- April 7–30 — Chapters released as written
- May 2026 — Full launch at $39, full outreach

---

## ARCHITECTURE NOTES
- MV pattern throughout — no MVVM, no ViewModel layer
- @Observable for state
- SwiftData for persistence
- Swift Testing (not XCTest) throughout Part 1
- UserSpec (open source, built on Swift Testing) throughout Part 2
- Walking skeleton provided for SkyTrack at start of Part 1A
- SkyBook provided fully built at start of Part 1B

---

## USERSPEC
- Repo: github.com/thedevme/UserSpec
- License: Apache 2.0
- Swift Package Manager
- Built on top of Swift Testing
- 192 tests across 42 test suites

---

*Book Spec v2.0 — March 2026*
*Testing Swift — A Different Perspective*
*Craig Clayton — mobiledesigndev.com*
