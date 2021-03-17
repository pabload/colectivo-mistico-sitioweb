import React from 'react'
import Styles from './cardssectionindex.module.scss'
import Link from 'next/link'
import Image from 'next/image'
export const Cardssectionindex = () => {
    return (
        <section className={Styles.mainContainer}>
            <h1 className={Styles.mainTitle}>En colectivo místico apoyamos</h1>
            <div className="row justify-content-center">
                <div className="col-lg-3  col-8 mb-5">
                    <div className={Styles.card}>
                        <Image
                            alt="Mountains"
                            src="/assets/artcard-image.svg"
                            layout="responsive"
                            width={870}
                            height={811}
                        />
                        <h2 className={Styles.cardTitle}>Arte</h2>
                    </div>
                </div>
                <div className="col-lg-3 col-8  mb-5">
                    <Image
                        alt="Mountains"
                        src="/assets/creativitycard-image.svg"
                        layout="responsive"
                        width={870}
                        height={811}
                    />
                    <h2 className={Styles.cardTitle}>Cretividad</h2>
                </div>
                <div className="col-lg-3 col-8  mb-5">
                    <Image
                        alt="Mountains"
                        src="/assets/talentcard-image.svg"
                        layout="responsive"
                        width={870}
                        height={811}
                    />
                    <h2 className={Styles.cardTitle}>Talento</h2>
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
