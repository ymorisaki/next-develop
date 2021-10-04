import React from 'react';
import styles from './Button.module.scss';
import hoge from '../../scripts/test';

const Button = ({ label }: {label: string}): JSX.Element => (
  <button className={styles.btn} onClick={hoge} type="button">{label}</button>
);

export default Button;
