import React from 'react'
import Styles from './brandssection.module.scss'
import Brandimage from './brandimage'
const Brandssectionabout = () => {
    return (
        <section className={Styles.mainContainer}>
            <div className="container">
                <h1 className={Styles.mainTitle}>Asociados con los mejores emprendedores </h1>
                <div className="row mt-5 justify-content-center">
                    <Brandimage  href={"https://www.instagram.com/mava_mx_/"} src={"/assets/mavabrand-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/magajoyeria/"} src={"/assets/magabrand-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/faga_accesorios/"} src={"/assets/fagabrand-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/silviaruth.ceramicaartesanal/"} src={"/assets/silviaruthbrand-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/bella.hechoamanoconamor/"} src={"/assets/bellabrand-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/tastynut.pb/"} src={"/assets/tastynutbrand-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/soyluzmistica/"} src={"/assets/luzmisticabrand-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/lucianajewelry/"} src={"/assets/lucianabrand-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/leonelacrochetandcrafts/"} src={"/assets/leonelabrand-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/hubbyssox/"} src={"/assets/hubbybrand-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/soybenditopecado/"} src={"/assets/benditopecadobrand-about.jpg"}/>
                    <Brandimage  href={"https://www.instagram.com/zera.semillas/"} src={"/assets/zerabrand-about.jpg"}/>
                </div>
            </div>
        </section>
    )
}

export default Brandssectionabout
