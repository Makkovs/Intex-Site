import styles from "./merch-galery.module.scss";

const MerchGalery = () => {
    //It's going be bigger
    return (
        <div className={styles.galery}>
            <img
                className={styles.slide}
                src="../gray-img.png"
                alt=""
            />
        </div>
    );
};

export default MerchGalery;