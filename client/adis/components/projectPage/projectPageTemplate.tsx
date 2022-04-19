import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/projectPageTemplate.module.scss'

const Projects: NextPage = (props) => {

  return (
    <div className={styles.container}>
        <div className={styles.introContainer}>
            <h1 className={styles.heading}>Enjoying the Process</h1>
            <p className={styles.excerpt}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
            <div className={styles.buttonContainer} role="button">
            <h2 className={styles.text}>Visit Site</h2>
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
            <h2 className={styles.text}>View Code</h2>
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
          <h1 className={styles.heading}>Enjoying the Process</h1>
          <p className={styles.excerpt}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
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
