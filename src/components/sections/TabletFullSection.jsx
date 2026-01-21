import DeviceMockup from '../DeviceMockup';

const TabletFullSection = ({
  image,
  screenshot,
  device,
  orientation = 'landscape',
  frameColor = 'space-gray',
  noNotch = true,
  title,
  description,
  background = "default",
  imageWidth = 1000
}) => {
  const containerClass = background === "custom" ? "container-fluid bg-custom py-5" : "container-fluid py-5";

  const renderImage = () => {
    // If device is specified (typically 'ipad'), use DeviceMockup
    if (device) {
      return (
        <div className="tablet-device-container">
          <DeviceMockup
            screenshot={screenshot || image}
            device={device}
            orientation={orientation}
            frameColor={frameColor}
            size="lg"
            noNotch={noNotch}
            alt={title}
          />
        </div>
      );
    }

    // Fallback to regular image
    return (
      <img
        src={image}
        width={imageWidth}
        alt={title}
        className="mx-auto d-block"
      />
    );
  };

  return (
    <div className={containerClass}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <h2 className="text-center">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="row align-items-middle">
          <div className="col-lg-12">
            {renderImage()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletFullSection;
