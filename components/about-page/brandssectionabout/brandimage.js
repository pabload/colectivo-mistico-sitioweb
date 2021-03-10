import Styles from './brandssection.module.scss'
const Brandimage = ({offset,href,src}) => {
    return (
        <div className="col-lg-2 col-6 mb-2">
            <a href={href} target="_blank">
                <img className={Styles.brandImage} src={src} alt="location" />
            </a>
    </div>
    )
}


export default Brandimage
