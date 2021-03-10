import React from 'react'
import styles from './layout.module.scss'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import Head from 'next/head'
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Colectivo Mistico</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Navbar />
      <div className={styles.contetcontainer}>
        {children}
      </div>
    </>
  )
}

export default Layout