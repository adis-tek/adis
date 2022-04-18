import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.menuContainer}>
        <h1 className={styles.logo}>Adis</h1>
        <div className={styles.iconWrapper}>
        <Image
          src="/adis-menu.png"
          alt="menu icon"
          width={50}
          height={34}
          className={styles.menuIcon}
        />
        </div>
        </div>
      </div>
      <h1>Adis has spun up.</h1>
      <div className={styles.featuredPhotosContainer}>
        <Image
          src="/featured-1.jpg"
          alt="screenshot of an app"
          width={180}
          height={235}
          className={styles.featuredPhoto}
        />
        <Image
          src="/featured-2.jpg"
          alt="screenshot of an app"
          width={180}
          height={235}
          className={styles.featuredPhoto}
        />
        </div>
        <div className={styles.featuredProjectsContainer}>
          <div className={styles.leftProject}>
            <h1 className={styles.number}>01</h1>
            <h1 className={styles.title}>Audiophile</h1>
            <Image
              src="/featured-2.jpg"
              alt="screenshot of an app"
              width={180}
              height={235}
              className={styles.featuredPhoto}
            />
          </div>
        </div>
    </div>
  )
}

export default Home
