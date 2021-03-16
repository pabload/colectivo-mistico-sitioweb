import React from 'react'
import Styles from './mainsectionarticles.module.scss'
import Image from 'next/image'
const Articlecard = ({ mainarticle }) => {
    return (
        <div className={`${Styles.articlecard} ${mainarticle ? Styles.mainarticle : null}`}>
            <div className={Styles.imageContainer}>
                <Image
                    alt="article-image"
                    src="https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg"
                    layout="intrinsic"
                    width={870}
                    height={811}
                    className={Styles.articleImage}
                />
            </div>
            <div className={Styles.articleInfo}>
                <h2 className={Styles.articleTitle}>Titulo del articulo</h2>
                <p className={Styles.articleDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem labore fuga dolorum tempora quas nesciunt accusantium
              </p>
                <div className="d-flex w-100 justify-content-around">
                    <span className={Styles.articleMeta}>Marzo 10, 2021</span>
                    <span className={Styles.articleMeta}>12 min de lectura</span>
                </div>
            </div>
        </div>
    )
}

export default Articlecard