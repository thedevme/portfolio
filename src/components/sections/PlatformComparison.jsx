import DeviceMockup from '../DeviceMockup';

/**
 * PlatformComparison Component
 * Side-by-side iOS and Android comparison for React Native apps
 * Shows both platforms with descriptions highlighting platform-specific features
 */
const PlatformComparison = ({ features = [] }) => {
  if (features.length === 0) return null;

  return (
    <div className="platform-comparison">
      {features.map((feature, index) => (
        <div
          key={index}
          className="platform-comparison__row"
        >
          {/* iOS Device */}
          <div className="platform-comparison__platform platform-comparison__platform--ios">
            <div className="platform-comparison__device">
              <DeviceMockup
                screenshot={feature.iosImage || feature.image}
                device="iphone"
                orientation={feature.orientation || 'portrait'}
                frameColor={feature.frameColor || 'space-gray'}
                size="md"
                noNotch={feature.noNotch !== false}
                alt={`${feature.title} - iOS`}
              />
            </div>
            <div className="platform-comparison__badge">iOS</div>
          </div>

          {/* Center Content */}
          <div className="platform-comparison__content">
            <span className="platform-comparison__number">0{index + 1}</span>
            <h2 className="platform-comparison__title">{feature.title}</h2>
            <p className="platform-comparison__description">{feature.description}</p>
            {(feature.iosNote || feature.androidNote) && (
              <div className="platform-comparison__notes">
                {feature.iosNote && (
                  <p className="platform-comparison__note platform-comparison__note--ios">
                    <span>iOS:</span> {feature.iosNote}
                  </p>
                )}
                {feature.androidNote && (
                  <p className="platform-comparison__note platform-comparison__note--android">
                    <span>Android:</span> {feature.androidNote}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Android Device */}
          <div className="platform-comparison__platform platform-comparison__platform--android">
            <div className="platform-comparison__device">
              <DeviceMockup
                screenshot={feature.androidImage || feature.image}
                device="android"
                orientation={feature.orientation || 'portrait'}
                frameColor="black"
                size="md"
                noNotch={feature.noNotch !== false}
                alt={`${feature.title} - Android`}
              />
            </div>
            <div className="platform-comparison__badge">Android</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlatformComparison;
