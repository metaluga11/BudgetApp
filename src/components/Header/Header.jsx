import React from 'react';
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src='https://cdn.vectorstock.com/i/1000x1000/65/51/kindergarten-logo-vector-27256551.webp'></img>
      </div>
      <div className={styles.title}>
        <h1>dnz23</h1>
      </div>
    </div>
  )
}

export default Header