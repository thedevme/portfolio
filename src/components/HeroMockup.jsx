import DeviceMockup from './DeviceMockup';

/**
 * HeroMockup Component
 * Multiple devices arranged for header banners with background text
 *
 * Layout options:
 * - 'showcase': Apple-style row with ODD number of devices (3 or 5) for symmetry
 * - 'spotlight': Single dramatic device with cinematic glow effect (1 device)
 * - 'split': Device on right, large text on left - Apple product page style (1-2 devices)
 * - 'crossplatform': iPhone + Android side by side with unified glow - perfect for React Native (2 devices)
 * - 'cascade': 3D stacked devices with perspective depth - great for showing multiple screens (3-4 devices)
 * - 'row': Simple horizontal row
 * - 'staggered': Alternating heights
 * - 'fan': Fanned out arrangement
 *
 * @param {Array} devices - Array of device objects: { screenshot, device, frameColor, orientation }
 * @param {string} backgroundText - Large title text behind devices
 * @param {string} title - Main title text
 * @param {string} subtitle - Subtitle text
 * @param {string} layout - Layout style: 'row' | 'staggered' | 'fan' | 'showcase' | 'spotlight' | 'split' | 'crossplatform' | 'cascade'
 * @param {string} spacing - Spacing between devices: 'sm' | 'md' | 'lg'
 * @param {string} className - Additional CSS classes
 */
const HeroMockup = ({
  devices = [],
  backgroundText = '',
  title = '',
  subtitle = '',
  layout = 'row',
  spacing = 'md',
  className = '',
}) => {
  // Showcase layout supports more devices, others limited to 4
  const maxDevices = layout === 'showcase' ? 10 : 4;
  const displayDevices = devices.slice(0, maxDevices);

  // Build CSS classes
  const layoutClass = `hero-mockup--${layout}`;
  const spacingClass = `hero-mockup--spacing-${spacing}`;

  const classes = [
    'hero-mockup',
    layoutClass,
    spacingClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Determine device size based on number of devices
  const getDeviceSize = () => {
    switch (displayDevices.length) {
      case 1:
        return 'lg';
      case 2:
        return 'md';
      case 3:
      case 4:
        return 'sm';
      default:
        return 'md';
    }
  };

  return (
    <div className={classes}>
      {backgroundText && (
        <div className="hero-mockup__background-text">
          {backgroundText}
        </div>
      )}
      {(title || subtitle) && (
        <div className="hero-mockup__header">
          {title && <h1 className="hero-mockup__title">{title}</h1>}
          {subtitle && <p className="hero-mockup__subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="hero-mockup__devices">
        {displayDevices.map((deviceConfig, index) => (
          <div key={index} className="hero-mockup__device-wrapper">
            <DeviceMockup
              screenshot={deviceConfig.screenshot}
              device={deviceConfig.device || 'iphone'}
              orientation={deviceConfig.orientation || 'portrait'}
              frameColor={deviceConfig.frameColor || 'space-gray'}
              size={deviceConfig.size || getDeviceSize()}
              noNotch={deviceConfig.noNotch !== false}
              alt={`${backgroundText || 'App'} screenshot ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroMockup;
