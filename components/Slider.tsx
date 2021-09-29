import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './Slider.module.scss';

const Slider = ({
  content,
} : {
    content: JSX.Element[],
    }) : JSX.Element => (
      <Swiper
        className={styles.slider}
        spaceBetween={20}
        slidesPerView={3}
        loop
      >
        {content.map((jsx, index) => (
          <SwiperSlide className={styles.slider__item} key={index.toString()}>{jsx}</SwiperSlide>
        ))}
      </Swiper>
);

export default Slider;
