export const projects = {
  nike: {
    title: "NIKE App",
    subtitle: "Mobile Gaming, Unity Development",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Mobile Game, Entertainment",
    appStoreUrl: "https://apps.apple.com",
    headerImage: "/assets/images/nike-header.png",
    description: [
      "This project was one of my earliest design explorations, created to reimagine the online sneaker shopping experience with a clean, modern interface built for both light and dark modes. The app flows through the full e-commerce journey—browsing featured and upcoming releases, refining results with detailed filters, viewing customizable product details, and managing items in the shopping cart. Each screen was intentionally designed to keep the sneaker imagery front and center, pairing bold product visuals with clear pricing, availability, and call-to-action elements for a streamlined shopping experience.",
      "Beyond design, the project became an interactive teaching tool when I hosted a live coding session on YouTube, walking viewers through the process of building the app in SwiftUI from start to finish. This allowed me to share not only the visual design choices but also the implementation details behind creating a fully functional, theme-switching shopping app. The final result blends aesthetic appeal, intuitive navigation, and practical functionality—offering sneaker fans a premium shopping experience while serving as a learning resource for the iOS development community."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/nike1.png", title: "Sneaker Showcase", description: "A curated view of the latest sneaker drops, highlighting featured releases and upcoming launches. Users can explore pricing, availability, and release dates while browsing detailed product visuals. This layout makes it easy to track new arrivals, compare styles, and prepare for upcoming launches.", imagePosition: "top" },
          { image: "/assets/images/nike2.png", title: "Sneaker Details", description: "A detailed product view highlighting the Air Jordan 11 Retro \"Bred 2019 Release.\" The screen displays pricing, ratings, and a full product description. Users can review key features, assess reviews, and customize their selection, offering a complete shopping experience directly from the app.", imagePosition: "bottom" }
        ]
      },
      {
        type: "full-width",
        image: "/assets/images/nike3.png",
        title: "Shopping Cart",
        description: "A clear and organized shopping cart that displays selected items, quantities, and prices. Users can easily adjust quantities with plus/minus buttons, ensuring flexibility before checkout. The layout keeps products visually distinct, making it simple to review selections and totals at a glance.",
        imagePosition: "right",
        background: "custom"
      },
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/nike4.png", title: "Search Results", description: "A results screen displaying filtered sneaker options based on search criteria such as \"Jordans,\" \"Lebrons,\" and size. Each result includes product imagery, pricing, and labels for new arrivals, making it easy for shoppers to compare and choose their preferred sneakers.", imagePosition: "top" },
          { image: "/assets/images/nike5.png", title: "Filter Options", description: "A customizable filtering interface for sneakers, allowing users to refine search results by gender, price range, color, and size. The design provides quick toggles for men's, women's, or both collections, along with intuitive sliders and swatches for a personalized shopping experience.", imagePosition: "bottom" }
        ]
      },
      {
        type: "full-width",
        image: "/assets/images/nike6.png",
        title: "Sneaker Showcase Dark Mode",
        description: "A curated display of featured sneakers with pricing, alongside upcoming releases. Users can explore trending footwear, view product details, and preview launch dates for anticipated drops.",
        imagePosition: "left",
        background: "custom"
      },
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/nike7.png", title: "Product Details Dark Mode", description: "A detailed product page displaying the Air Jordan 11 Retro \"Bred 2019 Release.\" Users can view multiple product images, select from available color options, and choose their shoe size. The interface highlights the price and provides a clear \"Add to Cart\" option for a streamlined shopping experience.", imagePosition: "top" },
          { image: "/assets/images/nike8.png", title: "Search Results Dark Mode", description: "A filtered results page showing sneakers that match user-selected categories like Jordans, LeBrons, and size 13. Each item highlights pricing, availability, and tags such as \"New,\" making it easy for users to browse and find their preferred pair.", imagePosition: "bottom" }
        ]
      },
      {
        type: "full-width",
        image: "/assets/images/nike9.png",
        title: "Shopping Cart Dark Mode",
        description: "A detailed shopping cart view that displays selected sneakers, their prices, and adjustable quantities. Each item includes product details, allowing users to update or remove shoes before checkout for a smooth purchasing experience.",
        imagePosition: "right",
        background: "custom"
      }
    ],
    nextProject: { slug: "shoe-pos", title: "Shoe POS App" }
  },

  bmw: {
    title: "BMW App",
    subtitle: "Mobile Gaming, Unity Development",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Mobile Game, Entertainment",
    appStoreUrl: "https://apps.apple.com",
    headerImage: "/assets/images/bmw-header.png",
    description: [
      "This project was conceived as a premium mobile experience tailored specifically for BMW drivers and fans. The goal was to create an app that brought together vehicle information, driving insights, and personalized services in one cohesive place. The design emphasized a sleek, modern interface inspired by BMW's own visual language, with a focus on delivering information quickly and elegantly.",
      "From the start, the concept was built around seamless integration with connected-car data and driver-focused utilities. The app's roadmap included tools for tracking maintenance history, monitoring driving statistics, and exploring curated BMW content such as news, events, and model highlights. Although the project remained at the concept stage and was never coded, it was developed with a strong emphasis on usability, brand consistency, and a premium feel — demonstrating how technology could extend the BMW experience beyond the driver's seat."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/bmw2.png", title: "Choose Your Style", description: "Pick from bold colors and see real-time pricing as you configure your BMW 330i xDrive Sedan.", imagePosition: "top" },
          { image: "/assets/images/bmw1.png", title: "Power Meets Precision", description: "Explore detailed performance stats like MPG, horsepower, and acceleration—all at your fingertips.", imagePosition: "bottom" }
        ]
      },
      {
        type: "full-width",
        image: "/assets/images/bmw3.png",
        title: "Discover Every Detail",
        description: "Dive into specs, emissions, and interior gallery views to fully experience the BMW driving standard.",
        imagePosition: "right",
        background: "custom"
      }
    ],
    nextProject: { slug: "tesla", title: "Tesla App" }
  },

  tesla: {
    title: "Tesla App",
    subtitle: "Mobile Gaming, Unity Development",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Mobile Game, Entertainment",
    appStoreUrl: "https://apps.apple.com",
    headerImage: "/assets/images/tesla-header.png",
    description: [
      "A comprehensive mobile application designed to enhance the Tesla charging experience. The app provides real-time charging station availability, route planning with charging stops, and remote monitoring of charging sessions. The interface emphasizes Tesla's minimalist design philosophy with intuitive controls and elegant animations.",
      "The platform integrates with Tesla's vehicle API to provide accurate battery status, charging history, and predictive range calculations. Advanced features include smart charging scheduling, cost optimization, and integration with renewable energy sources. The app also supports multiple Tesla vehicles and family account management."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/tesla1.png", title: "Order Form", description: "A sleek Tesla Model S rental profile showcasing price, features, and class. Highlights include an automatic transmission, luxury class, 2020 model year, and premium interior images. Users can easily select rental period and number of cars.", imagePosition: "top" },
          { image: "/assets/images/tesla2.png", title: "Order Form – Rental Details", description: "A detailed checkout screen where users confirm their Tesla rental. It allows setting the rent period, number of cars, pick-up time, and pick-up/return locations. The toggle option adds drivers, while the bottom displays the total price and a clear \"Complete Order\" button for finalizing the booking.", imagePosition: "bottom" }
        ]
      },
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/tesla3.png", title: "Order Completed", description: "The order confirmation screen provides a clear summary of the rental details, including car type, rental duration, and total cost. Users can view the estimated arrival time, real-time map route, and status updates to track their Tesla Model S delivery.", imagePosition: "top" },
          { image: "/assets/images/tesla4.png", title: "Cancel Order Modal", description: "Cancel Order confirmation dialog (Tesla).", imagePosition: "bottom" }
        ]
      }
    ],
    nextProject: { slug: "financial", title: "Financial App" }
  },

  financial: {
    title: "Financial App",
    subtitle: "Mobile Gaming, Unity Development",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Mobile Game, Entertainment",
    appStoreUrl: "https://apps.apple.com",
    headerImage: "/assets/images/financial-header.png",
    description: [
      "A comprehensive financial dashboard designed for portfolio management and investment tracking. The application provides real-time market data, portfolio analytics, and interactive charts to help users make informed investment decisions. The interface prioritizes data clarity and quick access to key financial metrics.",
      "The dashboard integrates multiple data sources including stock APIs, cryptocurrency feeds, and user portfolio data. Features include customizable watchlists, performance tracking, risk analysis, and automated alerts for market movements. The responsive design ensures optimal viewing across desktop and mobile devices."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/financial1.png", title: "Card Management", description: "A consolidated view of all linked cards, including Visa, Mastercard, and American Express. Users can quickly review details like expiration dates, CVV codes, and card numbers while managing or adding new cards in one place.", imagePosition: "top" },
          { image: "/assets/images/financial2.png", title: "Fare Options", description: "A side-by-side comparison of fare classes, including Basic Economy and Main Cabin. Each option outlines benefits such as seat choice, cancellation policies, and baggage allowances.", imagePosition: "bottom" }
        ]
      },
      {
        type: "full-width",
        image: "/assets/images/financial3.png",
        title: "Recent Transactions",
        description: "A clear overview of card activity, displaying categorized spending and payments in an easy-to-read format. Users can view today's purchases alongside yesterday's transactions, making it simple to track expenses and monitor account activity. This feature provides instant visibility into spending habits, helping users stay informed and manage their finances effectively.",
        imagePosition: "right",
        background: "custom"
      },
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/financial4.png", title: "Recent Transactions", description: "A clear overview of card activity, displaying categorized spending and payments in an easy-to-read format. Users can view today's purchases alongside yesterday's transactions, making it simple to track expenses and monitor account activity. This feature provides instant visibility into spending habits, helping users stay informed and manage their finances effectively.", imagePosition: "top" },
          { image: "/assets/images/financial5.png", title: "Spending Breakdown", description: "A categorized view of spending activity, highlighting essential areas like food and beverage. Each card shows the number of transactions, current balance, and budget limit, along with a progress bar to help track usage against set goals. This feature empowers users to monitor expenses more closely and make better financial decisions by visualizing how their money is distributed across categories.", imagePosition: "bottom" }
        ]
      }
    ],
    nextProject: { slug: "nike", title: "Nike App" }
  },

  patriots: {
    title: "Patriots App",
    subtitle: "Mobile Gaming, Unity Development",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Mobile Game, Entertainment",
    appStoreUrl: "https://apps.apple.com/us/app/new-england-patriots/id550269821",
    headerImage: "/assets/images/patriots-header.png",
    headerDevices: [
      { screenshot: "/assets/images/raw/patriots1.PNG", device: "iphone" },
      { screenshot: "/assets/images/raw/patriots2.PNG", device: "iphone" },
      { screenshot: "/assets/images/raw/patriots3.PNG", device: "iphone" },
      { screenshot: "/assets/images/raw/patriots4.PNG", device: "iphone" },
      { screenshot: "/assets/images/raw/patriots5.PNG", device: "iphone" }
    ],
    headerText: "PATRIOTS",
    headerLayout: "showcase",
    description: [
      "This project reimagines the traditional sports app by introducing a visually engaging, multi-team menu system designed for quick navigation and a connected fan experience. The app consolidates multiple team and venue experiences into a single interface through its innovative app switcher, allowing users to seamlessly move between their favorite teams, live game updates, and stadium information. From live scores and player stats to depth charts and roster filters, each screen was designed with clarity and speed in mind, ensuring fans can access the information they want in just a few taps.",
      "The menu-first design was the focal point of the project, breaking away from the standard tab bar and side navigation commonly found in sports apps. By using large, touch-friendly icons and a visually distinct app switcher, the interface encourages exploration while keeping important features—like tickets, schedules, and team news—always within reach. This approach proved so effective it was later adopted by other sports organizations, including CHL teams, demonstrating the versatility and scalability of the design. The result is a fan-focused experience that blends live content, team branding, and modern navigation into a cohesive, easy-to-use platform."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "feature-gallery",
        features: [
          { image: "/assets/images/raw/patriots1.PNG", device: "iphone", title: "Dynamic Home Hub", description: "Central hub showcasing latest scores, upcoming matchups, and highlighted content with featured sections." },
          { image: "/assets/images/raw/patriots2.PNG", device: "iphone", title: "Season Schedule", description: "Clean view of preseason and regular season games with matchups, dates, and kickoff times." },
          { image: "/assets/images/raw/patriots3.PNG", device: "iphone", title: "Team Stats", description: "Season record breakdown by division, home, road, and streaks with team starter insights." },
          { image: "/assets/images/raw/patriots4.PNG", device: "iphone", title: "Navigation Menu", description: "Quick access to schedule, news, live radio, tickets, and team shop with Ticketmaster integration." },
          { image: "/assets/images/raw/patriots5.PNG", device: "iphone", title: "Team Roster", description: "Sortable roster with jersey numbers, positions, and player headshots for instant recognition." }
        ]
      }
    ],
    nextProject: { slug: "raiders", title: "Raiders App" }
  },

  raiders: {
    title: "Raiders App",
    subtitle: "Mobile Gaming, Unity Development",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Mobile Game, Entertainment",
    appStoreUrl: "https://apps.apple.com",
    headerImage: "/assets/images/raiders-header.png",
    description: [
      "This project brought the Las Vegas Raiders' digital presence to life with a modern mobile app that unites fans, players, and the game-day experience under one cohesive platform. Inspired by successful sports apps I previously designed, this Raiders app focuses on bold team branding, streamlined navigation, and a fan-first presentation. Users can dive into real-time scores, schedules, rosters, and depth charts, all organized in an intuitive design that puts their favorite team front and center. Fans can personalize their journey by filtering rosters, exploring detailed player profiles, and keeping track of upcoming matchups with dynamic live updates. The interface emphasizes quick access with a clean menu system and visually rich layouts that highlight the Raiders' identity. From live stats to player performance breakdowns, every feature was crafted to create an engaging connection for fans on the go.",
      "The app also integrates game-day essentials, including ticket purchasing, stadium information, and team store access, making it a one-stop hub for Raiders Nation. Push notifications ensure fans never miss a key play, update, or announcement, while the app switcher allows seamless transitions between Raiders, Allegiant Stadium, and UNLV Rebels experiences. Balancing team-specific detail with league-wide context, the app empowers fans to stay immersed in the action, whether they're following live games, planning a stadium visit, or exploring highlights afterward. This unified digital approach strengthens the Raiders' brand identity while delivering a smooth, dynamic, and interactive experience for one of football's most passionate fan bases."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/raiders1.png", title: "Schedule", description: "A live game update screen showing the Raiders leading the Broncos 14–0. Player stats for D. Locke and D. Carr are displayed alongside the score. The schedule section highlights upcoming Raiders matchups, including games against the Chiefs, Falcons, and Jets, with times and broadcast details.", imagePosition: "top" },
          { image: "/assets/images/raiders2.png", title: "Team Roster", description: "A scrollable roster view displaying Raiders players with names, positions, jersey numbers, and profile photos. The layout highlights key players with bold typography and visual separation for clarity.", imagePosition: "bottom" }
        ]
      },
      {
        type: "full-width",
        image: "/assets/images/raiders3.png",
        title: "Filter & Sort Options",
        description: "An interactive filter and sort panel that allows users to refine the roster view. Filters include offense, defense, and special teams, along with starters and backups. Sorting can be customized by first name, last name, or jersey number for quick navigation.",
        imagePosition: "right",
        background: "custom"
      },
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/raiders4.png", title: "Player Details", description: "A detailed stats page for Josh Jacobs, showing his rushing, receiving, and fumble performance across games. The design highlights his jersey number, position, and team branding while providing a clean breakdown of attempts, yards, averages, touchdowns, and longest plays.", imagePosition: "top" },
          { image: "/assets/images/raiders5.png", title: "App Switcher Navigation", description: "A look at the Rebels app's side navigation menu with quick links to home, schedule, team info, account management, game highlights, and more. At the top, an app switcher allows seamless movement between Allegiant Air Stadium, Las Vegas Raiders, and UNLV Rebels apps, giving fans connected experiences in one place.", imagePosition: "bottom" }
        ]
      },
      {
        type: "full-width",
        image: "/assets/images/raiders6.png",
        title: "Main Menu",
        description: "Main navigation hub for the Raiders app with quick links to Home, Schedule, Team, Account Manager, Game Day Information, Live, Game Highlights, Raider Girls, Fan Zone, and Feedback. The App Switcher lets users jump between Allegiant Stadium, Raiders, and UNLV apps.",
        imagePosition: "left",
        background: "custom"
      },
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/raiders7.png", title: "Stadium Navigation", description: "A streamlined menu for Allegiant Stadium that provides quick access to essential services and event details. Fans can manage tickets, check parking and transportation, view the event calendar, explore stadium amenities, and even book tours—all in one convenient place.", imagePosition: "top" },
          { image: "/assets/images/raiders8.png", title: "Depth Chart", description: "A team roster breakdown highlighting starters, second-string, and third-string players. Features player photos, positions, and jersey numbers for quick fan reference.", imagePosition: "bottom" }
        ]
      }
    ],
    nextProject: { slug: "nba-allstar", title: "NBA All-Star App" }
  },

  sharks: {
    title: "Sharks App",
    subtitle: "Mobile Gaming, Unity Development",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Mobile Game, Entertainment",
    appStoreUrl: "https://apps.apple.com/us/app/san-jose-sharks-sap-center/id711570954",
    headerImage: "/assets/images/sharks-header.png",
    headerDevices: [
      { screenshot: "/assets/images/raw/sharks1.png", device: "iphone" },
      { screenshot: "/assets/images/raw/sharks2.png", device: "iphone" }
    ],
    headerText: "SHARKS",
    headerLayout: "split",
    description: [
      "This project brought the San Jose Sharks' digital presence to life with a modern mobile app that connects fans to the team, players, and game-day experience in one powerful platform. Designed with bold team branding and streamlined navigation, the app gives fans direct access to live scores, stats, rosters, and standings, all organized in a clean and intuitive interface. Supporters can explore detailed player profiles, check schedules at a glance, and dive into real-time updates that keep the Sharks front and center. With visually rich layouts and quick navigation between home, schedule, roster, and standings, the experience is built to give fans everything they need in just a few taps.",
      "Beyond scores and stats, the app integrates key fan services such as ticket management, food and beverage ordering, merchandise, digital wallet, and transportation, making it a true game-day companion. Push notifications ensure fans never miss a major update, while the Sharks365 and premium member hubs provide exclusive perks and access. From news stories and offseason updates to upcoming events at SAP Center, the platform centralizes all aspects of the fan journey. This unified digital experience not only strengthens the Sharks' brand identity but also delivers an engaging, dynamic, and interactive way for fans to stay connected — whether they're following live action, planning their arena visit, or celebrating the team together."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "feature-scroll",
        features: [
          { image: "/assets/images/raw/sharks1.png", device: "iphone", title: "Team News Feed", description: "Latest Sharks news and content featuring game previews, player interviews, and team updates." },
          { image: "/assets/images/raw/sharks2.png", device: "iphone", title: "Home Hub", description: "The main landing screen highlighting top stories, upcoming games, and opening night promotions." },
          { image: "/assets/images/raw/sharks3.png", device: "iphone", title: "Game Schedule", description: "A dedicated schedule view with monthly tabs, home/away details, and quick ticket access." },
          { image: "/assets/images/raw/sharks4.png", device: "iphone", title: "Team App Main Menu", description: "Navigation hub with ticket management, Sharks365, food ordering, merchandise, and arena features." },
          { image: "/assets/images/raw/sharks5.png", device: "iphone", title: "Standings Overview", description: "Stats-driven screen showing Pacific Division standings with wins, goals, and points." },
          { image: "/assets/images/raw/sharks6.png", device: "iphone", title: "Team Roster", description: "Sortable roster with player headshots, numbers, positions, organized by forwards, defense, and goalies." }
        ]
      }
    ],
    nextProject: { slug: "hornets", title: "Hornets App" }
  },

  hornets: {
    title: "Hornets App",
    subtitle: "Mobile Gaming, Unity Development",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Mobile Game, Entertainment",
    appStoreUrl: "https://apps.apple.com",
    headerImage: "/assets/images/hornets-header.png",
    // IMPORTANT: Showcase layout requires ODD number of devices (3 or 5) for symmetry
    headerDevices: [
      { screenshot: "/assets/images/raw/hornets01.png", device: "iphone" },
      { screenshot: "/assets/images/raw/hornets02.png", device: "iphone" },
      { screenshot: "/assets/images/raw/hornets03.png", device: "iphone" },
      { screenshot: "/assets/images/raw/hornets04.png", device: "iphone" },
      { screenshot: "/assets/images/raw/hornets05.png", device: "iphone" }
    ],
    headerText: "HORNETS",
    headerLayout: "showcase",
    description: [
      "The Charlotte Hornets mobile app delivers a complete game-day companion for fans, blending live action with an immersive digital experience. With real-time scoring, play-by-play updates, and in-depth team and player stats, supporters can follow every possession from tipoff to the final buzzer. Interactive features like shot charts, leaderboards, and box scores make it easy to dive deeper into performance while season series breakdowns and highlight reels keep fans engaged beyond the live game.",
      "Beyond the court, the app acts as a central hub for everything Hornets. Fans can browse team rosters, track upcoming matchups, and stay current with standings and stats, all within a streamlined interface that highlights bold Hornets branding. Whether checking scores, reviewing highlights, or preparing for the next matchup, the app provides a seamless, engaging way to stay connected to the team throughout the season."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "feature-gallery",
        features: [
          { image: "/assets/images/raw/hornets01.png", device: "iphone", title: "Matchup Overview", description: "Game-day view with records, standings, and broadcast details." },
          { image: "/assets/images/raw/hornets02.png", device: "iphone", title: "Team Stats", description: "Full statistical breakdown comparing both teams." },
          { image: "/assets/images/raw/hornets03.png", device: "iphone", title: "Player Performance", description: "Top performers tracking points, rebounds, and assists." },
          { image: "/assets/images/raw/hornets04.png", device: "iphone", title: "Game Highlights", description: "Live highlights and key plays as they unfold." },
          { image: "/assets/images/raw/hornets05.png", device: "iphone", title: "Team Leaders", description: "Scoring leaders showcasing standout players." },
          { image: "/assets/images/raw/hornets06.png", device: "iphone", title: "Playmakers", description: "Assist leaders creating scoring opportunities." }
        ]
      }
    ],
    nextProject: { slug: "hornets2", title: "Hornets App V2" }
  },

  hornets2: {
    title: "Hornets App",
    subtitle: "Mobile Gaming, Unity Development",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Mobile Game, Entertainment",
    appStoreUrl: "https://apps.apple.com",
    headerImage: "/assets/images/hornets-header.png",
    // Split layout - 1-2 devices
    headerDevices: [
      { screenshot: "/assets/images/raw/hornets01.png", device: "iphone" },
      { screenshot: "/assets/images/raw/hornets02.png", device: "iphone" }
    ],
    headerText: "HORNETS",
    headerLayout: "split",
    description: [
      "The Charlotte Hornets mobile app delivers a complete game-day companion for fans, blending live action with an immersive digital experience. With real-time scoring, play-by-play updates, and in-depth team and player stats, supporters can follow every possession from tipoff to the final buzzer. Interactive features like shot charts, leaderboards, and box scores make it easy to dive deeper into performance while season series breakdowns and highlight reels keep fans engaged beyond the live game.",
      "Beyond the court, the app acts as a central hub for everything Hornets. Fans can browse team rosters, track upcoming matchups, and stay current with standings and stats, all within a streamlined interface that highlights bold Hornets branding. Whether checking scores, reviewing highlights, or preparing for the next matchup, the app provides a seamless, engaging way to stay connected to the team throughout the season."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "feature-scroll",
        features: [
          { image: "/assets/images/raw/hornets01.png", device: "iphone", title: "Matchup Overview", description: "Game-day view with records, standings, and broadcast details." },
          { image: "/assets/images/raw/hornets02.png", device: "iphone", title: "Team Stats", description: "Full statistical breakdown comparing both teams." },
          { image: "/assets/images/raw/hornets03.png", device: "iphone", title: "Player Performance", description: "Top performers tracking points, rebounds, and assists." },
          { image: "/assets/images/raw/hornets04.png", device: "iphone", title: "Game Highlights", description: "Live highlights and key plays as they unfold." },
          { image: "/assets/images/raw/hornets05.png", device: "iphone", title: "Team Leaders", description: "Scoring leaders showcasing standout players." },
          { image: "/assets/images/raw/hornets06.png", device: "iphone", title: "Playmakers", description: "Assist leaders creating scoring opportunities." }
        ]
      }
    ],
    nextProject: { slug: "chl", title: "CHL App" }
  },

  chl: {
    title: "CHL App",
    subtitle: "Mobile Gaming, Unity Development",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Mobile Game, Entertainment",
    appStoreUrl: "https://apps.apple.com/us/app/chl-official-app/id1479076116",
    headerImage: "/assets/images/chl-header.png",
    headerDevices: [
      { screenshot: "/assets/images/raw/chl1.png", device: "iphone" },
      { screenshot: "/assets/images/raw/chl2.png", device: "iphone" },
      { screenshot: "/assets/images/raw/chl3.png", device: "iphone" }
    ],
    headerText: "01",
    headerLayout: "cinema",
    description: [
      "This project brought the Canadian Hockey League's digital presence to life by designing a mobile app that unites the CHL, WHL, OHL, and LHJMQ under a single, cohesive experience. Inspired by the Hornets app I previously designed, the CHL app carries forward the same focus on bold branding, intuitive navigation, and team-first presentation. Fans can personalize the app by selecting their favorite team, unlocking a tailored feed of news, schedules, standings, and roster details. The design emphasizes quick navigation through a clean menu system, league-level shortcuts, and visually rich team branding. From live scores and standings to full rosters and player profiles, every feature was crafted to give fans an engaging, on-the-go connection to their team.",
      "The app also integrates game-day essentials, including ticket purchasing, interactive content, and push notifications to keep fans updated in real time. The balance of league-wide accessibility and team-specific customization ensures that users can seamlessly switch between exploring the broader CHL landscape and focusing on their chosen club. This unified design approach, built on principles proven in the Hornets app, strengthened the CHL's brand identity while delivering a smooth, intuitive experience for hockey fans across Canada and beyond."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "feature-journey",
        features: [
          { image: "/assets/images/raw/chl1.png", device: "iphone", title: "Notifications", description: "Get instant updates for your favorite team with personalized notifications for game-day alerts and breaking news." },
          { image: "/assets/images/raw/chl2.png", device: "iphone", title: "Team Selection – WHL", description: "Easily choose your league and team during setup to personalize your experience." },
          { image: "/assets/images/raw/chl3.png", device: "iphone", title: "Team Selection – OHL", description: "Choose your Ontario Hockey League team from every OHL franchise available." },
          { image: "/assets/images/raw/chl4.png", device: "iphone", title: "Team Selection – QMJHL", description: "Set your preferred QMJHL team to customize schedules, standings, and alerts." },
          { image: "/assets/images/raw/chl5.png", device: "iphone", title: "Wheat Kings Home", description: "See team rankings in the East Division with games played, wins, losses, and points." },
          { image: "/assets/images/raw/chl6.png", device: "iphone", title: "Menu System", description: "Quick access to scores, schedules, standings, rosters, and team store with league shortcuts." },
          { image: "/assets/images/raw/chl7.png", device: "iphone", title: "Schedule View", description: "Browse the full schedule month-by-month with matchup details and home/away markers." },
          { image: "/assets/images/raw/chl8.png", device: "iphone", title: "Standings", description: "Detailed division standings with team performance stats at a glance." },
          { image: "/assets/images/raw/chl9.png", device: "iphone", title: "Team Roster", description: "Full roster with player headshots, jersey numbers, positions, height, and weight." },
          { image: "/assets/images/raw/chl10.png", device: "iphone", title: "Player Profile", description: "Detailed player information and statistics for each roster member." }
        ]
      }
    ],
    nextProject: { slug: "nba-draft", title: "NBA Watch Draft App" }
  },

  "shoe-pos": {
    title: "Shoe POS App",
    subtitle: "Mobile Gaming, Unity Development",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Mobile Game, Entertainment",
    appStoreUrl: "https://apps.apple.com",
    headerImage: "/assets/images/shoe-pos-header.png",
    description: [
      "A comprehensive point-of-sale system specifically designed for shoe retail businesses. The application streamlines inventory management, sales processing, and customer relationship management. The interface prioritizes speed and accuracy for busy retail environments with intuitive touch-screen controls.",
      "The system includes advanced features such as barcode scanning, size and color tracking, customer loyalty programs, and detailed sales analytics. Integration with accounting software and e-commerce platforms provides seamless omnichannel retail experience. Real-time inventory updates prevent overselling and optimize stock levels."
    ],
    layout: "tablet",
    imageWidth: 1000,
    sections: [
      {
        type: "tablet-full",
        image: "/assets/images/shoe-pos-ipad1.png",
        title: "Product Default Screen",
        description: "A tablet-based product listing interface showcasing multiple styles of Jumpman Air Jordans. Includes category tabs for navigating between brands, detailed product cards with pricing, and a right-side cart summary showing customer selections, subtotal, and tax breakdown. Designed for quick product browsing and seamless checkout."
      },
      {
        type: "tablet-full",
        image: "/assets/images/shoe-pos-ipad2.png",
        title: "Product Detail Screen",
        description: "A detailed view of an individual sneaker, showing size availability and quick add-to-cart options. The interface allows users to browse multiple sizes, view style information, and manage purchase quantities in a single glance. Designed for speed and simplicity in retail environments, this screen ensures seamless product selection and checkout flow.",
        background: "custom"
      },
      {
        type: "tablet-full",
        image: "/assets/images/shoe-pos-ipad3.png",
        title: "Product Filter Screen",
        description: "A filter overlay that lets customers quickly refine their shopping experience by brand, size, and gender. The interface highlights available options like Nike, Adidas, and Jordan, along with men's and women's sizing. Users can apply filters seamlessly while browsing, keeping the shopping cart and product list visible for a smooth point-of-sale experience."
      },
      {
        type: "tablet-full",
        image: "/assets/images/shoe-pos-ipad4.png",
        title: "Cart View",
        description: "A streamlined checkout interface showing selected items, quantities, and pricing with dynamic subtotal calculations. The screen includes options for adding discounts, shipping, and applying state/county taxes before presenting the final total. Designed for quick transactions with clear cost breakdowns to improve the customer checkout experience.",
        background: "custom"
      },
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/shoe-pos-admin1.png", title: "Product Inventory Management", description: "A companion iPhone app for admins that displays available products, pricing, and sales volume in real time. It provides a quick overview of items like Air Jordans, including inventory counts, sales history, and order management. The app ensures staff can monitor stock levels and place replenishment orders seamlessly while on the go.", imagePosition: "top" },
          { image: "/assets/images/shoe-pos-admin2.png", title: "Product Size Inventory", description: "This screen shows a detailed product view for the Air Jordan 1, highlighting the total items in stock and breaking down inventory by shoe size. The grid layout allows an admin to quickly see available quantities across different sizes, making it easier to track stock levels and identify restocking needs.", imagePosition: "bottom" }
        ]
      },
      {
        type: "full-width",
        image: "/assets/images/shoe-pos-admin3.png",
        title: "Product Editing Screen",
        description: "An editable product detail view where admins can update product information such as name, price, and available sizes. The screen includes an image selector for updating the product photo and structured input fields for managing shoe size inventory.",
        imagePosition: "right",
        background: "default"
      },
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/shoe-pos-admin4.png", title: "Edit Product Screen", description: "A product detail page that lets an admin manage shoe information with fields for product name and price. Includes an interactive inventory manager that tracks stock by shoe size. To streamline testing and data entry, the screen also features a \"Randomize Sizes\" button that automatically generates randomized availability for each shoe size, helping quickly simulate stock variations.", imagePosition: "top" },
          { image: "/assets/images/shoe-pos-admin5.png", title: "Product Brand Selection", description: "A catalog-style brand directory that showcases major footwear companies including Nike, Jordan, Adidas, Fila, Reebok, Champion, and Converse. Each brand tile highlights the available product count and allows users to quickly filter the inventory by brand, making browsing faster and more intuitive.", imagePosition: "bottom" }
        ]
      }
    ],
    nextProject: { slug: "designair", title: "Design Air App" }
  },

  designair: {
    title: "Design Airlines App",
    subtitle: "Mobile Gaming, Unity Development",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Mobile Game, Entertainment",
    appStoreUrl: "https://apps.apple.com",
    headerImage: "/assets/images/designair-header.png",
    description: [
      "DesignAir is a modern mobile app that streamlines the entire flight booking experience, from searching flights to selecting fares and choosing your ideal seat. With a clean, intuitive interface, travelers can compare flight options, review fare benefits, and view seat maps all in one seamless flow. Each step of the journey is designed to reduce friction and help passengers make confident travel decisions quickly.",
      "The app goes beyond basic booking by offering interactive seat selection, transparent fare comparisons, and personalized passenger input screens. Whether you're flying Economy or Business Class, DesignAir highlights the differences in price, flexibility, and baggage allowances up front. By combining clarity, speed, and user-friendly design, DesignAir helps travelers focus on what matters most: enjoying their journey."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/designair1.png", title: "Flight Search", description: "Displays available flights from LAX to JFK with airline, time, and fare details. Users can compare multiple options side by side before moving forward with their selection.", imagePosition: "top" },
          { image: "/assets/images/designair2.png", title: "Passenger Information", description: "A form screen where passengers enter personal details and select options before booking. The interface ensures that all required fields are completed accurately.", imagePosition: "bottom" }
        ]
      },
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/designair3.png", title: "Seat Selection Screen", description: "This screen shows the seat selection layout for a flight from LAX to JFK. The passenger is choosing seat 2A in Business Class, with the fare highlighted. The aircraft seating map is divided into Business Class at the front and Comfort+ further back, giving travelers a clear and interactive way to select their seats before checkout.", imagePosition: "top" },
          { image: "/assets/images/designair4.png", title: "Fare Options", description: "A side-by-side comparison of fare classes, including Basic Economy and Main Cabin. Each option outlines benefits such as seat choice, cancellation policies, and baggage allowances.", imagePosition: "bottom" }
        ]
      }
    ],
    nextProject: { slug: "edfarmkiosk", title: "Ed Farm Kiosk App" }
  },

  edfarmkiosk: {
    title: "EdFarm Prototype Design",
    subtitle: "Mobile Gaming, Unity Development",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Mobile Game, Entertainment",
    appStoreUrl: "https://apps.apple.com",
    headerImage: "/assets/images/edfarmkiosk-header.png",
    description: [
      "The EdFarm Kiosk Prototype was created as an interactive, visually engaging display meant to serve dual purposes—welcoming guests in the EdFarm office and providing a dynamic experience at events such as conferences or special showcases. Designed with an inviting interface, the kiosk highlights EdFarm's commitment to innovation in education while giving users quick access to information about its programs, initiatives, and community impact.",
      "Beyond being an office installation, the kiosk was envisioned as a portable tool that could travel with the EdFarm team to events, helping attendees learn about pathways to technology, fellowships, and community initiatives in an intuitive and accessible way. With bold visuals, interactive sections, and storytelling components, the design ensures that EdFarm's mission and programs are communicated effectively to both casual visitors and event participants."
    ],
    layout: "tablet",
    imageWidth: 1000,
    sections: [
      {
        type: "tablet-full",
        image: "/assets/images/edfarmkiosk1.png",
        title: "Kiosk Home View",
        description: "This is the default home view of the EdFarm Kiosk. From here, visitors can quickly explore different areas of the experience — whether it's meeting the staff, learning about the Movement app, checking out adult education programs, or staying updated with community news. The home screen serves as the central hub, designed to help users jump into any topic with ease."
      },
      {
        type: "tablet-full",
        image: "/assets/images/edfarmkiosk2.png",
        title: "Scrolling the Home Screen",
        description: "A bold call-to-action screen showcasing diverse fellows and community members engaged in technology. This view highlights opportunities to explore pathways into coding, innovation, and creative problem-solving. Designed to inspire adults and students alike, it reinforces the kiosk's mission to connect people with educational and professional growth in tech."
      },
      {
        type: "tablet-full",
        image: "/assets/images/edfarmkiosk5.png",
        title: "Meet the Teacher Fellows",
        description: "An interactive directory of Teacher Fellows where visitors can tap on a fellow to watch a personalized video introduction. Each fellow shares their journey, expertise, and role in the program, helping learners and community members connect with the educators leading the movement.",
        background: "custom"
      },
      {
        type: "tablet-full",
        image: "/assets/images/edfarmkiosk6.png",
        title: "Department of Learning Home Screen",
        description: "An engaging entry point for students, designed to introduce the Department of Learning and its programs. This screen highlights how education moves communities forward, encouraging exploration of available resources, initiatives, and support offered through the department. It serves as the central hub for new learners to connect with opportunities and pathways."
      },
      {
        type: "tablet-full",
        image: "/assets/images/edfarmkiosk9.png",
        title: "Movement App Demo & Download",
        description: "A full-bleed showcase screen used at events to demonstrate The Movement app's impact and core features. Staff can guide guests through stories and actions while a built-in QR flow lets visitors quickly download the app from the kiosk.",
        background: "custom"
      }
    ],
    nextProject: { slug: "bmw", title: "BMW App" }
  },

  analyzer: {
    title: "Fantasy Football Analyzer App",
    subtitle: "Design, App Store",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "App Store, Design",
    appStoreUrl: "https://apps.apple.com/us/app/tradebait-ff-trade-analyzer/id1528859237",
    headerImage: "/assets/images/analyzer-header.png",
    description: [
      "This project features a sleek and interactive Trade Analyzer app designed to evaluate the fairness and value of fantasy football trades. Users can assign players, picks, and other assets to either side of a proposed trade, then tap \"Process Trade\" to receive a visual, dial-based rating that scores the deal. The interface supports up to three players per team, displaying real-time rankings and average points to guide decision-making. The analyzer gives an immediate color-coded score along with concise verdicts like \"You Can Do Better,\" helping users understand trade balance with clarity and speed.",
      "The app also tracks trade history, storing previous evaluations and allowing users to revisit, compare, and refine proposals. Each recorded trade includes detailed asset breakdowns (e.g., player names, draft picks, and additions) and their individual score ratings, enabling users to assess changes over time. With options for visual meters and percentile-based evaluations, this tool makes fantasy sports trading more strategic, transparent, and engaging. It's a smart assistant for fantasy players aiming to stay competitive while avoiding lopsided trades."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/analyzer1.png", title: "Trade Analyzer – Fantasy Football", description: "This screen from the Trade Analyzer app provides a sleek interface for evaluating fantasy football trades. Users can compare players across two teams—in this case, Christian McCaffrey and Tom Brady—with detailed stats like position rank, bye week, and average points displayed prominently. A bold PROCESS TRADE button invites users to finalize the deal. Below, the History section lists previous trade scenarios, complete with players, picks, and visual rating meters that gauge trade balance (e.g., 75 rating). The high-contrast black-and-green design makes critical data pop, creating an engaging and intuitive trade evaluation experience.", imagePosition: "top" },
          { image: "/assets/images/analyzer2.png", title: "Trade Analyzer with Player Photos & Rating Dial", description: "This enhanced Trade Analyzer screen showcases a fantasy football trade scenario between Tom Brady and Christian McCaffrey, now including profile photos for added player recognition. Stats like position rank, bye week, and average points remain prominently displayed, and the large PROCESS TRADE button is centrally featured for quick action. The History section below visualizes past trade attempts with updated color-coded dials indicating trade fairness—this time leaning red and blue with a center needle pointing to 58, suggesting a less favorable balance. The dark theme and contrast-heavy design give the app a competitive, high-stakes feel tailored to serious fantasy players.", imagePosition: "bottom" }
        ]
      },
      {
        type: "full-width",
        image: "/assets/images/analyzer3.png",
        title: "Trade Results Summary",
        description: "This Trade Analyzer results screen provides immediate feedback on a proposed fantasy football trade with a bold message: \"YOU CAN DO BETTER.\" A large circular gauge highlights a 75 Rating, displayed in bright green, signaling a moderately fair deal. The result encourages users to reconsider or explore better trade options. Below, the History section recaps previous trade offers, each visually scored with consistent 75-point gauges. The clean layout, dynamic meter, and attention-grabbing copy combine to deliver quick, digestible insight into trade value and fairness.",
        imagePosition: "right",
        background: "custom"
      },
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/analyzer4.png", title: "Trade Analyzer – Mirror Trade Setup", description: "This Trade Analyzer screen presents a mirrored trade scenario, where Christian McCaffrey and Tom Brady appear on both Team One and Team Two. The layout allows users to compare trade values in both directions, with placeholder slots to add additional players. Each player's position rank is clearly displayed (99 POS RNK), maintaining a high-level overview of their fantasy value. The PROCESS TRADE button anchors the interface, inviting action. Below, the History section highlights prior trade configurations, each evaluated with a 75 rating gauge for reference. The symmetry in this layout supports deeper trade analysis and experimentation.", imagePosition: "top" },
          { image: "/assets/images/analyzer5.png", title: "Trade Analyzer – Duplicate Player Scenario", description: "This Trade Analyzer screen humorously visualizes a trade setup where Christian McCaffrey appears in all slots for both Team One and Team Two. The interface still allows for adding players in the remaining empty slots, while the PROCESS TRADE button remains active, suggesting flexibility in testing even unlikely trade scenarios. Below, the History section displays previous trade offers, each accompanied by a red-and-blue 58 rating meter indicating imbalanced or unfavorable trades. This layout highlights the app's robustness and tolerance for edge-case inputs while maintaining clear visual structure and consistent trade evaluation feedback.", imagePosition: "bottom" }
        ]
      },
      {
        type: "full-width",
        image: "/assets/images/analyzer6.png",
        title: "Trade Results – Low Rating Feedback",
        description: "This Trade Analyzer results screen delivers a clear verdict: \"YOU CAN DO BETTER,\" based on a trade rating score of 38. The large meter graphic uses red and blue segments to visually emphasize the imbalance, with the needle pointing deep into the unfavorable zone. Below the results, the History section displays previous trade attempts, each consistently rated at 38, reinforcing the suboptimal nature of the deals. This feedback loop encourages users to revisit and revise their offers, making the interface both informative and motivational in helping fantasy players make smarter trade decisions.",
        imagePosition: "right",
        background: "custom"
      },
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/analyzer7.png", title: "Empty Trade Setup – Ready for Input", description: "This Trade Analyzer screen is in its initial state, prompting users to begin a new trade scenario. Both Team One and Team Two have fully empty slots labeled Add Player, ready for lineup configuration. The Process Trade button is dimmed, visually reinforcing that selections must be made before proceeding. Meanwhile, the History section remains visible at the bottom, offering reference points from previous trade evaluations—including trade offers involving Tom Brady, Cam Newton, and Christian McCaffrey, each scored with a 58 rating. This layout creates a clean, neutral starting point for building and analyzing custom fantasy trade scenarios.", imagePosition: "top" },
          { image: "/assets/images/analyzer8.png", title: "Empty State with Favorable History", description: "This Trade Analyzer screen is in its default state, prompting users to begin building a trade by tapping Add Player slots for both Team One and Team Two. The Process Trade button is currently disabled, awaiting valid input. While the trade builder is empty, the History section below offers helpful context with two prior trade scenarios, both scored at a 75 rating and marked by green visual indicators. This reinforces balanced trade potential and encourages users to explore similar trade structures. The layout remains clean, intuitive, and ready for action.", imagePosition: "bottom" }
        ]
      }
    ],
    nextProject: { slug: "chl", title: "CHL App" }
  },

  movement: {
    title: "Movement App",
    subtitle: "Design, Development, App Store",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Mobile Game, Entertainment",
    appStoreUrl: "https://apps.apple.com/ca/app/the-movement-ed-farm/id1590862954",
    headerImage: "/assets/images/movement-header.png",
    description: [
      "This project showcases a mobile experience designed to educate and immerse users in pivotal moments of the Civil Rights Movement through storytelling and location-based interaction. The app's \"Magic Walks\" feature guides users along curated historical routes, with stops like the Fred Shuttlesworth statue and Kelly Ingram Park. Users can choose between augmented reality or audio-only experiences to explore stories from youth storytellers and firsthand accounts of foot soldiers. Built-in mapping and narration tools allow participants to follow a walk at their own pace while receiving contextual information at each landmark.",
      "Beyond the walking tours, the app celebrates contributors who help bring these stories to life — from community leaders and writers to young narrators featured throughout the interface. Each contributor has a detailed profile, and their stories are showcased in the app's content library, filtered by themes like leadership and cultural impact. With a balance of historical reverence and modern interaction, the platform offers an educational tool rooted in place-based storytelling, creating a powerful bridge between past events and present-day awareness."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/movement1.png", title: "MLK Tribute Feature – Article Spotlight", description: "This screen highlights a featured article titled \"Honoring Martin Luther King Jr.\" written by Jamal Morant, presented within a visually impactful layout. A powerful image of Dr. King addressing a crowd sets the tone, capturing the historical weight of the subject. The screen includes content attribution to the Birmingham Civil Rights Institute, reinforcing the source's authenticity. Below the headline, a short excerpt introduces the piece, with filtering options by theme—such as Cost of Segregation, Culture & Media, and more—allowing users to explore related stories. The clean, respectful design makes this a compelling entry point for deeper educational content.", imagePosition: "top" },
          { image: "/assets/images/movement2.png", title: "Movement App – Navigation Menu", description: "This screen displays the main navigation menu of the Movement app, designed to honor and educate through storytelling. The menu features four core sections: Stories, Magic Walks, Contributors, and Settings, each paired with an intuitive icon. A header section showcases key Movement Contributors, while the footer includes an inspiring quote by Fred Shuttlesworth: \"You have to be prepared to die before you can be prepared to live.\" The black-and-white design paired with bold typography and historical imagery sets a reflective, powerful tone for the user experience.", imagePosition: "bottom" }
        ]
      },
      {
        type: "full-width",
        image: "/assets/images/movement3.png",
        title: "Magic Walk – Fred Shuttlesworth Tour",
        description: "This screen introduces a Magic Walk experience titled \"The Life of Fred Shuttlesworth,\" inviting users to follow a curated route of historically significant sites. The tour incorporates Augmented Reality (AR) for an immersive storytelling experience. Spanning 2.5 miles with an estimated duration of 1 hour and 5 minutes, the walk features stops including the BCRI Fred Shuttlesworth Statue, St. Paul United Methodist Church, AG Gaston Motel, and Kelly Ingram Park. Participants will hear powerful accounts from children of foot soldiers in the civil rights movement. The interface provides buttons to preview or begin the walk, blending tech and history into an engaging, educational journey.",
        imagePosition: "right",
        background: "custom"
      },
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/movement4.png", title: "Walk Navigation – Fred Shuttlesworth Tour", description: "This screen showcases the live navigation interface of the Fred Shuttlesworth Magic Walk. Users are guided through the historical walking route with an interactive map view displaying clearly marked stops (1 through 4). The app indicates the current location with a blue dot and highlights the path to follow. The bottom panel confirms arrival at the Fred Shuttlesworth Statue, offering audio playback and AR content. Below that, it lists the next destination—St. Paul's Cathedral—complete with an address and quick navigation options, creating a guided tour experience powered by storytelling and real-time tracking.", imagePosition: "top" },
          { image: "/assets/images/movement5.png", title: "Arrival Experience Options – Fred Shuttlesworth Statue", description: "This screen appears once users arrive at a stop on the Magic Walk. It confirms arrival at the Fred Shuttlesworth Statue and presents two immersive storytelling options. Users can choose between an Augmented Reality (AR) experience with audio or a standard audio-only experience, tailored to their preference and surroundings. A photo of the statue visually anchors the content, while clear navigation (with a dismiss button) gives users full control over how they engage with each moment of the walk.", imagePosition: "bottom" }
        ]
      },
      {
        type: "full-width",
        image: "/assets/images/movement6.png",
        title: "Contributors – Youth Storytellers",
        description: "This screen highlights the young voices behind The Movement experience. Each contributor is presented with a name, portrait, and title — Youth Storyteller — celebrating the next generation's role in preserving and sharing civil rights history. With bold typography, black-and-white imagery, and a clean grid layout, the design centers each individual while reinforcing the collective power of storytelling. This section personalizes the app, connecting users to the real people behind the narratives they hear during their Magic Walk.",
        imagePosition: "right",
        background: "custom"
      },
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/movement7.png", title: "Contributors – Community Voices", description: "This screen showcases the powerful community voices featured in The Movement app. Each contributor is presented with their name, photo, and impactful title—ranging from Storyteller to Activist to Community Leader—along with personal labels like \"Foot Soldier\" and \"The Queen.\" The horizontal card layout emphasizes each individual's identity, while the visual star icon hints at saved or favorited storytellers. This section highlights the app's mission to preserve oral history and lived experience through a diverse set of authentic voices.", imagePosition: "top" },
          { image: "/assets/images/movement9.png", title: "Contributor Profile – Jamal Morant", description: "This detailed profile screen features Jamal Morant, affectionately known as \"Big Man.\" His portrait dominates the screen, framed in high-contrast black and white to emphasize his expression and personality. The bottom overlay highlights key details: age (99), roles (Storyteller, Content Writer), and pronouns (He/Him/His). A star icon in the corner suggests the ability to favorite or bookmark contributors. This view allows users to learn more about each individual voice within The Movement, enhancing connection and personalization through strong visual identity and clear role labeling.", imagePosition: "bottom" }
        ]
      },
      {
        type: "full-width",
        image: "/assets/images/movement9.png",
        title: "Contributor Bio & Story Detail – Gianna",
        description: "This expanded contributor view provides a deeper look into Gianna's profile. The top section reiterates core info—age, pronouns, and role—followed by a richly styled \"About Gianna\" section featuring a detailed personal bio. Below that is the \"Gianna Stories\" section, showcasing individual story cards titled \"Parsonage Bombing\" with accompanying thumbnails and preview text. The clean black-and-white aesthetic, use of script and bold typography, and consistent structure create a compelling, readable experience that highlights both identity and narrative contribution within The Movement app.",
        imagePosition: "right",
        background: "custom"
      }
    ],
    nextProject: { slug: "chl", title: "CHL App" }
  },

  "american-handy": {
    title: "American Handy App",
    subtitle: "Swift, SwiftUI, Design & Development",
    year: 2024,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Swift, SwiftUI, Design & Development",
    appStoreUrl: "https://apps.apple.com/us/app/american-handy-consumer-app/id6749178677",
    headerImage: "/assets/images/american-header.png",
    headerDevices: [
      { screenshot: "/assets/images/raw/american1.png", device: "iphone" },
      { screenshot: "/assets/images/raw/american2.png", device: "iphone" }
    ],
    headerText: "AMERICAN HANDY",
    headerLayout: "split",
    description: [
      "This project delivered a modern mobile solution for American Handy, designed to streamline how homeowners request and manage professional repair and maintenance services. The app provides a clear, step-by-step order flow where users can select from services such as drywall repair, flooring, painting, plumbing, and more. With a clean interface and service-specific options (like finish levels or patch selections), customers can easily create detailed requests that ensure accuracy for every job. Orders include appointment scheduling, service address details, and real-time status tracking, giving users complete visibility from pending requests through project completion.",
      "Beyond service booking, the app centralizes the customer experience by offering photo uploads for context, appointment summaries, and quick access to customer support. Users can review service confirmations, track multiple orders simultaneously, and receive timely updates on scheduling. By combining intuitive navigation with professional service options, the American Handy app creates a dependable, all-in-one platform that simplifies home repair management while improving transparency between customers and service providers."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "feature-scroll",
        features: [
          { image: "/assets/images/raw/american1.png", device: "iphone", title: "Login Screen", description: "The app's authentication screen for user login with company branding, login fields, sign up option, and password recovery." },
          { image: "/assets/images/raw/american2.png", device: "iphone", title: "Home Dashboard", description: "A personalized dashboard greeting users by name, surfacing available services with bold visuals and clear calls-to-action." },
          { image: "/assets/images/raw/american3.png", device: "iphone", title: "Service Categories", description: "Categorized view of handyman services with intuitive icons—from Appliance Repair and Carpentry to Plumbing and Electrical." },
          { image: "/assets/images/raw/american4.png", device: "iphone", title: "Service Selection", description: "Begin a new service request by selecting categories with a progress bar and checkmark confirmation for selected services." },
          { image: "/assets/images/raw/american5.png", device: "iphone", title: "Date & Time Selection", description: "Calendar interface for selecting preferred appointment date and time with available slots as tappable buttons." },
          { image: "/assets/images/raw/american6.png", device: "iphone", title: "Drywall Repair Details", description: "Collect specific details like finishing levels and patch options with clean checkbox layout for job requirements." },
          { image: "/assets/images/raw/american7.png", device: "iphone", title: "Photo Upload", description: "Optional photo upload to help technicians assess the job with Take Photo or Add Photo options." },
          { image: "/assets/images/raw/american8.png", device: "iphone", title: "Order Confirmation", description: "Final confirmation showing service address, plan, date/time, and requested service items before submission." },
          { image: "/assets/images/raw/american9.png", device: "iphone", title: "Active Orders", description: "Clear view of active service requests with order IDs, scheduled times, and four-step progress tracker." },
          { image: "/assets/images/raw/american10.png", device: "iphone", title: "Order Details", description: "Detailed summary of a specific order showing status, service address, appointment time, and service specifications." },
          { image: "/assets/images/raw/american11.png", device: "iphone", title: "Multi-Service Summary", description: "Breakdown of all services in an order with user-uploaded photos and a Call Office button for support." }
        ]
      }
    ],
    nextProject: { slug: "nba-draft", title: "NBA Watch Draft App" }
  },

  "nba-allstar": {
    title: "NBA All-Star Prototype App",
    subtitle: "Mobile Gaming, Unity Development",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Mobile Game, Entertainment",
    appStoreUrl: "https://apps.apple.com",
    headerImage: "/assets/images/nba-allstar-header.png",
    description: [
      "The NBA All-Star App prototype was my chance to finally bring an idea I'd been thinking about for years to life. With the All-Star break quickly approaching, I set out to replicate the web version of the fan voting experience, while making it feel completely at home on the iPad. I focused heavily on UI/UX adjustments so that player cards, team layouts, and sorting features were optimized for touch interaction and large-screen usability.",
      "The result was a working prototype that allowed users to search for players, sort by stats like points, rebounds, and assists, and drag players into starting lineups for the East and West. By redesigning the interface around iPad-first interactions, I created a smoother and more engaging way to experience All-Star voting. This project highlights my ability to quickly prototype, adapt existing concepts, and reimagine digital experiences for mobile platforms while keeping the core spirit of the original intact."
    ],
    layout: "tablet",
    imageWidth: 1000,
    sections: [
      {
        type: "tablet-full",
        image: "/assets/images/nbaallstar1.png",
        title: "NBA All-Star Voting",
        description: "A fan engagement platform that lets users browse players by stats, sort by performance, and select their picks for the NBA All-Star game. Features an interactive lineup builder to visualize West vs. East matchups and simplify the voting experience."
      },
      {
        type: "tablet-full",
        image: "/assets/images/nbaallstar2.png",
        title: "Search View",
        description: "A player search interface that allows fans to quickly find and filter All-Star candidates. Users can type in a name, refine results with sort options such as points, rebounds, or assists, and view player cards that update in real time. This view emphasizes discoverability and comparison, making it easy to select and evaluate players for the All-Star ballot.",
        background: "custom"
      },
      {
        type: "tablet-full",
        image: "/assets/images/nbaallstar3.png",
        title: "Drag and Drop Voting",
        description: "A hands-on interface for NBA All-Star voting where fans can drag and drop players directly onto the court to cast their votes. This interactive design highlights both conference rosters and allows users to customize their selections seamlessly in real time."
      }
    ],
    nextProject: { slug: "designair", title: "Design Air App" }
  },

  "future-plan": {
    title: "Future Plan",
    subtitle: "Design + iOS + Android",
    year: 2026,
    technology: "React Native",
    categories: "Productivity, Finance",
    appStoreUrl: null,
    headerImage: "/assets/images/raw/01_ios_futureplan_home.png",
    headerDevices: [
      { screenshot: "/assets/images/raw/01_ios_futureplan_home.png", device: "iphone" },
      { screenshot: "/assets/images/raw/01_android_futureplan_home.png", device: "android" }
    ],
    headerText: "FUTURE PLAN",
    headerLayout: "crossplatform",
    description: [
      "Future Plan is a cross-platform retirement planning concept that guides users through a short assessment, visualizes long-term growth, and recommends an investment approach based on goals and risk tolerance."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "platform-comparison",
        features: [
          {
            image: "/assets/images/raw/01_ios_futureplan_home.png",
            androidImage: "/assets/images/raw/01_android_futureplan_home.png",
            title: "Home",
            description: "Entry point introducing the assessment with a single primary CTA.",
            iosNote: "Entry point introducing the assessment with a single primary CTA.",
            androidNote: "Identical flow with platform-native spacing and controls."
          },
          {
            image: "/assets/images/raw/02_ios_futureplan_tools.png",
            androidImage: "/assets/images/raw/02_android_futureplan_tools.png",
            title: "Tools & Analysis",
            description: "Quick access to compound interest and planning tools.",
            iosNote: "Quick access to compound interest and planning tools.",
            androidNote: "Same tools presented with Material-aligned components."
          },
          {
            image: "/assets/images/raw/03_ios_futureplan_growth.png",
            androidImage: "/assets/images/raw/03_android_futureplan_growth.png",
            title: "Growth / Projection",
            description: "Long-term growth forecast with selectable timelines.",
            iosNote: "Long-term growth forecast with selectable timelines.",
            androidNote: "Matching chart behavior and data hierarchy."
          },
          {
            image: "/assets/images/raw/ios_futureplan_step1.png",
            androidImage: "/assets/images/raw/android_futureplan_step1.png",
            title: "Assessment Step 1",
            description: "Age selection used to calculate retirement timeline.",
            iosNote: "Age selection used to calculate retirement timeline.",
            androidNote: "Wheel-style selector adapted per platform."
          },
          {
            image: "/assets/images/raw/ios_futureplan_step2.png",
            androidImage: "/assets/images/raw/android_futureplan_step2.png",
            title: "Assessment Step 2",
            description: "Target retirement age selection.",
            iosNote: "Target retirement age selection.",
            androidNote: "Same flow with native picker behavior."
          },
          {
            image: "/assets/images/raw/ios_futureplan_step3.png",
            androidImage: "/assets/images/raw/android_futureplan_step3.png",
            title: "Assessment Step 3",
            description: "Total retirement savings input.",
            iosNote: "Total retirement savings input.",
            androidNote: "Numeric input with inline helper action."
          },
          {
            image: "/assets/images/raw/ios_futureplan_step4.png",
            androidImage: "/assets/images/raw/android_futureplan_step4.png",
            title: "Assessment Step 4",
            description: "Monthly retirement income goal.",
            iosNote: "Monthly retirement income goal.",
            androidNote: "Increment/decrement control with clear feedback."
          },
          {
            image: "/assets/images/raw/ios_futureplan_step5.png",
            androidImage: "/assets/images/raw/android_futureplan_step5.png",
            title: "Assessment Step 5",
            description: "Investment approach selection by risk level.",
            iosNote: "Investment approach selection by risk level.",
            androidNote: "Card-based selection with recommended state."
          },
          {
            image: "/assets/images/raw/04_ios_futureplan_profile.png",
            androidImage: "/assets/images/raw/04_android_futureplan_profile.png",
            title: "Profile",
            description: "Account details, preferences, and notifications.",
            iosNote: "Account details, preferences, and notifications.",
            androidNote: "Parity with iOS using platform-native settings patterns."
          }
        ]
      }
    ],
    nextProject: { slug: "blueprint-math", title: "Blueprint Math" }
  },

  "blueprint-math": {
    title: "Blueprint Math",
    subtitle: "Design + iOS + Android",
    year: 2026,
    technology: "React Native",
    categories: "Education, Productivity",
    appStoreUrl: null,
    headerImage: "/assets/images/raw/01_ios_blueprintmath_diagnostic.png",
    headerDevices: [
      { screenshot: "/assets/images/raw/01_ios_blueprintmath_diagnostic.png", device: "iphone" },
      { screenshot: "/assets/images/raw/01_android_blueprintmath_diagnostic.png", device: "android" }
    ],
    headerText: "BLUEPRINT",
    headerLayout: "crossplatform",
    description: [
      "Blueprint Math is a cross-platform learning tool that guides students through math problems using structured, step-by-step breakdowns. The experience emphasizes clarity and progression—helping learners build confidence through scaffolded problem-solving and real-time feedback."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "platform-comparison",
        features: [
          {
            image: "/assets/images/raw/01_ios_blueprintmath_diagnostic.png",
            androidImage: "/assets/images/raw/01_android_blueprintmath_diagnostic.png",
            title: "Diagnostic Home",
            description: "Entry screen introducing MathBlueprint with diagnostic start, estimated duration, and assessment modules.",
            iosNote: "Entry screen introducing MathBlueprint with diagnostic start, estimated duration, and assessment modules.",
            androidNote: "Mirrors iOS structure with Material spacing and identical module hierarchy."
          },
          {
            image: "/assets/images/raw/02_ios_blueprintmath_prob1.png",
            androidImage: "/assets/images/raw/02_android_blueprintmath_prob1.png",
            title: "Problem Context & Progress",
            description: "Problem screen showing topic, question prompt, and progress within the diagnostic session.",
            iosNote: "Problem screen showing topic, question prompt, and progress within the diagnostic session.",
            androidNote: "Same layout and progress framing adapted to Android system UI."
          },
          {
            image: "/assets/images/raw/03_ios_blueprintmath_prob2.png",
            androidImage: "/assets/images/raw/03_android_blueprintmath_prob2.png",
            title: "Step-Based Input",
            description: "Active step guides users through the first breakdown with focused input and visual state cues.",
            iosNote: "Active step guides users through the first breakdown with focused input and visual state cues.",
            androidNote: "Step activation and input behavior match iOS using Material components."
          },
          {
            image: "/assets/images/raw/04_ios_blueprintmath_prob3.png",
            androidImage: "/assets/images/raw/04_android_blueprintmath_prob3.png",
            title: "Progressive Step Completion",
            description: "Completed steps collapse into confirmation states while the next step becomes active.",
            iosNote: "Completed steps collapse into confirmation states while the next step becomes active.",
            androidNote: "Identical step progression and completion feedback."
          },
          {
            image: "/assets/images/raw/05_ios_blueprintmath_feedback.png",
            androidImage: "/assets/images/raw/05_android_blueprintmath_feedback.png",
            title: "Final Answer & Submission",
            description: "Final calculation step with clear submission action anchored at the bottom.",
            iosNote: "Final calculation step with clear submission action anchored at the bottom.",
            androidNote: "Same submission flow and validation pattern."
          },
          {
            image: "/assets/images/raw/06_ios_blueprintmath_reflection.png",
            androidImage: "/assets/images/raw/06_android_blueprintmath_reflection.png",
            title: "Confidence Reflection",
            description: "Post-problem confidence check allowing users to self-assess understanding.",
            iosNote: "Post-problem confidence check allowing users to self-assess understanding.",
            androidNote: "Confidence selection mirrored with native Android controls."
          },
          {
            image: "/assets/images/raw/07_ios_blueprintmath_summary.png",
            androidImage: "/assets/images/raw/07_android_blueprintmath_summary.png",
            title: "Diagnostic Summary & Skill Map",
            description: "Summary view showing mastery levels, progress percentage, and recommended next focus.",
            iosNote: "Summary view showing mastery levels, progress percentage, and recommended next focus.",
            androidNote: "Skill Map and summary presented with equivalent structure and status indicators."
          }
        ]
      }
    ],
    nextProject: { slug: "uber-shift-planner", title: "Uber Shift Planner" }
  },

  "uber-shift-planner": {
    title: "Uber Shift Planner",
    subtitle: "Design + iOS + Android",
    year: 2026,
    technology: "React Native",
    categories: "Productivity, Finance",
    appStoreUrl: null,
    headerImage: "/assets/images/raw/shiftplannerhome_ios.png",
    headerDevices: [
      { screenshot: "/assets/images/raw/shiftplannerhome_ios.png", device: "iphone" },
      { screenshot: "/assets/images/raw/shiftplannerhome_android.png", device: "android" }
    ],
    headerText: "SHIFT PLANNER",
    headerLayout: "crossplatform",
    description: [
      "Uber Shift Planner is a cross-platform planning concept that helps rideshare drivers turn weekly earning goals into clear, actionable schedules. The experience focuses on clarity and predictability—showing drivers when to work, for how long, and what they can expect to earn."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "platform-comparison",
        features: [
          {
            image: "/assets/images/raw/shiftplannerhome_ios.png",
            androidImage: "/assets/images/raw/shiftplannerhome_android.png",
            title: "Weekly Goal & Forecast",
            description: "Weekly progress and next-day forecasts presented in a single, glanceable dashboard. Drivers can see how close they are to their goal and which time windows are most effective for reaching it.",
            iosNote: "Uses system typography and haptic feedback for quick status checks.",
            androidNote: "Leverages Material You theming and emphasis on forecast cards."
          },
          {
            image: "/assets/images/raw/shiftplannernotifications_ios.png",
            androidImage: "/assets/images/raw/shiftplannernotifications_android.png",
            title: "Notifications",
            description: "Plan summaries delivered through clear, non-intrusive notifications. Daily and weekly reminders reinforce schedules, goals, and projected earnings without requiring constant app usage.",
            iosNote: "Compact notification layouts optimized for quick reads.",
            androidNote: "Persistent summaries with expandable detail."
          },
          {
            image: "/assets/images/raw/shiftplannerplan_ios.png",
            androidImage: "/assets/images/raw/shiftplannerplan_android.png",
            title: "Weekly Plan",
            description: "A structured breakdown of the full week, showing planned drive windows, estimated hours, and projected earnings per day. Totals update automatically to reflect progress toward the weekly goal.",
            iosNote: "Focuses on hierarchy and visual rhythm.",
            androidNote: "Emphasizes scannability and day-by-day grouping."
          },
          {
            image: "/assets/images/raw/shiftplannersettings_ios.png",
            androidImage: "/assets/images/raw/shiftplannersettings_android.png",
            title: "Settings",
            description: "A minimal preferences screen for controlling how plans and timelines are displayed. Options are intentionally limited to avoid disrupting the core planning flow.",
            iosNote: "Native toggle controls with system spacing.",
            androidNote: "Material switches with consistent grouping."
          }
        ]
      }
    ],
    nextProject: { slug: "blueprint-math", title: "Blueprint Math" }
  },

  "crossplatform-demo": {
    title: "Cross Platform Demo",
    subtitle: "React Native Development",
    year: 2024,
    technology: "React Native, TypeScript, Expo",
    categories: "Cross Platform, Mobile Development",
    appStoreUrl: null,
    headerImage: "/assets/images/hornets-header.png",
    // Crossplatform layout - iPhone + Android side by side
    headerDevices: [
      { screenshot: "/assets/images/raw/hornets01.png", device: "iphone" },
      { screenshot: "/assets/images/raw/hornets02.png", device: "android" }
    ],
    headerText: "CROSS PLATFORM",
    headerLayout: "crossplatform",
    description: [
      "A demonstration of the crossplatform header layout, designed specifically for React Native apps that run on both iOS and Android. This layout showcases both devices side by side with a unified glow effect representing the shared codebase.",
      "The devices are angled toward each other with subtle platform-colored shadows (blue for iOS, green for Android), and automatic platform badges appear above. Perfect for showcasing cross-platform mobile development work."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "platform-comparison",
        features: [
          {
            image: "/assets/images/raw/hornets01.png",
            title: "Game Overview",
            description: "Live scores and matchup details optimized for each platform.",
            iosNote: "Uses SF Symbols and haptic feedback",
            androidNote: "Material You dynamic theming"
          },
          {
            image: "/assets/images/raw/hornets02.png",
            title: "Team Stats",
            description: "Comprehensive statistics with platform-native charts.",
            iosNote: "SwiftUI-style animations",
            androidNote: "Jetpack Compose charts"
          },
          {
            image: "/assets/images/raw/hornets03.png",
            title: "Player Cards",
            description: "Interactive player profiles with smooth transitions.",
            iosNote: "Face ID for favorites",
            androidNote: "Fingerprint authentication"
          }
        ]
      }
    ],
    nextProject: { slug: "cascade-demo", title: "Cascade Demo" }
  },

  "cascade-demo": {
    title: "Cinema Demo",
    subtitle: "Dramatic Letterbox Layout",
    year: 2024,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "iOS Development, Design",
    appStoreUrl: null,
    headerImage: "/assets/images/hornets-header.png",
    // Cinema layout - dramatic letterbox with centered devices
    headerDevices: [
      { screenshot: "/assets/images/raw/hornets01.png", device: "iphone" },
      { screenshot: "/assets/images/raw/hornets02.png", device: "iphone" },
      { screenshot: "/assets/images/raw/hornets03.png", device: "iphone" }
    ],
    headerText: "01",
    headerLayout: "cinema",
    description: [
      "A demonstration of the cascade header layout, featuring multiple devices stacked diagonally with 3D perspective depth. Each device is slightly offset and tilted, creating a dramatic card-deck effect.",
      "The cascade layout works best with 3-4 devices and includes hover effects that bring individual devices forward. Great for showing multiple screens of an app's flow or journey."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "feature-journey",
        title: "User Flow",
        features: [
          { image: "/assets/images/raw/hornets01.png", device: "iphone", title: "Launch & Matchup", description: "User opens app and sees current game matchup with live score updates." },
          { image: "/assets/images/raw/hornets02.png", device: "iphone", title: "Explore Stats", description: "Swipe to view detailed team and player statistics." },
          { image: "/assets/images/raw/hornets03.png", device: "iphone", title: "Track Leaders", description: "Check scoring leaders and standout performers." },
          { image: "/assets/images/raw/hornets04.png", device: "iphone", title: "Watch Highlights", description: "View video highlights and key plays from the game." }
        ]
      }
    ],
    nextProject: { slug: "hornets", title: "Hornets App" }
  },

  "nba-draft": {
    title: "NBA Draft Watch App",
    subtitle: "Design, SwiftUI Projects",
    year: 2019,
    technology: "Swift, SwiftUI, Sketch/Figma",
    categories: "Mobile Game, Entertainment",
    appStoreUrl: null,
    headerImage: "/assets/images/nba-draft-header.png",
    description: [
      "This custom-designed Apple Watch app delivers an interactive, fan-focused experience for following the NBA Draft right from the wrist. Users can easily switch between rounds, view draft picks in order, and explore rich, scrollable player cards. Each pick includes the player's position, stats, college, and personal analysis—streamlined for quick reference on the small screen.",
      "The design combines team colors, logos, and intuitive layout to highlight draft order and player identity at a glance. With seamless navigation and real-time updates, it creates an immersive mini-dashboard for fans to track the draft as it unfolds—bringing the excitement of draft night to wearable tech."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/nba-draft1.png", title: "Draft Pick View", description: "This screen presents a bold, card-style draft pick layout featuring the team logo, draft number, and player information. In this example, the New Orleans Pelicans select Zion Williamson as the #1 pick, shown clearly at the top of the card. The next pick (#2) is previewed below, allowing users to swipe or scroll through draft selections. Designed with team colors and large typography, the interface delivers at-a-glance recognition of players and picks in a visually engaging, compact format tailored for Apple Watch.", imagePosition: "top" },
          { image: "/assets/images/nba-draft2.png", title: "Draft Player Profile View", description: "This Apple Watch screen focuses on the individual draft pick, showcasing the selected player's photo, name, draft position, and team branding in a striking, clean layout. Zion Williamson is featured as the #1 pick with a full-color headshot layered against the New Orleans Pelicans logo. At the bottom, stat categories like points, rebounds, assists, and efficiency are accessible for quick tap-through. The design prioritizes player identity and interaction, offering fans instant access to vital stats in a compact visual display.", imagePosition: "bottom" }
        ]
      },
      {
        type: "full-width",
        image: "/assets/images/nba-draft3.png",
        title: "Player Stats & Bio Detail",
        description: "This Apple Watch screen delivers a detailed snapshot of a player's college performance and background. Key stats like points, rebounds, assists, and effective field goal percentage are featured prominently at the top for easy scanning. Below, users can view position, school, experience, and birthplace—helping fans get a complete picture of each prospect. The layout is optimized for glanceable content, making it ideal for draft night insights or quick comparisons between top players.",
        imagePosition: "right",
        background: "custom"
      },
      {
        type: "two-column",
        cards: [
          { image: "/assets/images/nba-draft4.png", title: "Player Profile & Scouting Analysis", description: "This screen dives deeper into the player's bio and scouting breakdown. It includes hometown, height/weight, and a written analysis summarizing the player's potential. The format highlights a mix of raw data and qualitative insight, helping fans and scouts alike evaluate what makes this athlete a standout draft prospect. Designed for clarity and quick consumption, the layout brings player stories to life on your wrist.", imagePosition: "top" },
          { image: "/assets/images/nba-draft5.png", title: "Draft Order Spotlight", description: "This bold visual layout highlights Zion Williamson as the number one overall pick, placing him above the next draft slot in a clean, card-stacked format. His name, position, and team branding are front and center, with vibrant colors distinguishing each pick. The modern, swipeable card interface is optimized for the small screen, making draft rankings feel interactive and alive on Apple Watch.", imagePosition: "bottom" }
        ]
      }
    ],
    nextProject: { slug: "hornets", title: "Hornets App" }
  },

  "cookmode": {
    title: "CookMode",
    subtitle: "Design + Android",
    year: 2026,
    technology: "Kotlin",
    categories: "Cooking",
    appStoreUrl: null,
    androidUrl: null,
    headerImage: "/assets/images/raw/01_cookmode_home.png",
    headerDevices: [
      { screenshot: "/assets/images/raw/01_cookmode_home.png", device: "android" },
      { screenshot: "/assets/images/raw/02_cookmode_recipe.png", device: "android" }
    ],
    headerText: "COOKMODE",
    headerLayout: "split",
    description: [
      "CookMode is a focused cooking companion designed to keep users hands-free, distraction-free, and moving confidently through recipes. The experience centers on clarity: clean recipe lists, large visual steps, built-in timers, and simple editing tools that make cooking feel calm instead of chaotic."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "feature-scroll",
        features: [
          { image: "/assets/images/raw/01_cookmode_home.png", device: "android", title: "Recipe Library", description: "A clean, dark-mode recipe list that prioritizes speed and readability. Recent recipes surface first, with clear cook times and visual icons so users can jump straight into cooking without friction." },
          { image: "/assets/images/raw/02_cookmode_recipe.png", device: "android", title: "Recipe Detail", description: "A visual recipe overview with ingredients, servings, and prep time presented up front. Scaling controls make it easy to adjust quantities, while a single primary action moves the user into Cook Mode." },
          { image: "/assets/images/raw/03_cookmode_instructions_step1.png", device: "android", title: "Cook Mode", description: "Full-screen, distraction-free instructions designed for real kitchens. Large typography, progress tracking, and minimal controls keep attention on the current step instead of the phone." },
          { image: "/assets/images/raw/04_cookmode_instructions_step2.png", device: "android", title: "Timed Steps", description: "Integrated timers appear directly within steps when precision matters. Users can start, reset, and continue without leaving the flow of cooking." },
          { image: "/assets/images/raw/05_cookmode_instructions_edit.png", device: "android", title: "Recipe Editing", description: "A lightweight editing experience for updating photos, ingredients, and metadata. Designed for quick changes without breaking the mental model of the recipe." }
        ]
      }
    ],
    nextProject: { slug: "countdown2binge", title: "Countdown2Binge" }
  },

  "countdown2binge": {
    title: "Countdown2Binge",
    subtitle: "Design + Android",
    year: 2026,
    technology: "Kotlin",
    categories: "Entertainment",
    appStoreUrl: null,
    androidUrl: null,
    headerImage: "/assets/images/raw/01_countdown2binge_home.png",
    headerDevices: [
      { screenshot: "/assets/images/raw/01_countdown2binge_home.png", device: "android" },
      { screenshot: "/assets/images/raw/03_countdown2binge_bingeready.png", device: "android" },
      { screenshot: "/assets/images/raw/04_countdown2binge_search.png", device: "android" }
    ],
    headerText: "C2B",
    headerLayout: "cinema",
    description: [
      "Countdown2Binge helps users track TV shows across their entire lifecycle — from anticipation to finale — so they know exactly when a season is ready to binge. The app removes guesswork by combining timelines, countdowns, and binge-ready states into a single, focused experience.",
      "The product is designed to stay out of the way while keeping users informed, emphasizing clarity, visual hierarchy, and fast scanning across all core screens."
    ],
    layout: "phone",
    imageWidth: 425,
    sections: [
      {
        type: "feature-journey",
        features: [
          { image: "/assets/images/raw/01_countdown2binge_home.png", device: "android", title: "Timeline", description: "A vertical timeline showing currently airing and anticipated shows, anchored by countdowns to key moments like premieres and finales. The design prioritizes time awareness without overwhelming the user." },
          { image: "/assets/images/raw/02_countdown2binge_home2.png", device: "android", title: "Anticipated Shows", description: "Upcoming and TBD seasons appear earlier in the timeline, keeping users aware of shows that haven't announced dates yet while preserving their place in the lifecycle." },
          { image: "/assets/images/raw/03_countdown2binge_bingeready.png", device: "android", title: "Binge Ready", description: "Shows that have fully aired are grouped into a dedicated binge-ready view, clearly signaling when an entire season can be watched start to finish." },
          { image: "/assets/images/raw/04_countdown2binge_search.png", device: "android", title: "Search & Discovery", description: "A lightweight search experience with category filters and trending shows, optimized for fast discovery and one-tap following." },
          { image: "/assets/images/raw/05_countdown2binge_searchdetail.png", device: "android", title: "Show Detail", description: "A focused detail screen displaying season status, episode count, and metadata, designed to support quick decisions without deep navigation." },
          { image: "/assets/images/raw/06_countdown2binge_settings.png", device: "android", title: "Settings & Sync", description: "Account and preference management with synced saved shows, ensuring consistency across sessions while keeping controls simple and unobtrusive." }
        ]
      }
    ],
    nextProject: { slug: "cookmode", title: "CookMode" }
  }
};

// Helper to get all project slugs for static generation
export const getProjectSlugs = () => Object.keys(projects);

// Helper to get a single project by slug
export const getProjectBySlug = (slug) => projects[slug] || null;
