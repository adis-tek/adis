import { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Hero.module.scss'

const Hero: NextPage = (props) => {
    const [menu, setMenu] = useState(false);

    function toggleMenu () {
      setMenu(!menu);
    }

  return (
      <div className={styles.container}>
        {menu && 
        <div className={styles.toggleMenuContainer}>
          <div className={styles.topBannerContainer}>
          <h2 className={styles.subheader}>Pages</h2>
          <h3 className={styles.menuClose} onClick={toggleMenu}>X</h3>
          </div>
          <div className={styles.pageTitleContainer}>
          <h1 className={styles.pageTitle}>Projects</h1>
          <h6 className={styles.exponent}>01</h6>
          </div>
          <div className={styles.pageTitleContainer}>
          <h1 className={styles.pageTitle}>Resume</h1>
          <h6 className={styles.exponent}>02</h6>
          </div>
          <div className={styles.pageTitleContainer}>
          <h1 className={styles.pageTitle}>About</h1>
          <h6 className={styles.exponent}>03</h6>
          </div>
        </div>
      }
      <div className={styles.hero}>
        <div className={styles.menuContainer}>
        <h1 className={styles.logo}>adis</h1>
        <div className={styles.iconWrapper}>
        <Image
          src="/adis-menu.png"
          alt="menu icon"
          width={50}
          height={34}
          onClick={toggleMenu}
          className={styles.menuIcon}
        />
        </div>
        </div>
      </div>
      <h1>{props.video}</h1>
      </div>
  )
}

export default Hero