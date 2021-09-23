import React from 'react';
import Head from 'next/head';
import Media from '../components/Media';

const Home = () => (
  <>
    <Head>
      <title>Next.js</title>
    </Head>
    <h1>Hello World</h1>
    <Media src="/images/img-01.jpg" alt="" width="1200" height="802" />
  </>
);

export default Home;
