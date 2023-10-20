import styles from "./content.module.scss";

const Content = () => {

    return (
        <article className={styles.content}>
            <p className={styles.row}>
                <img
                    className={[styles.image, styles.leftImage].join(" ")}
                    src="./gray-img.png"
                    alt="Lorem"
                />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem tempore dolores perspiciatis voluptates consequuntur,
                officia architecto ipsa ut laudantium quis nesciunt iure veniam debitis molestias optio. Totam, consequuntur sint.
                Optio?
            </p>
            <section className={styles.shedule}>
                <ul className={styles.sheduleRow}>
                    <h2>Понеділок-П'ятниця</h2>
                    <li>9:00 - 18:00</li>
                </ul>
                <ul className={styles.sheduleRow}>
                    <h2>Суббота-Неділя</h2>
                    <li>Вихідний</li>
                </ul>
            </section>
            <p className={styles.row}>
                <img
                    className={[styles.image, styles.rightImage].join(" ")}
                    src="./gray-img.png"
                    alt="Lorem"
                />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem tempore dolores perspiciatis voluptates consequuntur,
                officia architecto ipsa ut laudantium quis nesciunt iure veniam debitis molestias optio. Totam, consequuntur sint.
                Optio?
            </p>
            <section className={styles.row}>
                <iframe
                    className={styles.map}
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d679.401729837407!2d25.742824269643325!3d50.419291852728634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDI1JzA5LjUiTiAyNcKwNDQnMzYuNSJF!5e1!3m2!1suk!2sua!4v1692956210296!5m2!1suk!2sua"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </section>
        </article>
    );
};

export default Content;