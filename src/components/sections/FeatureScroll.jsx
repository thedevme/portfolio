import DeviceMockup from '../DeviceMockup';

/**
 * FeatureScroll Component
 * Full-height sections, one feature at a time
 * Apple keynote style - device centered, minimal text
 */
const FeatureScroll = ({ features = [] }) => {
  if (features.length === 0) return null;

  return (
    <div className="feature-scroll">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`feature-scroll__section ${index % 2 === 0 ? '' : 'feature-scroll__section--alt'}`}
        >
          <div className="feature-scroll__container">
            <div className="feature-scroll__text">
              <span className="feature-scroll__number">0{index + 1}</span>
              <h2 className="feature-scroll__title">{feature.title}</h2>
              <p className="feature-scroll__description">{feature.description}</p>
            </div>
            <div className="feature-scroll__device">
              {feature.device ? (
                <DeviceMockup
                  screenshot={feature.screenshot || feature.image}
                  device={feature.device}
                  orientation={feature.orientation || 'portrait'}
                  frameColor={feature.frameColor || 'space-gray'}
                  size="lg"
                  noNotch={feature.noNotch !== false}
                  alt={feature.title}
                />
              ) : (
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-scroll__image"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureScroll;
