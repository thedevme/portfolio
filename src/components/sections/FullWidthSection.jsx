import DeviceMockup from '../DeviceMockup';

const FullWidthSection = ({
  image,
  screenshot,
  device,
  orientation = 'portrait',
  frameColor = 'space-gray',
  noNotch = true,
  title,
  description,
  imagePosition = "right",
  background = "default",
  imageWidth = 425
}) => {
  const containerClass = background === "custom" ? "container-fluid bg-custom py-5" : "container-fluid py-5";

  const renderImage = () => {
    // If device is specified, use DeviceMockup
    if (device) {
      return (
        <div className="device-section-container">
          <DeviceMockup
            screenshot={screenshot || image}
            device={device}
            orientation={orientation}
            frameColor={frameColor}
            size={device === 'watch' ? 'lg' : 'md'}
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
        className={imagePosition === "left" ? "float-start" : "float-end"}
      />
    );
  };

  return (
    <div className={containerClass}>
      <div className="container">
        <div className="row align-items-center">
          {imagePosition === "left" ? (
            <>
              <div className="col-lg-6">
                {renderImage()}
              </div>
              <div className="col-lg-6">
                <h2 className="text-center">{title}</h2>
                <p>{description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-6">
                <h2 className="text-left">{title}</h2>
                <p>{description}</p>
              </div>
              <div className="col-lg-6">
                {renderImage()}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullWidthSection;
