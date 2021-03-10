import React from 'react'
import Styles from './mainsectionabout.module.scss'
const Maintsectionabout = () => {
    return (
        <section className={Styles.mainContainer}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h1 className={Styles.mainTitle}>Un poco de historia</h1>
                        <p className={Styles.textInfo}>Colectivo místico nace un 22 de enero de 2019, tomando como punto de partida la idea de los bazares convenciones en donde puedes encontrar todo tipo de productos en un solo lugar </p>
                        <p className={Styles.textInfo}>Somos una empresa distribuidora de productos de todo tipo, provenientes de muchos emprendedores locales con el fin de promover la calidad y el talento de nuestra ciudad, ofrecemos desde joyería, accesorios, cosmética, productos artesanales, Snacks y muchas más propuestas. </p>
                    </div>
                    <div className="col-lg-4">
                        <img className={Styles.locationImage} src="./assets/locationcolectivo.png" alt="location" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Maintsectionabout
