import "./content.css";

const Content = () => {

    return (
        <div className="content-sides">
            <article className="home-content">
                <p className="content__row">
                    <img className="content__img content__img--left" src="./gray-img.png" alt="Lorem" />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem tempore dolores perspiciatis voluptates consequuntur,
                    officia architecto ipsa ut laudantium quis nesciunt iure veniam debitis molestias optio. Totam, consequuntur sint.
                    Optio?
                </p>
                <section className="content__time">
                    <ul className="time__work">
                        <h2 className="time__title">Понеділок-П'ятниця</h2>
                        <li className="time__graph">9:00 - 18:00</li>
                    </ul>
                    <ul className="time__day-off">
                        <h2 className="time__title">Суббота-Неділя</h2>
                        <li className="time__graph">Вихідний</li>
                    </ul>
                </section>
                <p className="content__row">
                    <img className="content__img content__img--right" src="./gray-img.png" alt="Lorem" />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem tempore dolores perspiciatis voluptates consequuntur,
                    officia architecto ipsa ut laudantium quis nesciunt iure veniam debitis molestias optio. Totam, consequuntur sint.
                    Optio?
                </p>
                <section className="content__row">
                    <iframe
                        className="content__map"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d679.401729837407!2d25.742824269643325!3d50.419291852728634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDI1JzA5LjUiTiAyNcKwNDQnMzYuNSJF!5e1!3m2!1suk!2sua!4v1692956210296!5m2!1suk!2sua"
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </section>
            </article>
        </div>
    );
};

export default Content;