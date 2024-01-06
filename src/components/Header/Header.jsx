import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">PRO.beauty</Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet/>
    </>
  );
};

export default Header;