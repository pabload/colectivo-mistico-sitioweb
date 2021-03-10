import React from 'react'
import Styles from './cardssectionindex.module.scss'
export const Cardssectionindex = () => {
    return (
        <section className={Styles.mainContainer}>
            <div className="container">
                <h1 className={Styles.mainTitle}>Clientes Satisfechos</h1>
                <div className="row d-flex justify-content-center align-items-center">
                    <div data-aos="fade-right" className="col-lg-3 col-9 mb-2">
                        <div className={Styles.card}>
                            <div className={Styles.cardInfo}>
                                <p>"Muy buena variedad de regalos y acessorios"</p>
                                <p>-Maria Fernandez</p>
                            </div>
                            <svg className={Styles.svgWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#51c2d5" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,181.3C672,203,768,213,864,186.7C960,160,1056,96,1152,58.7C1248,21,1344,11,1392,5.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="col-lg-3 col-9 mb-2">
                        <div className={Styles.card}>
                        <div className={Styles.cardInfo}>
                                <p>"Excelentes productos, me gusta que empujan a productores locales"</p>
                                <p>-Roberto Millan</p>
                        </div>
                            <svg className={Styles.svgWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#51c2d5" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,181.3C672,203,768,213,864,186.7C960,160,1056,96,1152,58.7C1248,21,1344,11,1392,5.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="col-lg-3 col-9 mb-2">
                        <div className={Styles.card}>
                        <div className={Styles.cardInfo}>
                                <p>"Ceramica hermosa"</p>
                                <p>-Jose Lopez</p>
                        </div>
                            <svg className={Styles.svgWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#51c2d5" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,181.3C672,203,768,213,864,186.7C960,160,1056,96,1152,58.7C1248,21,1344,11,1392,5.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="col-lg-3 col-9 mb-2">
                        <div className={Styles.card}>
                        <div className={Styles.cardInfo}>
                                <p>"Snacks buenísimos y nutritivos"</p>
                                <p>-Laura Torres</p>
                        </div>
                            <svg className={Styles.svgWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#51c2d5" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,181.3C672,203,768,213,864,186.7C960,160,1056,96,1152,58.7C1248,21,1344,11,1392,5.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
