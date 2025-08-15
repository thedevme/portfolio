import React from 'react';

function PhoneCards({
  title = "The feed that feeds your interests.",
  copy = "As you read, Apple News gets a better understanding of your interests and suggests relevant stories that you can easily find throughout the app.",
  colorPop = "The feed that feeds",
  deviceType = "iphone",
  imageSrc = "/assets/images/iphoneexample1.jpg"
}) {
  
  if (deviceType === "left-device") {
    return (
      <div className="portfolio-grid-item portfolio-iphone-section left-device">
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
        <div className="portfolio-iphone-wrapper">
          <div className="portfolio-iphone-mockup">
            <img 
              src={imageSrc} 
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '32px 32px 0 0',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  
  if (deviceType === "full-width") {
    return (
      <div className="portfolio-grid-item portfolio-iphone-section" style={{ gridColumn: '1 / -1' }}>
        <div className="portfolio-tile-content">
          <div className="portfolio-copy-wrapper" style={{ paddingLeft: '120px !important' }}>
            <h2 className="portfolio-tile-headline">
              <span className="portfolio-color-pop">{colorPop}</span> {title.replace(colorPop, '').trim()}
            </h2>
            <p className="portfolio-tile-copy">
              {copy}
            </p>
          </div>
        </div>
        <div className="portfolio-image-wrapper" style={{ paddingRight: '120px' }}>
          <div className="portfolio-phone-mockup">
            <img 
              src={imageSrc} 
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '32px 32px 0 0',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="portfolio-grid-item portfolio-iphone-section">
      <div className="portfolio-tile-content">
        <div className="portfolio-copy-wrapper">
          <h2 className="portfolio-tile-headline">
            <span className="portfolio-color-pop">{colorPop}</span> {title.replace(colorPop, '').trim()}
          </h2>
          <p className="portfolio-tile-copy">
            {copy}
          </p>
        </div>
        <div className="portfolio-image-wrapper">
          <div className="portfolio-phone-mockup">
            <img 
              src={imageSrc} 
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '32px 32px 0 0',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneCards;
