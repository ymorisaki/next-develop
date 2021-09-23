import React from 'react';
import Head from 'next/head';
import { SwiperSlide } from 'swiper/react';
import Media from '../components/Media';
import Slider from '../components/Slider';

const Home = () : JSX.Element => (
  <>
    <Head>
      <title>Next.js</title>
    </Head>
    <h1>Hello World</h1>
    <Media src="/images/img-01.jpg" width="1200" height="802" alt="" />

    <Slider>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
    </Slider>
  </>
);

export default Home;
