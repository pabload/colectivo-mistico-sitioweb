import React from 'react'
import Styles from './mainsectionarticles.module.scss'
import Image from 'next/image'
import readingTime from 'reading-time'
import Link from 'next/link'
const Articlecard = ({ mainarticle, postInfo }) => {
    return (
        <div className={`${Styles.articlecard} ${mainarticle ? Styles.mainarticle : null}`}>
            <div className={Styles.imageContainer}>
                <Link href="/post/[slug]" as={`/post/${postInfo.slug}`}>
                    <Image
                        alt="article-image"
                        src={postInfo.feature_image ? postInfo.feature_image : '/assets/svginfoabout.svg'}
                        layout="intrinsic"
                        width={870}
                        height={611}
                        className={Styles.articleImage}
                    />
                </Link>
            </div>
            <div className={Styles.articleInfo}>
                <h2>
                    <Link href="/post/[slug]" as={`/post/${postInfo.slug}`}>
                        <a className={Styles.articleTitle}>{postInfo.title}</a>
                    </Link>
                </h2>
                <p className={Styles.articleDescription}>
                    {postInfo.custom_excerpt ? postInfo.custom_excerpt : 'Articulo de Colectivo Místico'}
                </p>
                <div className="d-flex w-100 justify-content-around">
                    <span className={Styles.articleMeta}>{postInfo.created_at.split('T')[0]}</span>
                    <span className={Styles.articleMeta}> {postInfo.reading_time<1?'Menor de 1':postInfo.reading_time} min de lectura</span>
                </div>
            </div>
        </div>
    )
}

export default Articlecard
