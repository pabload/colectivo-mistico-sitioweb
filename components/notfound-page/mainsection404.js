import React from 'react'
import Layout from '../layout/layout'
import Styles from './mainsection404.module.scss'
import Image from 'next/image'
const Mainsection404 = () => {
    return (
        <Layout>
            <main className={Styles.mainContainer}>
                <h1 className={Styles.textStyle}>¡Oops pagina no encontrada !</h1>
                <h3 className={Styles.textStyle}>Posiblemente la página que buscas no existe prueba recargando otra vez </h3>
                <Image
                    alt="backgroundmain"
                    src="/assets/error404.svg"
                    layout="intrinsic"
                    width={450}
                    height={450}
                />
            </main>
        </Layout>
    )
}

export default Mainsection404
