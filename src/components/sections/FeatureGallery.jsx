import { useRef, useState } from 'react';
import DeviceMockup from '../DeviceMockup';

/**
 * FeatureGallery Component
 * Apple-style horizontal scrolling feature showcase
 * Supports touch swipe and mouse drag
 */
const FeatureGallery = ({ features, imageWidth = 425 }) => {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    trackRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab';
    }
  };

  return (
    <div className="feature-gallery">
      <div
        className="feature-gallery__track"
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {features.map((feature, index) => (
          <div key={index} className="feature-gallery__item">
            <div className="feature-gallery__device">
              {feature.device ? (
                <DeviceMockup
                  screenshot={feature.screenshot || feature.image}
                  device={feature.device}
                  orientation={feature.orientation || 'portrait'}
                  frameColor={feature.frameColor || 'space-gray'}
                  size="md"
                  alt={feature.title}
                />
              ) : (
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-gallery__image"
                />
              )}
            </div>
            <div className="feature-gallery__content">
              <span className="feature-gallery__number">0{index + 1}</span>
              <h3 className="feature-gallery__title">{feature.title}</h3>
              <p className="feature-gallery__description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGallery;
