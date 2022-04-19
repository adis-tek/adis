import { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Footer.module.scss'

const Footer: NextPage = (props) => {

  return (
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
  )
}

export default Footer