import DeviceMockup from '../DeviceMockup';

/**
 * BentoGrid Component
 * Apple-style mixed-size card grid layout
 *
 * Features array should have 4-6 items for best results
 * First item is large (spans 2 columns), rest are smaller
 */
const BentoGrid = ({ features = [] }) => {
  if (features.length === 0) return null;

  return (
    <div className="bento-grid">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`bento-grid__item ${index === 0 ? 'bento-grid__item--large' : ''}`}
        >
          <div className="bento-grid__content">
            <span className="bento-grid__number">0{index + 1}</span>
            <h3 className="bento-grid__title">{feature.title}</h3>
            <p className="bento-grid__description">{feature.description}</p>
          </div>
          <div className="bento-grid__media">
            {feature.device ? (
              <DeviceMockup
                screenshot={feature.screenshot || feature.image}
                device={feature.device}
                orientation={feature.orientation || 'portrait'}
                frameColor={feature.frameColor || 'space-gray'}
                size="md"
                noNotch={feature.noNotch !== false}
                alt={feature.title}
              />
            ) : (
              <img
                src={feature.image}
                alt={feature.title}
                className="bento-grid__image"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
