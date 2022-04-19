import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const About: NextPage = (props) => {

  return (
    <div className={styles.container}>
        <p>About Page</p>
    </div>
  )
}

export default About
