import React from 'react'
import Styles from './mainsectionabout.module.scss'
import Image from 'next/image'
const Maintsectionabout = () => {
    return (
        <section className={Styles.mainContainer}>
            <div className={Styles.bgWrap}>
                <Image
                    alt="Mountains"
                    src="/assets/backgroundlocation-about.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className="row h-100 w-100 justify-content-center align-items-center">
                <div className="col-lg-7">
                    <h1 className={Styles.mainTitle}>Sobre Nosotros</h1>
                    <p className={Styles.textInfo}>Comprometidos con la calidad y el talento sinaloense traemos a un solo lugar diferentes propuestas de productos </p>
                </div>
            </div>
        </section>
    )
}

export default Maintsectionabout
