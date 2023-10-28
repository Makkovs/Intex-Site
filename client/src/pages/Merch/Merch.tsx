import { FC, useEffect, useState } from "react";

import styles from "./merch.module.scss";
import { useParams } from "react-router-dom";
import { ICharacteristic, IMerch } from "../../types/merchTypes";
import { fetchCharacteristic, fetchOneMerch } from "../../http/merchAPI";
import { fetchOneCategory } from "../../http/categoryAPI";
import { fetchOneCompany } from "../../http/companyAPI";
import Loading from "../../components/UI/Loading/Loading";
import Button from "../../components/UI/Button/Button";
import MerchGalery from "./MerchGalery/MerchGalery";
import MerchInfo from "./MerchInfo/MerchInfo";
import Commentaries from "./Commentaries/Commentaries";
import { addToBasket } from "../../http/basketAPI";

const Merch: FC = () => {

    const { id } = useParams();

    const [merch, setMerch] = useState<IMerch>();
    const [merchCategory, setMerchCategory] = useState<string>("");
    const [merchCompany, setMerchCompany] = useState<string>("");

    const [characteristics, setCharacteristics] = useState<ICharacteristic[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchCharacteristic(Number(id)).then(data => {
            setCharacteristics(data.characteristics.rows);
        });

        fetchOneMerch(Number(id)).then(data => {
            setMerch(data.merch);
            data.merch.categoryId
                ? fetchOneCategory(data.merch.categoryId).then(
                    dataCategory => setMerchCategory(dataCategory.category.name)
                )
                : setMerchCategory("Не вказано");
            data.merch.companyId
                ? fetchOneCompany(data.merch.companyId).then(
                    dataCompany => setMerchCompany(dataCompany.company.name)
                )
                : setMerchCategory("Не вказано");
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
                        <MerchGalery 
                            img={merch!.img}
                        />
                        <div className={styles.generalInformation}>
                            <h1 className={styles.name}>
                                {merch?.name}
                            </h1>
                            <span
                                className={
                                    merch?.status
                                        ? styles.greenStatus
                                        : styles.redStatus
                                }
                            >
                                {merch?.status ? "В наявності" : "Немає в наявності"}
                            </span>
                            <h1 className={styles.price}>
                                {merch?.price}грн
                            </h1>
                            <Button onClick={() => addToBasket(merch?.id)}>
                                Додати у кошик
                            </Button>
                            <Button margin="0px 5px 0px 0px">
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
                            {merch?.desc}
                        </p>
                    </div>
                    <Commentaries merchId={Number(id)} />
                </>
            }
        </main>
    );
};

export default Merch;