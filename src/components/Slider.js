import { useState } from "react";
import { ReactComponent as Next } from "../assets/icon-next.svg";
import { ReactComponent as Previous } from "../assets/icon-previous.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Slider({images}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function goToNext() {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="slider">
      <LazyLoadImage className="slider-img" src={images[currentIndex].url} alt="prdouct1" style={{ maxWidth: "100%" }} />
      <div className="btn-wrapper next">
        <Next onClick={goToNext} />
      </div>
      <div className="btn-wrapper prev">
        <Previous onClick={goToPrevious} />
      </div>
    </div>
  )
}

export default Slider