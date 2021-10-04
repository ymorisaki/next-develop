import React from 'react';
import Head from 'next/head';

const SiteHead = ({
  title,
  description,
}: {
  title: string,
  description: string
}): JSX.Element => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name={description} content="dummy" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Next" />
    <meta property="og:url" content="" />
    <meta property="og:title" content={title} />
    <meta property={`og:${description}`} content="dummy" />
    <meta property="og:image" content="" />
    <meta property="og:locale" content="ja_JP" />
  </Head>
);

export default SiteHead;
