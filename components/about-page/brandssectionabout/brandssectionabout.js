import React from 'react'
import Styles from './brandssection.module.scss'
import Brandimage from './brandimage'
const Brandssectionabout = () => {
    return (
        <section className={Styles.mainContainer}>
            <div className="container">
                <h1 className={Styles.mainTitle}>Asociados con los mejores emprendedores </h1>
                <div className="row mt-5 justify-content-center">
                    <Brandimage  href={"https://www.instagram.com/mava_mx_/"} src={"./assets/brand1-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/magajoyeria/"} src={"./assets/brand2-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/faga_accesorios/"} src={"./assets/brand3-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/lapintadalm/"} src={"./assets/brand4-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/eldetallito.lm/"} src={"./assets/brand5-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/silviaruth.ceramicaartesanal/"} src={"./assets/brand6-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/bella.hechoamanoconamor/"} src={"./assets/brand7-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/tastynut.pb/"} src={"./assets/brand8-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/soyluzmistica/"} src={"./assets/brand9-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/lucianajewelry/"} src={"./assets/brand10-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/leonelacrochetandcrafts/"} src={"./assets/brand11-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/hubbyssox/"} src={"./assets/brand12-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/joyeria_aryabymaly/"} src={"./assets/brand13-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/beisbolg/"} src={"./assets/brand14-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/soybenditopecado/"} src={"./assets/brand15-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/tierrabenditalm/"} src={"./assets/brand16-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/zera.semillas/"} src={"./assets/brand17-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/bella.hechoamanoconamor/"} src={"./assets/brand18-about.jpg"}/>
                </div>
            </div>
        </section>
    )
}

export default Brandssectionabout
