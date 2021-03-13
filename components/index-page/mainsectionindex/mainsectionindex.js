import React from 'react'
import Styles from './mainsectionindex.module.scss'
import { Animated } from "react-animated-css";
export const Mainsectionindex = () => {
    return (
        <main className={Styles.mainContainer}> 
            <img className={Styles.svgWave} src="./assets/wavemainsectionindex.svg" alt=""/>
            <div className={`container ${Styles.infoContainer}`}>
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-lg-8 col-md-6">
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
