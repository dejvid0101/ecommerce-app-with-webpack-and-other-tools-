import React, { useState, useEffect } from 'react';
import { AptImg } from '../interfaces/interfaces';

const ImageCarousel = ({images}:{images:any}) => {

  console.log(images)
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleClickPrevious = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };
  
  const handleClickNext = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };
    
  
  return (
    <div className="image-carousel">
      <button className="previous" onClick={handleClickPrevious}>
        &#60;
      </button>
      
      <img src={images[activeIndex].ImgUrl} alt={`Slide ${activeIndex}`} />
      
      <button className="next" onClick={handleClickNext}>
        &#62;
      </button>
    </div>
  );
};

export default ImageCarousel;