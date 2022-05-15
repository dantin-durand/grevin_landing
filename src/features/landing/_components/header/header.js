import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slider from "utils/headerSlider";
import SliderItem from "./sliderItem";
import { useState } from "react";

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    if (currentSlide === 0) setCurrentSlide(slider.length - 1);
    else setCurrentSlide(currentSlide - 1);
  };

  const next = () => {
    if (currentSlide === slider.length - 1) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="relative">
      {slider.map((item, index) => (
        <SliderItem
          item={item}
          key={index}
          hidden={index !== currentSlide}
          prev={prev}
          next={next}
        />
      ))}
    </div>
  );
}
