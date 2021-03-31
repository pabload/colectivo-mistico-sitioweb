import React from 'react'
import Styles from './loading.module.scss'
function Loading() {
    return (
        <div className={Styles.mainContainer}>
            <div className={`${Styles.spinner}  spinner-border`} role="status">
                <span className="sr-only"></span>
            </div>
            <h2 className={Styles.text}>Cargando</h2>
        </div>
    )
}

export default Loading
