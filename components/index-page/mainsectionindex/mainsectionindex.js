import React from 'react'
import Styles from './mainsectionindex.module.scss'
import Image from 'next/image'
import { Animated } from "react-animated-css";
export const Mainsectionindex = () => {
    return (
        <main className={Styles.mainContainer}>
            <div className={Styles.bgWrap}>
                <Image
                    alt="backgroundmain"
                    src="/assets/backgroundmain-index.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className={` ${Styles.infoContainer}`}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
                            <h1 className={Styles.mainTitle}>¡Diferentes propuestas, un solo lugar!</h1>
                            <p className={Styles.subTitle}>Accesorios, productos artesanales, cerámica y más</p>
                        </Animated>
                    </div>

                </div>
            </div>
        </main>
    )
}
