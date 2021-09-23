import React from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';

const Slider = ({ children } : { children: JSX.Element[] }) : JSX.Element => (
  <Swiper
    spaceBetween={50}
    slidesPerView={3}
    loop
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    {children}
  </Swiper>
);

export default Slider;
