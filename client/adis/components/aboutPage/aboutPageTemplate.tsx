import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/aboutPageTemplate.module.scss'

const About: NextPage = (props) => {
    const [faq, setFaq] = useState(false);

    function toggleFaq () {
      setFaq(!faq);
    }

  return (
    <div className={styles.container}>
        <div className={styles.introContainer}>
            <h1 className={styles.heading}>Enjoying the Process</h1>
            <p className={styles.excerpt}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
            <div className={styles.buttonContainer} role="button">
            <h2 className={styles.text}>See Github</h2>
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
      <div className={styles.excerptContainer}>
          <h1 className={styles.heading}>Enjoying the Process</h1>
          <p className={styles.excerpt}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
      </div>
    <div className={styles.faqContainer}>
        <div className={styles.faqBox} onClick={toggleFaq}>
            <div className={styles.qaContainer}>
            <div className={styles.questionContainer}>
            <h2 className={styles.question}>01. Meaning of life?</h2>
            {faq === true &&
            <h1 className={styles.close}>X</h1>
            }
            {faq === false &&
            <h1 className={styles.open}>O</h1>
            }
            </div>
            {faq && 
                <p className={styles.answer}>The answer is 42.</p>
            }
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
