import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchOneMerch } from "../../http/merchAPI";
import { fetchCharacteristic } from "../../http/characteristicAPI";
import { fetchOneCategory } from "../../http/categoryAPI";
import { fetchOneCompany } from "../../http/companyAPI";

import Loading from "../../components/UI/Loading/Loading";
import Button from "../../components/UI/Button/Button";
import Commentaries from "./Commentaries/Commentaries";
import MerchGalery from "./MerchGalery/MerchGalery";
import MerchInfo from "./MerchInfo/MerchInfo";

import styles from "./merch.module.scss";


const Merch = () => {

    const { id } = useParams();
    const [merch, setMerch] = useState({});
    const [merchCategory, setMerchCategory] = useState("");
    const [merchCompany, setMerchCompany] = useState("");
    const [characteristics, setCharacteristics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCharacteristic(id).then(data => {
            setCharacteristics(data.characteristics.rows);
        });

        fetchOneMerch(id).then(data => {
            setMerch(data.merch);
            data.merch.categoryId
                ? fetchOneCategory(data.merch.categoryId).then(dataCategory => setMerchCategory(dataCategory.category.name))
                : setMerchCategory("Не вказано");
            data.merch.companyId
                ? fetchOneCompany(data.merch.companyId).then(dataCompany => setMerchCompany(dataCompany.company.name))
                : setMerchCompany("Не вказано");
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
                                className={
                                    merch.status
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
                    <MerchInfo
                        characteristics={characteristics}
                        category={merchCategory}
                        company={merchCompany}
                    />
                    <div className={styles.informationBlock}>
                        <h3>Опис</h3>
                        <p className={styles.description}>
                            {merch.desc}
                        </p>
                    </div>
                    <Commentaries merchId={id} />
                </>
            }
        </main>
    );
};

export default Merch;