import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Backend Programming",
    academy: "CoderHouse Course",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startYear: "2014",
    endYear: "2016",
  },
  {
    id: 2,
    title: "Faculty of Design",
    academy: "Lviv National Academy of Arts",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startYear: "2012",
    endYear: "2014",
  },
  {
    id: 3,
    title: "High School",
    academy: "IT Future",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startYear: "2010",
    endYear: "2012",
  },
];

const experienceData = [
  {
    id: 1,
    title: "FREELANCE iOS DESIGNER & DEVELOPER | REMOTE",
    company: "AMERICAN HANDY CO.",
    dec: "I spearheaded the design and launch of a mobile-first handyman booking app that allowed users to request services across multiple home repair categories. To streamline the onboarding process, I developed a dynamic SwiftUI-based form system that adapted in real time to user input, customizing flows for each request. I also architected reusable, API-driven components that ensured data consistency and reduced development time across the service request experience. Working closely with backend engineers, I aligned form logic with service tiers, real-time validations, and flexible navigation to deliver a seamless booking experience. NOTABLE IMPACT: Reduced onboarding time by 40% and accelerated feature rollout through a scalable form architecture that improved service request accuracy.",
    startYear: "Oct 2024",
    endYear: false,
  },
  {
    id: 2,
    title: "SR. iOS ENGINEER, INSTRUCTOR, MENTOR | REMOTE",
    company: "ED FARM",
    dec: "I led the end-to-end design and development of an education-focused iOS/iPadOS app built to support digital learning for K–12 students. To enhance personalization, I implemented a modular dynamic form experience that adapted in real time to user input, improving both onboarding and service flows. I designed intuitive UI/UX using SwiftUI, ensuring accessibility across devices and full alignment with Apple’s Human Interface Guidelines. In collaboration with backend engineers, I integrated reusable, API-driven components to streamline logic across service types and accelerate development. NOTABLE IMPACT: Increased onboarding completion by 35% and improved code reusability across features, reducing new form setup time by 50%.",
    startYear: "Aug 2021",
    endYear: "Oct 2023",
  },
  {
    id: 3,
    title: "iOS ENGINEER & SR. iOS ENGINEER | REMOTE",
    company: "FAN REACH",
    dec: "I architected and delivered scalable iOS apps for major sports organizations across the NFL, NHL, and MLS by leveraging reusable code frameworks. I developed the New England Patriots’ first watchOS app, centered on the NFL Draft, which was later featured by CBS Sports for its innovative fan engagement and wearable integration. Additionally, I created a modular sports app framework that streamlined onboarding and customization for client teams, accelerating delivery timelines across multiple projects. NOTABLE IMPACT: Reduced app setup time by 60% across franchises through a reusable core framework and boosted wearable engagement metrics for flagship teams.",
    startYear: "Apr 2013",
    endYear: "Apr 2021",
  },
];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> Resume </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
