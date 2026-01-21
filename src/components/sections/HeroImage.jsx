const HeroImage = ({ image }) => {
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
