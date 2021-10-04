import React from 'react';
import SiteHead from 'components/template/SiteHead';
import Header from 'components/template/Header';
import Media from 'components/module/media/Media';
import Slider from 'components/module/widget/Slider';
import Button from 'components/module/button/Button';

const Home = () : JSX.Element => (
  <>
    <SiteHead title="Next" description="Next" />
    <Header />
    <Media src="/images/img-01.jpg" width="1200" height="802" alt="" />

    <Button label="button" />

    <a href="/secondary/">secondary</a>

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
