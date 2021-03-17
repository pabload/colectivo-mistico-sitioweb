import React from 'react'
import Styles from './mainsectioncontact.module.scss'
const Mainsectioncontact = () => {
    return (
        <section className={Styles.mainContainer}>
            <div className={`container ${Styles.contentContainer}`}>
                <h1 className={Styles.mainTitle}>¿Te gustaría ser parte del colectivo?</h1>
                <p className={Styles.subTitle}>Únete y forma parte de un grupo de personas apasionadas a sus ideas y proyectos </p>
                <div className="row">
                    <div className="col-lg-8 ">
                        <div className={Styles.formContainer}>
                            <form action="">
                                <h3 className={Styles.formTitle}>Envíanos un correo</h3>
                                <div className="row p-2">
                                    <div className="col-lg-6">
                                        <input className={Styles.inputStyle} type="text" name="fname" placeholder='Tu nombre' />
                                    </div>
                                    <div className="col-lg-6">
                                        <input className={Styles.inputStyle} type="text" name="fname" placeholder='Tu correo electronico' />
                                    </div>
                                </div>
                                <div className="row p-2">
                                    <div className="col-lg-8">
                                        <input className={Styles.inputStyle} type="text" name="fname" placeholder='Asunto' />
                                    </div>
                                </div>
                                <div className="row p-2">
                                    <div className="col-lg-10">
                                        <textarea className={Styles.inputStyle} placeholder='Tu mensaje'></textarea>
                                    </div>
                                    <div className="col-lg-2">
                                        <button className={Styles.sendButton}>
                                            <i class={`far fa-paper-plane ${Styles.sendIcon}`}></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={Styles.contactInfoContainer}>
                            <h3 className={Styles.infoTitle}>Contacto</h3>
                            <div className="container">
                                <div className="d-flex flex-column text-center p-2">
                                    <i className={`fas fa-map-marker-alt ${Styles.contactIcon}`}></i>
                                    Blvd. Rosales #625 entre Cano y Owen Colonia Scally 81240 Los Mochis, Sinaloa, México
                                </div>
                                <div className="d-flex flex-column text-center p-2">
                                    <i className={`fas fa-phone ${Styles.contactIcon}`}></i>
                                    668 102 4995
                                </div>
                                <div className="d-flex flex-column text-center p-2">
                                    <i className={`fas fa-envelope ${Styles.contactIcon}`}></i>
                                    contacto@colectivomistico.com
                                </div>
                                <div className="d-flex justify-content-around p-2">
                                    <a className={Styles.iconContainer} href="https://www.facebook.com/pages/category/Gift-Shop/Colectivo-M%C3%ADstico-654882348277172/" target="_blank">
                                        <i className={`fab fa-facebook-square ${Styles.contactIcon}`}></i>
                                    </a>
                                    <a className={Styles.iconContainer} href="https://www.instagram.com/colectivomistico/?hl=es" target="_blank">
                                    <i className={`fab fa-instagram ${Styles.contactIcon}`}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mainsectioncontact
