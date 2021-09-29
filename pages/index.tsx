import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Media from '../components/Media';
import Slider from '../components/Slider';
import Button from '../components/Button';

const Home = () : JSX.Element => (
  <>
    <Head>
      <title>Next.js</title>
    </Head>
    <Header />
    <Media src="/images/img-01.jpg" width="1200" height="802" alt="" />

    <Button label="button" />

    <Slider
      content={[
        <a href="/">link1</a>,
        <a href="/">link2</a>,
        <a href="/">link3</a>,
        <a href="/">link4</a>,
        <a href="/">link5</a>,
        <a href="/">link6</a>,
        <a href="/">link7</a>,
        <a href="/">link8</a>,
        <a href="/">link9</a>,
      ]}
    />
  </>
);

export default Home;
