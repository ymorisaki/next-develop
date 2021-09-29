import React from 'react';
import styles from './Header.module.scss';

const Header = (): JSX.Element => (
  <header className={styles.header}>
    <div className={styles.header__inner}>
      {'/'
        ? <h1 className={styles.logo}>Logo</h1>
        : <div className={styles.logo}>Logo</div>}
    </div>
  </header>

);

export default Header;
