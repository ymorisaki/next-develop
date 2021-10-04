import React from 'react';
import styles from './Media.module.scss';

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
}) : JSX.Element => (
  <div className={styles.media}>
    <img src={src} alt={alt} width={width} height={height} />
  </div>
);

export default Media;
