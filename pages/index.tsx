import React from 'react';
import Head from 'next/head';
import { SwiperSlide } from 'swiper/react';
import Media from '../components/Media';
import Slider from '../components/Slider';
import styles from './index.module.scss';

const Home = () : JSX.Element => (
  <>
    <Head>
      <title>Next.js</title>
    </Head>
    <h1>Hello World</h1>
    <Media src="/images/img-01.jpg" width="1200" height="802" alt="" />

    <Slider spaceBetween={50}>
      <SwiperSlide className={styles.slide}>Slide 1</SwiperSlide>
      <SwiperSlide className={styles.slide}>Slide 2</SwiperSlide>
      <SwiperSlide className={styles.slide}>Slide 3</SwiperSlide>
      <SwiperSlide className={styles.slide}>Slide 4</SwiperSlide>
      <SwiperSlide className={styles.slide}>Slide 5</SwiperSlide>
      <SwiperSlide className={styles.slide}>Slide 6</SwiperSlide>
      <SwiperSlide className={styles.slide}>Slide 7</SwiperSlide>
    </Slider>
  </>
);

export default Home;
