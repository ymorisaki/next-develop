import React from 'react';
import SiteHead from 'components/template/SiteHead';
import Header from 'components/template/Header';
import Slider from 'components/module/widget/Slider';
import Button from 'components/module/button/Button';
import Toggle from 'components/module/toggle/Toggle';

const Home = () : JSX.Element => (
  <>
    <SiteHead title="Next" description="Next" />
    <Header />
    <Button label="button" />

    <a href="/secondary/">secondary</a>

    <h2>Slider</h2>

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

    <Toggle
      button={
        <span>ToggleButton1</span>
      }
      content={(
        <>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus obcaecati error consequuntur numquam, necessitatibus, explicabo itaque natus nesciunt exercitationem quas dolorem quasi placeat nulla cupiditate fugiat architecto esse at neque.
        </>
      )}
    />

    <Toggle
      button={
        <span>ToggleButton2</span>
      }
      content={(
        <>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus obcaecati error consequuntur numquam, necessitatibus, explicabo itaque natus nesciunt exercitationem quas dolorem quasi placeat nulla cupiditate fugiat architecto esse at neque.
        </>
      )}
    />
  </>
);

export default Home;
