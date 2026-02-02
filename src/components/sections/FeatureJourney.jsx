import DeviceMockup from '../DeviceMockup';

/**
 * FeatureJourney Component
 * Step-by-step user flow with connecting timeline
 * Shows progression through app screens with visual connector
 */
const FeatureJourney = ({ features = [], title = "User Journey" }) => {
  if (features.length === 0) return null;

  return (
    <div className="feature-journey">
      <div className="feature-journey__timeline">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-journey__step ${index === features.length - 1 ? 'feature-journey__step--last' : ''}`}
          >
            {/* Timeline connector */}
            <div className="feature-journey__connector">
              <div className="feature-journey__dot">
                <span>{index + 1}</span>
              </div>
              <div className="feature-journey__line" />
            </div>

            {/* Content */}
            <div className="feature-journey__content">
              <div className="feature-journey__device">
                {feature.device ? (
                  <DeviceMockup
                    screenshot={feature.screenshot || feature.image}
                    device={feature.device}
                    orientation={feature.orientation || 'portrait'}
                    frameColor={feature.frameColor || 'space-gray'}
                    size="sm"
                    noNotch={feature.noNotch !== false}
                    alt={feature.title}
                  />
                ) : (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="feature-journey__image"
                  />
                )}
              </div>
              <div className="feature-journey__text">
                <span className="feature-journey__number">0{index + 1}</span>
                <h3 className="feature-journey__title">{feature.title}</h3>
                <p className="feature-journey__description">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureJourney;
