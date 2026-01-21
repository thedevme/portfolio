const TabletFullSection = ({ image, title, description, background = "default", imageWidth = 1000 }) => {
  const containerClass = background === "custom" ? "container-fluid bg-custom py-5" : "container-fluid py-5";

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
            <img
              src={image}
              width={imageWidth}
              alt={title}
              className="mx-auto d-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletFullSection;
