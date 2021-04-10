import React, { useEffect, useState } from 'react'
import Styles from './productssectionindex.module.scss'
import AOS from 'aos'
import "aos/dist/aos.css";
import ReactCardCarousel from "react-card-carousel";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Image from 'next/image'
export const Productssectionindex = () => {
    const imageWidth = 500;
    const imageHeight = 650;
    const [isOpenGallery, SetIsOpenGallery] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(null);
    const [galleryType, setGalleryType] = useState('');
    const images = [
        `./assets/product${galleryType == 'candles' ? '1' : galleryType == 'accessories' ? '4' : galleryType == 'ceramics' ? '7' : galleryType == 'handcraft' ? '10' : '13'}-index.jpg`,
        `./assets/product${galleryType == 'candles' ? '2' : galleryType == 'accessories' ? '5' : galleryType == 'ceramics' ? '8' : galleryType == 'handcraft' ? '11' : '14'}-index.jpg`,
        `./assets/product${galleryType == 'candles' ? '3' : galleryType == 'accessories' ? '6' : galleryType == 'ceramics' ? '9' : galleryType == 'handcraft' ? '12' : '15'}-index.jpg`,

    ];
    const triggerModal = (type, number) => {
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
            <div className="container">
                <h1 className={Styles.mainTitle}>
                    Encuentra los mejores productos de emprendedores locales
                </h1>
                <div className={`row ${Styles.productContainer} `}>
                    <div data-aos="fade-right" className={`col-lg-6 d-flex flex-column justify-content-center align-items-center ${Styles.infoProductoContainer}`}>
                        <h2 className={Styles.productsTitle}>Velas aromáticas </h2>
                        <p className={Styles.productInfo}>
                            Elaboradas a mano con cera 100% de soya y libres de ftalatos
                        </p>
                    </div>
                    <div data-aos="fade-left" className="col-lg-6  d-flex justify-content-center align-items-center">
                        <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
                            <div onClick={() => { triggerModal('candles', 0) }} className={Styles.productImageContainer}>
                                <Image
                                    alt="candle-product"
                                    src="/assets/product1-index.jpg"
                                    layout="intrinsic"
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => { triggerModal('candles', 1) }} className={Styles.productImageContainer}>
                                <Image
                                    alt="candle-product"
                                    src="/assets/product2-index.jpg"
                                    layout="intrinsic"
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => { triggerModal('candles', 2) }} className={Styles.productImageContainer}>
                                <Image
                                    alt="candle-product"
                                    src="/assets/product3-index.jpg"
                                    layout="intrinsic"
                                    width={imageWidth}
                                    height={imageHeight}
                                />
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
                            <div onClick={() => { triggerModal('accessories', 0) }} className={Styles.productImageContainer}>
                                <Image
                                    alt="accessorie-product"
                                    src="/assets/product4-index.jpg"
                                    layout="intrinsic"
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => { triggerModal('accessories', 1) }} className={Styles.productImageContainer}>
                                <Image
                                    alt="accessorie-product"
                                    src="/assets/product5-index.jpg"
                                    layout="intrinsic"
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => { triggerModal('accessories', 2) }} className={Styles.productImageContainer}>
                                <Image
                                    alt="accessorie-product"
                                    src="/assets/product6-index.jpg"
                                    layout="intrinsic"
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                        </ReactCardCarousel>
                    </div>
                    <div data-aos="fade-left" className={`col-lg-6 order-lg-2 order-1 d-flex flex-column justify-content-center align-items-center ${Styles.infoProductoContainer}`}>
                        <h2 className={Styles.productsTitle}>Accesorios y joyería </h2>
                        <p className={Styles.productInfo}>
                            Encuentra una gran variedad de accesorios para todo tipo de evento
                        </p>
                    </div>
                </div>
                <div className={`row ${Styles.productContainer}`}>
                    <div data-aos="fade-right" className={`col-lg-6 d-flex flex-column justify-content-center align-items-center ${Styles.infoProductoContainer}`}>
                        <h2 className={Styles.productsTitle}>Cerámica</h2>
                        <p className={Styles.productInfo}>
                            Hermosos diseños de Macetas de cerámica artesanal hechas por los mejores talentos locales
                        </p>
                    </div>
                    <div data-aos="fade-left" className="col-lg-6 d-flex justify-content-center align-items-center">
                        <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
                            <div onClick={() => { triggerModal('ceramics', 0) }} className={Styles.productImageContainer}>
                                <Image
                                    alt="ceramic-product"
                                    src="/assets/product7-index.jpg"
                                    layout="intrinsic"
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => { triggerModal('ceramics', 1) }} className={Styles.productImageContainer}>
                                <Image
                                    alt="ceramic-product"
                                    src="/assets/product8-index.jpg"
                                    layout="intrinsic"
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => { triggerModal('ceramics', 2) }} className={Styles.productImageContainer}>
                                <Image
                                    alt="ceramic-product"
                                    src="/assets/product9-index.jpg"
                                    layout="intrinsic"
                                    width={imageWidth}
                                    height={imageHeight}
                                />
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
                            <div onClick={() => { triggerModal('handcraft', 0) }} className={Styles.productImageContainer}>
                                <Image
                                    alt="handcraft-product"
                                    src="/assets/product10-index.jpg"
                                    layout="intrinsic"
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => { triggerModal('handcraft', 1) }} className={Styles.productImageContainer}>
                                <Image
                                    alt="handcraft-product"
                                    src="/assets/product11-index.jpg"
                                    layout="intrinsic"
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => { triggerModal('handcraft', 2) }} className={Styles.productImageContainer}>
                                <Image
                                    alt="handcraft-product"
                                    src="/assets/product12-index.jpg"
                                    layout="intrinsic"
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                        </ReactCardCarousel>
                    </div>
                    <div data-aos="fade-left" className={`col-lg-6 order-lg-2 order-1 d-flex flex-column justify-content-center align-items-center ${Styles.infoProductoContainer}`}>
                        <h2 className={Styles.productsTitle}>Productos artesanales </h2>
                        <p className={Styles.productInfo}>
                            Desde cosméticos naturales , hasta piezas hechas y pintadas a mano
                           </p>
                    </div>
                </div>
                <div className={`row ${Styles.productContainer}`}>
                    <div data-aos="fade-right" className={`col-lg-6 d-flex flex-column justify-content-center align-items-center ${Styles.infoProductoContainer}`}>
                        <h2 className={Styles.productsTitle}>Snacks y alimentos </h2>
                        <p className={Styles.productInfo}>
                            Nutritivos, saludables  y deliciosos , hechos de manera orgánica
                        </p>
                    </div>
                    <div data-aos="fade-left" className="col-lg-6 d-flex justify-content-center align-items-center">
                        <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
                            <div onClick={() => { triggerModal('snacks', 0) }} className={Styles.productImageContainer}>
                                <Image
                                    alt="snack-product"
                                    src="/assets/product13-index.jpg"
                                    layout="intrinsic"
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => { triggerModal('snacks', 1) }} className={Styles.productImageContainer}>
                                <Image
                                    alt="snack-product"
                                    src="/assets/product14-index.jpg"
                                    layout="intrinsic"
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                            <div onClick={() => { triggerModal('snacks', 2) }} className={Styles.productImageContainer}>
                                <Image
                                    alt="snack-product"
                                    src="/assets/product15-index.jpg"
                                    layout="intrinsic"
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                                <div className={Styles.imagehoverContainer}>
                                    <div>Ver más</div>
                                </div>
                            </div>
                        </ReactCardCarousel>
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
