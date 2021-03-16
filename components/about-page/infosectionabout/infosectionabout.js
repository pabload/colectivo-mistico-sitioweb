import React from 'react'
import Styles from './infosectionabout.module.scss'
import Image from 'next/image'
const Infosectionabout = () => {
    return (
        <section className={Styles.mainContainer}>
            <div className="row">
                <div className="col-lg-6">
                    <h2 className={Styles.mainTitle}>Quienes somos</h2>
                    <p className={Styles.textInfo}>Colectivo místico nace un 22 de enero de 2019, tomando como punto de partida la idea de los bazares convenciones en donde puedes encontrar todo tipo de productos en un solo lugar. </p>
                    <p className={Styles.textInfo}>Somos una empresa distribuidora de productos de todo tipo, provenientes de muchos emprendedores locales con el fin de promover la calidad y el talento de nuestra ciudad, ofrecemos desde joyería, accesorios, cosmética, productos artesanales, Snacks y muchas más propuestas. </p>
                </div>
                <div className="col-lg-6">
                    <Image
                        alt="product1"
                        src="/assets/svginfoabout.svg"
                        layout="responsive"
                        width={662}
                        height={647}
                    />
                </div>
            </div>

        </section>
    )
}

export default Infosectionabout
