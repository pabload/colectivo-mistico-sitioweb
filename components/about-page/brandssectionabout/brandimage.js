import Styles from './brandssection.module.scss'
import Image from 'next/image'
const Brandimage = ({ offset, href, src }) => {
    return (
        <div className={`col-lg-2 col-6 mb-2`}>
            <div className={Styles.brandImage}>
            <a href={href}   target="_blank">
                <Image
                    alt="location"
                    src={src} 
                    layout="responsive"
                    width={870}
                    height={811}
                    className={Styles.brandImage}
                />
            </a>
            </div>
        </div>
    )
}


export default Brandimage
