const FullWidthSection = ({ image, title, description, imagePosition = "right", background = "default", imageWidth = 425 }) => {
  const containerClass = background === "custom" ? "container-fluid bg-custom py-5" : "container-fluid py-5";

  return (
    <div className={containerClass}>
      <div className="container">
        <div className="row align-items-center">
          {imagePosition === "left" ? (
            <>
              <div className="col-lg-6">
                <img
                  src={image}
                  width={imageWidth}
                  alt={title}
                  className="float-start"
                />
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
                <img
                  src={image}
                  width={imageWidth}
                  alt={title}
                  className="float-end"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullWidthSection;
