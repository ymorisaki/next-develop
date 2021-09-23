import React from 'react';
import styles from './Media.module.scss';
import hoge from './test';

const Media = ({
  src,
  alt,
  width,
  height,
} : {
  src: string,
  alt: string,
  width: string,
  height: string
}) => (
  <div className={styles.media}>
    <img src={src} alt={alt} width={width} height={height} />
    <button type="button" onClick={() => hoge()}>hoge</button>
  </div>
);

export default Media;
