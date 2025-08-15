import React from 'react';

function iPhoneCards({
  title = "The feed that feeds your interests.",
  copy = "As you read, Apple News gets a better understanding of your interests and suggests relevant stories that you can easily find throughout the app.",
  colorPop = "The feed that feeds",
  deviceType = "iphone",
  imageSrc = "/assets/images/iphoneexample1.jpg"
}) {
  console.log('iPhoneCards rendering with:', { title, copy, colorPop, deviceType, imageSrc });
  
  if (deviceType === "left-device") {
    console.log('iPhoneCards rendering left-device layout');
    return (
      <div className="portfolio-grid-item portfolio-iphone-section left-device" style={{ border: '2px solid blue', padding: '20px' }}>
        <div style={{ color: 'white', fontSize: '24px', marginBottom: '10px' }}>DEBUG: iPhoneCards Left Device Rendered</div>
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
  
  return (
    <div style={{ 
      background: 'purple', 
      color: 'white', 
      padding: '20px', 
      margin: '20px 0',
      border: '3px solid orange',
      fontSize: '16px'
    }}>
      <div>DEBUG: iPhoneCards Component Rendered</div>
      <div>Title: {title}</div>
      <div>Copy: {copy}</div>
      <div>ColorPop: {colorPop}</div>
      <div>ImageSrc: {imageSrc}</div>
      <img 
        src={imageSrc} 
        alt={title}
        style={{
          width: '100px',
          height: '100px',
          border: '2px solid white'
        }}
      />
    </div>
  );
}

export default iPhoneCards;
