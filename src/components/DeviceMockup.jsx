/**
 * DeviceMockup Component
 * Renders a CSS-based device frame around a screenshot
 *
 * @param {string} screenshot - Path to the screenshot image
 * @param {string} device - Device type: 'iphone' | 'ipad' | 'watch' | 'android'
 * @param {string} orientation - Device orientation: 'portrait' | 'landscape'
 * @param {string} frameColor - Frame color: 'space-gray' | 'silver' | 'gold' | 'black' | 'titanium'
 * @param {string} size - Size variant: 'sm' | 'md' | 'lg' | 'full'
 * @param {string} className - Additional CSS classes
 * @param {string} alt - Alt text for the image
 * @param {boolean} animated - Whether to add hover animation
 * @param {boolean} noNotch - Hide the notch/Dynamic Island (use when screenshot already has notch)
 */
const DeviceMockup = ({
  screenshot,
  device = 'iphone',
  orientation = 'portrait',
  frameColor = 'space-gray',
  size = 'md',
  className = '',
  alt = 'Device screenshot',
  animated = false,
  noNotch = false,
}) => {
  // Build CSS class names
  const deviceClass = `device-mockup--${device}`;
  const orientationClass = `device-mockup--${orientation}`;
  const colorClass = `device-mockup--${frameColor.replace(' ', '-')}`;
  const sizeClass = `device-mockup--${size}`;
  const animatedClass = animated ? 'device-mockup--animated' : '';
  const noNotchClass = noNotch ? 'device-mockup--no-notch' : '';

  const classes = [
    'device-mockup',
    deviceClass,
    orientationClass,
    colorClass,
    sizeClass,
    animatedClass,
    noNotchClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <div className="device-mockup__frame">
        <div className="device-mockup__screen">
          {screenshot && (
            <img
              src={screenshot}
              alt={alt}
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DeviceMockup;
