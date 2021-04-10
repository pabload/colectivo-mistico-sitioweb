import React, { useState } from 'react'
import Styles from './postcontent.module.scss'
import Image from 'next/image'
const PostContent = ({ content }) => {
    const [enableLoadComments, setEnableLoadComments] = useState(true);
    const loadComments = () => {
        setEnableLoadComments(false)
            ; (window).disqus_config = function () {
                this.page.url = window.location.href
                this.page.identifier = post.slug
            }

        const script = document.createElement('script')
        script.src = "https://colectivo-mistico.disqus.com/embed.js";
        script.setAttribute('data-timestamp', Date.now().toString())

        document.body.appendChild(script)
    }
    return (
        <div className={`${Styles.mainContainer}`}>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-10">
                    <div className={Styles.postHeader}>
                        <h1 className='text-center'>  {content.title} </h1>
                        <Image
                            alt="mainimage"
                            src={content.feature_image ? content.feature_image : '/assets/artcard-image.svg'}
                            layout="intrinsic"
                            height={500}
                            width={900}
                        />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
                    {enableLoadComments && (
                        <div className="d-flex justify-content-center">
                            <div className={Styles.commentButton} onClick={loadComments}>
                                Ver comentarios
                        </div>
                        </div>
                    )}
                    <div id="disqus_thread"></div>
                </div>
            </div>
        </div>
    )
}

export default PostContent