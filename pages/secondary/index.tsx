import React from 'react';
import SiteHead from 'components/template/SiteHead';
import Header from 'components/template/Header';
import Media from 'components/module/media/Media';
import Button from 'components/module/button/Button';

const Home = () : JSX.Element => (
  <>
    <SiteHead title="Secondary" description="Secondary" />
    <Header />
    <Media src="/images/img-01.jpg" width="1200" height="802" alt="" />

    <Button label="button" />
    <a href="/">back</a>
  </>
);

export default Home;
