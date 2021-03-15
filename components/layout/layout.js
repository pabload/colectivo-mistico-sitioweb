import React from 'react'
import styles from './layout.module.scss'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import Head from 'next/head'
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossOrigin="anonymous"></link>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Navbar />
      <div className={styles.contetcontainer}>
        {children}
        <Footer/>
      </div>
    </>
  )
}

export default Layout