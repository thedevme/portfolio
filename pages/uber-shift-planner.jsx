import HeroMockup from '../src/components/HeroMockup';
import DeviceMockup from '../src/components/DeviceMockup';

export default function UberShiftPlanner() {
  return (
    <div style={{ background: '#0d1117', minHeight: '100vh', color: '#fff' }}>
      <HeroMockup
        layout="crossplatform"
        title="Uber Shift Planner"
        subtitle="React Native"
        devices={[
          {
            screenshot: '/assets/images/raw/shiftplanner/ios_home.png',
            device: 'iphone',
            frameColor: 'space-gray'
          },
          {
            screenshot: '/assets/images/raw/shiftplanner/android_home.png',
            device: 'android',
            frameColor: 'black'
          }
        ]}
      />

      {/* Project Info */}
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 20px' }}>

        {/* Metadata */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          marginBottom: '60px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '40px'
        }}>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Year</div>
            <div style={{ fontSize: '1rem' }}>2026</div>
          </div>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Status</div>
            <div style={{ fontSize: '1rem' }}>Concept</div>
          </div>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Role</div>
            <div style={{ fontSize: '1rem' }}>Design + iOS + Android</div>
          </div>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Technology</div>
            <div style={{ fontSize: '1rem' }}>React Native</div>
          </div>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Category</div>
            <div style={{ fontSize: '1rem' }}>Productivity, Finance</div>
          </div>
        </div>

        {/* Project Overview */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', fontWeight: '600' }}>Project Overview</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '20px' }}>
            Uber Shift Planner is a mobile planning concept designed to help rideshare drivers understand, plan, and hit their weekly earning goals with confidence. Instead of reacting to earnings after the fact, the experience focuses on proactive planning—turning income targets into clear schedules and recommended driving windows.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.05rem' }}>
            The product prioritizes clarity and predictability, combining goal tracking, forecasts, notifications, and scheduling into a single, focused workflow that works consistently across iOS and Android.
          </p>
        </div>

        {/* Screen Sections */}

        {/* Weekly Goal & Forecast (Home) */}
        <div style={{ marginBottom: '100px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', fontWeight: '600' }}>Weekly Goal & Forecast</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '40px' }}>
            This screen acts as the primary dashboard, showing the driver's weekly earnings goal alongside real-time progress. A visual progress bar communicates how much has been earned and how much remains, supported by key metrics such as total earnings, hours worked, and average hourly rate.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '40px' }}>
            Below the goal summary, the forecast section translates income targets into actionable driving windows. Drivers can see suggested time ranges, estimated hours, and projected earnings for the next day, helping them decide when to drive based on expected outcomes rather than guesswork.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <DeviceMockup screenshot="/assets/images/raw/shiftplanner/ios_home.png" device="iphone" size="md" />
            <DeviceMockup screenshot="/assets/images/raw/shiftplanner/android_home.png" device="android" size="md" />
          </div>
        </div>

        {/* Notifications */}
        <div style={{ marginBottom: '100px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', fontWeight: '600' }}>Notifications</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '40px' }}>
            This screen highlights how plans and progress are surfaced through notifications. Daily and weekly plan summaries reinforce upcoming drive windows, target earnings, and estimated totals, allowing drivers to stay aligned with their goals without opening the app.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '40px' }}>
            Notifications are designed to be informative and concise, prioritizing clarity over urgency and helping users quickly understand what action—if any—is needed.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <DeviceMockup screenshot="/assets/images/raw/shiftplanner/ios_notifications.png" device="iphone" size="md" />
            <DeviceMockup screenshot="/assets/images/raw/shiftplanner/android_notifications.png" device="android" size="md" />
          </div>
        </div>

        {/* Weekly Plan */}
        <div style={{ marginBottom: '100px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', fontWeight: '600' }}>Weekly Plan</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '40px' }}>
            The weekly plan screen provides a structured overview of the entire week's driving schedule. Each day lists planned time windows, estimated hours, and projected earnings, giving drivers a clear picture of how their week is expected to unfold.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '40px' }}>
            Totals at the bottom summarize overall hours and estimated income, making it easy to see whether the plan exceeds or falls short of the weekly goal. Visual emphasis on the current day reinforces focus and immediacy.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <DeviceMockup screenshot="/assets/images/raw/shiftplanner/ios_plan.png" device="iphone" size="md" />
            <DeviceMockup screenshot="/assets/images/raw/shiftplanner/android_plan.png" device="android" size="md" />
          </div>
        </div>

        {/* Settings */}
        <div style={{ marginBottom: '100px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', fontWeight: '600' }}>Settings</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '40px' }}>
            The settings screen offers a minimal set of preferences related to planning and data presentation. Options are grouped by intent and kept intentionally simple, allowing drivers to adjust how information is displayed without disrupting the core planning experience.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '40px' }}>
            This section reinforces the product's focus on clarity and control, avoiding unnecessary configuration while still supporting personalization.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <DeviceMockup screenshot="/assets/images/raw/shiftplanner/ios_settings.png" device="iphone" size="md" />
            <DeviceMockup screenshot="/assets/images/raw/shiftplanner/android_settings.png" device="android" size="md" />
          </div>
        </div>

      </div>
    </div>
  );
}
