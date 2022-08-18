import { useState } from "react";
import { ReactComponent as Next } from "../assets/icon-next.svg";
import { ReactComponent as Previous } from "../assets/icon-previous.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
// Image thumbnails
import thumbnail1 from "../assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/image-product-4-thumbnail.jpg";

const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

function Slider({images}) {
  // laptop functions
  console.log(images);

  // mobile functions
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
      <LazyLoadImage className="slider-img" src={images[currentIndex].url} alt="prdouct1" style={{ maxWidth: "100%", maxHeight: "100%" }} />
      {/* laptop control */}
      <div className="section-btns">
        {thumbnails.map(thumbnail => {
          return (
            <img src={thumbnail} max-width="100%" max-height="100%" alt={thumbnail}/>
          )
        })}
      </div>
      {/* mobile control */}
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