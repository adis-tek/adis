import type { NextPage } from 'next'
import { useState } from 'react'
import Hero from '../components/hero/hero'
import Footer from '../components/footer/footer'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import data from '../data.json'

const Home: NextPage = () => {
  const [menu, setMenu] = useState(false);

  function toggleMenu () {
    setMenu(!menu);
  }

  return (
    <div className={styles.container}>
      <Hero
      video={data.video}
       />
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
      <Footer />
    </div>
  )
}

export default Home
