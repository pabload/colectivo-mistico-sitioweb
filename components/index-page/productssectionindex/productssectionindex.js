import React, { useEffect, useState } from 'react'
import Styles from './productssectionindex.module.scss'
import AOS from 'aos'
import "aos/dist/aos.css";
import ReactCardCarousel from "react-card-carousel";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
export const Productssectionindex = () => {
    const [isOpenGallery, SetIsOpenGallery] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(null);
    const [galleryType, setGalleryType] = useState('');
    const images = [
        `./assets/product${galleryType=='jewelry'?'1':galleryType=='accessories'?'4':galleryType=='ceramics'?'7':'10'}-index.jpg`,
        `./assets/product${galleryType=='jewelry'?'2':galleryType=='accessories'?'5':galleryType=='ceramics'?'8':'11'}-index.jpg`,
        `./assets/product${galleryType=='jewelry'?'3':galleryType=='accessories'?'6':galleryType=='ceramics'?'9':'12'}-index.jpg`,

    ];
    const triggerModal = (type,number)=>{
        setGalleryType(type);
        setPhotoIndex(number)

    }
    useEffect(() => {
        if (photoIndex != null) {
            SetIsOpenGallery(true);
        }
    }, [photoIndex]);
    useEffect(() => {
        if (!isOpenGallery) {
            setPhotoIndex(null);
        }
    }, [isOpenGallery]);
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <section className={Styles.mainContainer}>
            <div className="container w-100 h-100">
                <h1 className={Styles.mainTitle}>Encuentra los mejores productos</h1>
                <div className={`row ${Styles.productContainer} `}>
                    <div data-aos="fade-right" className={`col-lg-6 d-flex flex-column justify-content-center align-items-center ${Styles.infoProductoContainer}`}>
                        <h2 className={Styles.productsTitle}>Joyeria</h2>
                        <p className={Styles.productInfo}>
                            Encuentra la mejor joyería de acero inoxidable
                        </p>
                    </div>
                    <div data-aos="fade-right" className="col-lg-6  d-flex justify-content-center align-items-center">
                        <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
                            <div onClick={() => { triggerModal('jewelry',0) }} className={Styles.productImageContainer}>
                                <img className={Styles.productImage} src="./assets/product1-index.jpg" alt="" />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => {triggerModal('jewelry',1)}} className={Styles.productImageContainer}>
                                <img className={Styles.productImage} src="./assets/product2-index.jpg" alt="" />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => {triggerModal('jewelry',2) }} className={Styles.productImageContainer}>
                                <img className={Styles.productImage} src="./assets/product3-index.jpg" alt="" />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                        </ReactCardCarousel>
                    </div>
                </div>
                <div className={`row ${Styles.productContainer}`}>
                    <div data-aos="fade-right" className="col-lg-6 order-lg-1 order-2   d-flex justify-content-center align-items-center">
                        <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
                            <div onClick={() => { triggerModal('accessories',0) }} className={Styles.productImageContainer}>
                                <img className={Styles.productImage} src="./assets/product4-index.jpg" alt="" />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => { triggerModal('accessories',1) }} className={Styles.productImageContainer}>
                                <img className={Styles.productImage} src="./assets/product5-index.jpg" alt="" />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => { triggerModal('accessories',2) }} className={Styles.productImageContainer}>
                                <img className={Styles.productImage} src="./assets/product6-index.jpg" alt="" />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                        </ReactCardCarousel>
                    </div>
                    <div data-aos="fade-left" className={`col-lg-6 order-lg-2 order-1 d-flex flex-column justify-content-center align-items-center ${Styles.infoProductoContainer}`}>
                        <h2 className={Styles.productsTitle}>Accesorios</h2>
                        <p className={Styles.productInfo}>
                            Encuentra una gran variedad de accesorios para todo tipo de evento
                        </p>
                    </div>
                </div>
                <div className={`row ${Styles.productContainer}`}>
                    <div data-aos="fade-right" className={`col-lg-6 d-flex flex-column justify-content-center align-items-center ${Styles.infoProductoContainer}`}>
                        <h2 className={Styles.productsTitle}>Cerámica</h2>
                        <p className={Styles.productInfo}>
                            Hermosos diseños de cerámica hechos por los mejores talentos locales
                        </p>
                    </div>
                    <div data-aos="fade-left" className="col-lg-6 d-flex justify-content-center align-items-center">
                        <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
                            <div onClick={() => { triggerModal('ceramics',0) }} className={Styles.productImageContainer}>
                                <img className={Styles.productImage} src="./assets/product7-index.jpg" alt="" />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => {  triggerModal('ceramics',1) }} className={Styles.productImageContainer}>
                                <img className={Styles.productImage} src="./assets/product8-index.jpg" alt="" />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => {  triggerModal('ceramics',2) }} className={Styles.productImageContainer}>
                                <img className={Styles.productImage} src="./assets/product9-index.jpg" alt="" />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                        </ReactCardCarousel>
                    </div>
                </div>
                <div className={`row ${Styles.productContainer}`}>
                    <div data-aos="fade-right" className="col-lg-6 order-lg-1 order-2 d-flex justify-content-center align-items-center">
                        <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
                            <div onClick={() => { triggerModal('handcraft',0) }} className={Styles.productImageContainer}>
                                <img className={Styles.productImage} src="./assets/product10-index.jpg" alt="" />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => { triggerModal('handcraft',1) }} className={Styles.productImageContainer}>
                                <img className={Styles.productImage} src="./assets/product11-index.jpg" alt="" />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => { triggerModal('handcraft',2) }} className={Styles.productImageContainer}>
                                <img className={Styles.productImage} src="./assets/product12-index.jpg" alt="" />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                        </ReactCardCarousel>
                    </div>
                    <div data-aos="fade-left" className={`col-lg-6 order-lg-2 order-1 d-flex flex-column justify-content-center align-items-center ${Styles.infoProductoContainer}`}>
                        <h2 className={Styles.productsTitle}>Productos artesanales </h2>
                        <p className={Styles.productInfo}>
                            Los mejores productos artesanales hechos con el sello mexicano
                           </p>
                    </div>
                </div>
                {isOpenGallery && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => SetIsOpenGallery(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}
            </div>
        </section>
    )
}
