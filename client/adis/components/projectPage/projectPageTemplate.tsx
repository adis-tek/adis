import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/projectPageTemplate.module.scss'

const Projects: NextPage = (props) => {

  return (
    <div className={styles.container}>
        <div className={styles.introContainer}>
            <h1 className={styles.heading}>{props.introHeading}</h1>
            <p className={styles.excerpt}>{props.introExcerpt}</p>
            <div className={styles.buttonContainer} role="button">
            <h2 className={styles.text}>{props.button1}</h2>
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
            <div className={styles.buttonContainer} role="button">
            <h2 className={styles.text}>{props.button2}</h2>
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
      <div className={styles.slideshowContainer}>
          <p>Slideshow</p>
      </div>
      <div className={styles.excerptContainer}>
          <h1 className={styles.heading}>{props.bodyHeading}</h1>
          <p className={styles.excerpt}>{props.bodyExcerpt}</p>
    </div>
    <div className={styles.screenshotsContainer}>
        <div className={styles.imageWrapper}>
            <Image
                src="/featured-2.jpg"
                alt="a visual app demo"
                width={250}
                height={250}
                className={styles.screenshot}
                />
        </div>
        <div className={styles.imageWrapper}>
            <Image
                src="/featured-2.jpg"
                alt="a visual app demo"
                width={250}
                height={250}
                className={styles.screenshot}
                />
        </div>
        <div className={styles.imageWrapper}>
            <Image
                src="/featured-2.jpg"
                alt="a visual app demo"
                width={250}
                height={250}
                className={styles.screenshot}
                />
        </div>
    </div>
    </div>
  )
}

export default Projects
