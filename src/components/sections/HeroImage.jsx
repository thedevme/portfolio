import HeroMockup from '../HeroMockup';

const HeroImage = ({
  image,
  headerDevices,
  headerText,
  headerTitle,
  headerSubtitle,
  headerLayout = 'row',
  headerSpacing = 'md',
}) => {
  // If headerDevices is provided, use HeroMockup
  if (headerDevices && headerDevices.length > 0) {
    return (
      <div className="section section-inner">
        <div className="m-image-large">
          <HeroMockup
            devices={headerDevices}
            backgroundText={headerText}
            title={headerTitle}
            subtitle={headerSubtitle}
            layout={headerLayout}
            spacing={headerSpacing}
          />
        </div>
      </div>
    );
  }

  // Fallback to original image-based hero
  return (
    <div className="section section-inner">
      <div className="m-image-large">
        <div className="image">
          <div
            className="img js-parallax"
            style={{
              backgroundImage: `url(${image})`,
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
