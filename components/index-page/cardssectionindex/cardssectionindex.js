import React from 'react'
import Styles from './cardssectionindex.module.scss'
import Link from 'next/link'
export const Cardssectionindex = () => {
    return (
        <section className={Styles.mainContainer}>
            <h1 className={Styles.mainTitle}>En colectivo místico apoyamos</h1>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-8 mb-5">
                    <div className={Styles.card}>
                        <img className={Styles.imageCard} src="./assets/artcard-image.svg" alt="" />
                        <h2 className={Styles.cardTitle}>Arte</h2>
                    </div>
                </div>
                <div className="col-lg-3 col-8  mb-5">
                    <img className={Styles.imageCard} src="./assets/creativitycard-image.svg" alt="" />
                    <h2 className={Styles.cardTitle}>cretividad</h2>
                </div>
                <div className="col-lg-3 col-8  mb-5">
                    <img className={Styles.imageCard} src="./assets/talentcard-image.svg" alt="" />
                    <h2 className={Styles.cardTitle}>talento</h2>
                </div>
            </div>
            <div className=" d-flex justify-content-center">
                <Link href="/contacto">
                    <a className={`rounded-pill ${Styles.contactButton}`}>¡ Quiero colaborar!</a>
                </Link>
            </div>
        </section>
    )
}
