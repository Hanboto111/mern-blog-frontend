import { useState } from 'react';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const sliderStyles = {
    height: '100%',
    position: 'relative',
  };

  const slideStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  };

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>❮</div>
      <div style={rightArrowStyles} onClick={goToNext}>❯</div>
      <div style={slideStyle}></div> {/* Используем slideStyle для отображения слайда */}
    
    </div>
  );
};

export default ImageSlider;