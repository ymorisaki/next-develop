import React from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';

const Slider = ({
  children,
  spaceBetween = 0,
} : {
    children: JSX.Element[],
    spaceBetween: number
    }) : JSX.Element => (
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={3}
        loop
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {children}
      </Swiper>
);

export default Slider;
