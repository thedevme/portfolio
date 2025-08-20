import React from 'react';

function PadCards({
  title = "The feed that feeds your interests.",
  copy = "As you read, Apple News gets a better understanding of your interests and suggests relevant stories that you can easily find throughout the app.",
  colorPop = "The feed that feeds",
  deviceType = "right-device",
  imageSrc = "/assets/images/ipadexample1.jpg"
}) {
  
  if (deviceType === "left-device") {
    return (
      <div className="portfolio-grid-item portfolio-ipad-section left-device">
        <div className="portfolio-tile-content">
          <div className="portfolio-copy-wrapper">
            <h2 className="portfolio-tile-headline">
              <span className="portfolio-color-pop">{colorPop}</span> {title.replace(colorPop, '').trim()}
            </h2>
            <p className="portfolio-tile-copy">
              {copy}
            </p>
          </div>
        </div>
        <div className="portfolio-ipad-wrapper">
          <div className="portfolio-ipad-mockup">
            <img 
              src={imageSrc} 
              alt={title}
              style={{
                width: '280px',
                height: 'auto',
                borderRadius: '0px'
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="portfolio-grid-item portfolio-ipad-section right-device">
      <div className="portfolio-tile-content">
        <div className="portfolio-copy-wrapper">
          <h2 className="portfolio-tile-headline">
            <span className="portfolio-color-pop">{colorPop}</span> {title.replace(colorPop, '').trim()}
          </h2>
          <p className="portfolio-tile-copy">
            {copy}
          </p>
        </div>
        <div className="portfolio-ipad-wrapper">
          <div className="portfolio-ipad-mockup">
            <img 
              src={imageSrc} 
              alt={title}
              style={{
                width: '280px',
                height: 'auto',
                borderRadius: '0px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PadCards;


