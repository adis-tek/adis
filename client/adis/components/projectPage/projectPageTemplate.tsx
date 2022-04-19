import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.scss'

const Projects: NextPage = (props) => {

  return (
    <div>
        <p>Projects Page</p>
        <p>{props.name}</p>
        <Image
            src={props.photo}
            alt="menu icon"
            width={250}
            height={250}
            />
    </div>
  )
}

export default Projects
