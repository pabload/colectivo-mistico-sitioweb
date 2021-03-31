import React, { useState, useEffect } from 'react'
import Styles from './mainsectioncontact.module.scss'
import { useForm, ValidationError } from '@formspree/react';
const Mainsectioncontact = () => {
    const [state, handleSubmit] = useForm("xrgrzwyr");
    const [formError, setformError] = useState(false);
    const [formSuccess, setformSuccess] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const validateFields = async(e) => {
        e.preventDefault();
        if (name == '' || email == '' || subject == '' || message == '') {
            return setformError(true);
        }
        await handleSubmit(e);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }
    return (
        <section className={Styles.mainContainer}>
            <div className={`container ${Styles.contentContainer}`}>
                <h1 className={Styles.mainTitle}>¿Te gustaría ser parte del colectivo?</h1>
                <p className={Styles.subTitle}>Únete y forma parte de un grupo de personas apasionadas a sus ideas y proyectos </p>
                <div className="row">
                    <div className="col-lg-8 ">
                        <div className={Styles.formContainer}>
                            <form onSubmit={validateFields}>
                                <h3 className={Styles.formTitle}>Envíanos un correo</h3>
                                {
                                    state.submitting ?
                                        <div className={Styles.boxAlert}>
                                            <div className={`spinner-border ${Styles.spinner}`} role="status">
                                                <span className="sr-only"></span>
                                            </div>
                                        </div>
                                        : state.succeeded ?
                                            <div className={Styles.boxAlert}>
                                                Mensaje enviado
                                            </div>
                                            : formError ?
                                                <div className={Styles.boxAlert}>
                                                    Debes de llenar todos los campos
                                                </div>
                                                : null

                                }
                                <div className="row p-2">
                                    <div className="col-lg-6">
                                        <input
                                            className={Styles.inputStyle}
                                            type="text" name="nombre"
                                            placeholder='Tu nombre'
                                            value={name}
                                            onChange={event => setName(event.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <input
                                            className={Styles.inputStyle}
                                            placeholder='Tu correo electronico'
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={event => setEmail(event.target.value)}
                                        />
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </div>
                                </div>
                                <div className="row p-2">
                                    <div className="col-lg-8">
                                        <input
                                            className={Styles.inputStyle}
                                            name="_subject"
                                            placeholder='Asunto'
                                            value={subject}
                                            onChange={event => setSubject(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="row p-2">
                                    <div className="col-lg-10">
                                        <textarea
                                            className={Styles.inputStyle}
                                            placeholder='Tu mensaje'
                                            id="message"
                                            name="message"
                                            value={message}
                                            onChange={event => setMessage(event.target.value)}
                                        />
                                        <ValidationError
                                            prefix="Message"
                                            field="message"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="col-lg-2">
                                        <button type="submit" disabled={state.submitting} className={Styles.sendButton}>
                                            <i className={`far fa-paper-plane ${Styles.sendIcon}`}></i>
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
        </section >
    )
}

export default Mainsectioncontact
