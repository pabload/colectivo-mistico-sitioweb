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
                         
                        </div>
                    </div>
                    <div data-aos="fade-right" className="col-lg-3 col-9 mb-2">
                        <div className={Styles.card}>
                        <div className={Styles.cardInfo}>
                                <p>"Excelentes productos, me gusta que empujan a productores locales"</p>
                                <p>-Roberto Millan</p>
                        </div>
                        
                        </div>
                    </div>
                    <div data-aos="fade-right" className="col-lg-3 col-9 mb-2">
                        <div className={Styles.card}>
                        <div className={Styles.cardInfo}>
                                <p>"Ceramica hermosa"</p>
                                <p>-Jose Lopez</p>
                        </div>
                          
                        </div>
                    </div>
                    <div data-aos="fade-right" className="col-lg-3 col-9 mb-2">
                        <div className={Styles.card}>
                        <div className={Styles.cardInfo}>
                                <p>"Snacks buenísimos y nutritivos"</p>
                                <p>-Laura Torres</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
