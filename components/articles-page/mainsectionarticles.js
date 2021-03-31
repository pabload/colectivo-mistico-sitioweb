import React, { useEffect } from 'react'
import Articlecard from './articlecard'
import Styles from './mainsectionarticles.module.scss'
import Pagination from './pagination'
const Mainsectionarticles = ({ posts,numPages,currentPage }) => {
    const getArticleCards = posts.map((post, index) => {
        if (index != 0) {
            return (
                <div key={index} className="col-lg-4   mb-2">
                    <Articlecard postInfo={post} />
                </div>
            );
        }
    })
    return (
        <main className={Styles.mainContainer}>
            <div className={`container w-100 `}>
                <div className="row mb-5 justify-content-center">
                    <div className="col-lg-12">
                        <Articlecard postInfo={posts[0]} mainarticle={true} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        getArticleCards
                    }
                </div>
            </div>
             <Pagination numPages={numPages} currentPage={currentPage} /> 
        </main>
    )
}

export default Mainsectionarticles
