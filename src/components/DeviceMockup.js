import React from 'react';

const DeviceMockup = ({ 
  device = 'iphone', // 'iphone' or 'ipad'
  image, 
  title, 
  subtitle, 
  description,
  className = ''
}) => {
  const deviceClasses = {
    iphone: 'device-mockup device-iphone',
    ipad: 'device-mockup device-ipad'
  };

  return (
    <div className={`device-showcase ${className}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="content-text">
              <h3 className="section-title">{title}</h3>
              {subtitle && <h4 className="section-subtitle">{subtitle}</h4>}
              <p className="section-description">{description}</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="device-container">
              <div className={deviceClasses[device]}>
                <div className="device-screen">
                  {image && (
                    <img 
                      src={image} 
                      alt={title} 
                      className="device-image"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceMockup;
