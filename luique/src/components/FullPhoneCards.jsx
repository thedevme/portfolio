import React from 'react';

const FullPhoneCards = ({ 
  title, 
  copy, 
  colorPop, 
  devicePosition = 'top', 
  imageSrc = '/assets/images/sample1.png',
  isHorizontal = false 
}) => {
  const renderDevice = () => (
    <div 
      className="device"
      style={{
        width: '212px',
        height: '429px',
        background: `url(${imageSrc}) center/cover`,
        borderRadius: '28px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        padding: devicePosition === 'top' || devicePosition === 'bottom' ? '10px 0' : '0'
      }}
    />
  );

  const renderTextContent = () => (
    <div className="text-content" style={{
      fontSize: '0.9rem',
      lineHeight: '1.4',
      color: '#ffffff',
      fontWeight: '400'
    }}>
      {copy.split(colorPop).map((part, index, array) => (
        <React.Fragment key={index}>
          {part}
          {index < array.length - 1 && (
            <span className="highlight" style={{ color: '#29a587' }}>
              {colorPop}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderTextSection = (isHorizontal = false) => (
    <div className={`text-section${isHorizontal ? '-horizontal' : ''}`} style={{
      height: isHorizontal ? 'auto' : '131px',
      width: isHorizontal ? '438px' : 'auto',
      padding: isHorizontal ? '40px' : '20px',
      display: 'flex',
      alignItems: isHorizontal ? 'flex-start' : 'center',
      flexDirection: isHorizontal ? 'column' : 'row',
      justifyContent: isHorizontal ? 'center' : 'flex-start',
      background: '#1d222a',
      gap: isHorizontal ? '20px' : '0'
    }}>
      {isHorizontal && title && (
        <h2 className="tile-headline" style={{
          fontSize: '2.125rem',
          fontWeight: '700',
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          color: '#ffffff',
          marginBottom: '0'
        }}>
          {title.split(colorPop).map((part, index, array) => (
            <React.Fragment key={index}>
              {part}
              {index < array.length - 1 && (
                <span className="highlight" style={{ color: '#29a587' }}>
                  {colorPop}
                </span>
              )}
            </React.Fragment>
          ))}
        </h2>
      )}
      {renderTextContent()}
    </div>
  );

  const renderImageSection = (isHorizontal = false) => (
    <div className={`image-section${isHorizontal ? '-horizontal' : ''}`} style={{
      height: isHorizontal ? 'auto' : '450px',
      width: isHorizontal ? '438px' : 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#1d222a',
      padding: isHorizontal ? '20.5px 0 10.5px 0' : (devicePosition === 'top' || devicePosition === 'bottom' ? '20.5px 0 30.5px 0' : '20.5px 0 10.5px 0'),
      boxSizing: 'border-box'
    }}>
      {renderDevice()}
    </div>
  );

  // Horizontal card layout
  if (isHorizontal) {
    return (
      <div className="card-horizontal" style={{
        width: '876px',
        height: '481px',
        background: '#1d222a',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        overflow: 'hidden',
        display: 'flex',
        margin: '0 auto'
      }}>
        {devicePosition === 'left' ? (
          <>
            {renderImageSection(true)}
            {renderTextSection(true)}
          </>
        ) : (
          <>
            {renderTextSection(true)}
            {renderImageSection(true)}
          </>
        )}
      </div>
    );
  }

  // Vertical card layout
  return (
    <div className="card" style={{
      width: '418px',
      height: '581px',
      background: '#1d222a',
      borderRadius: '20px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      overflow: 'hidden'
    }}>
      {devicePosition === 'top' ? (
        <>
          {renderImageSection()}
          {renderTextSection()}
        </>
      ) : (
        <>
          {renderTextSection()}
          {renderImageSection()}
        </>
      )}
    </div>
  );
};

export default FullPhoneCards;
