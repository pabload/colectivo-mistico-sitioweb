import React from 'react'
import Styles from './mainsectionindex.module.scss'
import { Animated } from "react-animated-css";
export const Mainsectionindex = () => {
    return (
        <main className={Styles.mainContainer}>
            <img className={Styles.clouds} src="./assets/clouds.png" alt=""/>
            <div className={Styles.infoContainer}>
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-lg-7 col-md-7">
                        <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
                            <h1 className={Styles.mainTitle}>¡Diferentes propuestas, un solo lugar!</h1>
                            <p className={Styles.subTitle}>Accesorios, productos artesanales, cerámica y mas</p>
                        </Animated>
                    </div>
                </div>
            </div>
         
        </main>
    )
}
