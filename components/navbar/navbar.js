import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import Styles from './navbar.module.scss'
import Hamburger from 'hamburger-react'
import { Animated } from "react-animated-css";
import Image from 'next/image'
const Navbar = () => {
  const [mobileOptions, setMobileOptions] = useState(false);
  const [isOpen, setOpen] = useState(false)
  const mobileOptionsContainer = useRef();
  useEffect(() => {
    const onScrenChange = () => {
      if (window.screen.width > 600) {
        setOpen(false);
      }
    }
    window.addEventListener('resize', onScrenChange);
  })
  useEffect(() => {
    if (isOpen) {
      return mobileOptionsContainer.current.style.display = "flex";
    }
    return mobileOptionsContainer.current.style.display = "none";
  }, [isOpen])
  return (
    <>
      <nav className={Styles.navContainer}>
        <div className="container d-flex justify-content-around">
          <div className={Styles.logoContainer}>
          <img className={Styles.logo} src="./assets/logocolectivo.png" alt=""/>
            <h1 className="animate__animated', 'animate__fadeInDown">
            <Link href="/">
                <a className={Styles.title}>Colectivo Místico</a>
              </Link>
            </h1>
          </div>
          <ul className={Styles.optionsContainer}>
            <li>
              <Link href="/sobre-nosotros">
                <a className={Styles.options}>Sobre nosotros</a>
              </Link>
            </li>
            <li>
              <Link href="/contacto">
                <a className={Styles.options}>Contacto</a>
              </Link>
            </li>
            <li>
              <Link href="/articulos">
                <a className={Styles.options}> Artículos</a>
              </Link>
            </li>
          </ul>
          <div className={Styles.hamburger}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </nav>
      <div ref={mobileOptionsContainer} className={Styles.mobileOptionsContainer}>
        <div className={Styles.mobileOptionsSubContainer}>
        <Link href="/">
            <a className={Styles.mobileOptions}>Inicio</a>
          </Link>
          <Link href="/sobre-nosotros">
            <a className={Styles.mobileOptions}>Sobre nosotros</a>
          </Link>
          <Link href="/contacto">
            <a className={Styles.mobileOptions}>Contacto</a>
          </Link>
          <Link href="/articulos">
            <a className={Styles.mobileOptions}>Artículos</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar