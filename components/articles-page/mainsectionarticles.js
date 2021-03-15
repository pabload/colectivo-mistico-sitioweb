import React from 'react'
import Articlecard from './articlecard'
import Styles from './mainsectionarticles.module.scss'
const Mainsectionarticles = () => {
    return (
        <main className={Styles.mainContainer}>
            <div className={`container w-100 `}>
                <div className="row mb-5 justify-content-center">
                    <div className="col-lg-12">
                    <Articlecard mainarticle={true} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4   mb-2">
                    <Articlecard />
                    </div>
                    <div className="col-lg-4  mb-2">
                    <Articlecard />
                    </div>
                    <div className="col-lg-4   mb-2">
                    <Articlecard />
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default Mainsectionarticles
