import React from 'react'
import Styles from './mainsectionabout.module.scss'
const Maintsectionabout = () => {
    return (
        <section className={Styles.mainContainer}>
                <div className="row h-100 w-100 justify-content-center align-items-center">
                    <div className="col-lg-7">
                        <h1 className={Styles.mainTitle}>Sobre Nosotros</h1>
                        <p  className={Styles.textInfo}>Comprometidos con la calidad y el talento sinaloense traemos a un solo lugar diferentes propuestas de productos </p>
                    </div>
                </div>
        </section>
    )
}

export default Maintsectionabout
