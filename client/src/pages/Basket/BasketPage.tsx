import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IMerch } from "../../types/merchTypes";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getBasket, removeFromBasket } from "../../http/basketAPI";
import { AUTH_ROUTE, MERCH_PAGE_ROUTE, REACT_APP_API_URL } from "../../utils/consts";

import Button from "../../components/UI/Button/Button";

import styles from "./basket.module.scss";

const BasketPage: FC = () => {

    const navigate = useNavigate();
    const isAuth = useTypedSelector(state => state.userReducer.isAuth);
    
    const [basket, setBasket] = useState<IMerch[]>([]);

    useEffect(() => {
        if (!isAuth) {
            navigate(AUTH_ROUTE);
        };

        getBasket().then((data: any) => {
            setBasket(data.basket);
        });
    }, []);

    const removeMerch = (merchId: number) => {
        removeFromBasket(merchId);
        setBasket(basket.filter((merch: IMerch) => merch.id !== merchId));
    };

    return (
        <article className={styles.basket}>
            {basket.map((merch: IMerch) =>
                <section className={styles.basketItem} key={merch.id}>
                    <div className={styles.image}>
                        <img
                            src={
                                JSON.parse(String(merch.img))
                                    ?
                                    REACT_APP_API_URL + JSON.parse(merch.img ? merch.img : "")[0]
                                    :
                                    "./gray-img.png"
                            }
                            alt={`${merch?.name} img`}
                        />
                    </div>
                    <div className={styles.name}>
                        {merch?.name}
                    </div>
                    <div className={styles.price}>
                        {merch?.price}грн
                    </div>
                    <div className={styles.optionButtons}>
                        <Button>Замовити</Button>
                        <Button
                            margin="0px 5px 0px 5px"
                            onClick={() => removeMerch(merch.id)}
                        >
                            Видалити
                        </Button>
                        <Button onClick={() => navigate(MERCH_PAGE_ROUTE + `/${merch.id}`)}>Переглянути</Button>
                    </div>
                </section>
            )}
            <Button>Замовити все</Button>
        </article>
    );
};

export default BasketPage;