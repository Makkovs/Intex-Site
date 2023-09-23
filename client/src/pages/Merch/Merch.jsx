import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchOneMerch } from "../../http/merchAPI";

import Loading from "../../components/UI/Loading/Loading";
import Button from "../../components/UI/Button/Button";
import Commentaries from "./Commentaries/Commentaries";
import MerchGalery from "./MerchGalery/MerchGalery";
import MerchInfo from "./MerchInfo/MerchInfo";

import styles from "./merch.module.css";

const Merch = () => {

    const { id } = useParams();
    const [merch, setMerch] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOneMerch(id).then(data => {
            setMerch(data.merch);
        }).finally(() => setLoading(false));
    }, []);

    return (
        <main className={styles.content}>
            {loading
                ?
                <Loading loading={loading} />
                :
                <>
                    <div className={styles.information}>
                        <MerchGalery />
                        <div className={styles.generalInformation}>
                            <h1 className={styles.name}>
                                {merch.name}
                            </h1>
                            <span
                                className={merch.status
                                    ? styles.greenStatus
                                    : styles.redStatus
                                }
                            >
                                {merch.status ? "В наявності" : "Немає в наявності"}
                            </span>
                            <h1 className={styles.price}>
                                {merch.price}грн
                            </h1>
                            <Button>
                                Додати у кошик
                            </Button>
                            <Button style={{ marginLeft: "5px" }}>
                                Замовити
                            </Button>
                        </div>
                    </div>
                    <MerchInfo />
                    <div className={styles.informationBlock}>
                        <h3>Опис</h3>
                        <p className={styles.description}>
                            {merch.desc}
                        </p>
                    </div>
                    <Commentaries merchId={id}/>
                </>
            }
        </main>
    );
};

export default Merch;