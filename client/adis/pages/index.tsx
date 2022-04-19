import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
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
        <h1 className={styles.logo}>Adis</h1>
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
      <div className={styles.introWrapper}>
        <h1 className={styles.heading}>UI/UX Development</h1>
        <p className={styles.excerpt}>Some text is here.</p>
      </div>
      <div className={styles.featuredPhotosContainer}>
        <div className={styles.featuredPhoto1}>
        <Image
          src="/featured-1.jpg"
          alt="screenshot of an app"
          width={180}
          height={235}
          className={styles.featuredPhoto}
        />
        </div>
        <div className={styles.featuredPhoto2}>
        <Image
          src="/featured-2.jpg"
          alt="screenshot of an app"
          width={180}
          height={235}
          className={styles.featuredPhoto}
        />
        </div>
        </div>
        <div className={styles.featuredProjectsContainer}>
          <div className={styles.leftProject}>
            <h1 className={styles.number}>01</h1>
            <h1 className={styles.title}>Audiophile</h1>
            <div className={styles.featuredProjectWrapper}>
            <Image
              src="/featured-2.jpg"
              alt="screenshot of an app"
              width={350}
              height={350}
              className={styles.featuredPhoto}
            />
            </div>
          </div>
          <div className={styles.rightProject}>
            <h1 className={styles.number}>02</h1>
            <h1 className={styles.title}>Arch</h1>
            <div className={styles.featuredProjectWrapper}>
            <Image
              src="/featured-2.jpg"
              alt="screenshot of an app"
              width={350}
              height={350}
              className={styles.featuredPhoto}
            />
          </div>
        </div>
        </div>
      <div className={styles.readMoreContainer}>
        <h1 className={styles.heading}>Enjoying the Process</h1>
        <p className={styles.excerpt}>Some text is here.</p>
        <div className={styles.readMoreButtonContainer} role="button">
          <h2 className={styles.text}>Read More</h2>
          <div className={styles.imageWrapper}>
            <Image
              src="/button-arrow.png"
              alt="arrow pointing up to the right corner of the screen"
              width={17}
              height={17}
              className={styles.buttonArrow}
            />
          </div>
        </div>
        <div className={styles.outlinedShadow} />
      </div>
      <div className={styles.footerContainer}>

        <h2 className={styles.subheader}>Pages</h2>
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
        <div className={styles.contactContainer}>
          <h1 className={styles.text}>Contact Me</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
