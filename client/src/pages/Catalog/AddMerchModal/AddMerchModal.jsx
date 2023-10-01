import { useState } from "react";

import { createCharacteristic, createMerch } from "../../../http/merchAPI";

import Button from "../../../components/UI/Button/Button";
import Modal from "../../../components/UI/Modal/Modal";
import Input from "../../../components/UI/Input/Input";

import styles from "./add-merch-modal.module.css";

const AddMerchModal = ({ visible, setVisible, categories, companies }) => {

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0);
    const [status, setStatus] = useState(true);
    const [companyId, setCompanyId] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [characteristics, setCharacteristics] = useState([]);

    const addMerch = () => {
        let newCompanyId = companyId == "" ? null : companyId;
        let newCategoryId = categoryId == "" ? null : categoryId;
        createMerch(name, desc, price, status, newCompanyId, newCategoryId).then(data => {
            characteristics.map(characteristic =>
                createCharacteristic(characteristic.name, characteristic.body, data.merch.id)
            );
            setVisible(false);
        });
    };

    const addCharacteristic = () => {
        setCharacteristics([...characteristics, { name: "", body: "", numberId: Date.now() }]);
    };

    const removeCharacteristic = (numberId) => {
        setCharacteristics(characteristics.filter(characteristic => characteristic.numberId !== numberId));
    };

    const changeCharacteristic = (numberId, key, value) => {
        setCharacteristics(characteristics.map(
            characteristic => characteristic.numberId === numberId
                ? { ...characteristic, [key]: value }
                : characteristic
        ));
    };

    return (
        <Modal visible={visible} setVisible={setVisible}>
            <div className={styles.content}>
                <h2 className={styles.title}>Створення товару</h2>
                <Input
                    type="text"
                    placeholder="Назва товару"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Опис товару"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <Input
                    type="number"
                    placeholder="Вартість"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <select
                    className={styles.select}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value={true}>В наявності</option>
                    <option value={false}>Немає в наявності</option>
                </select>
                <select
                    className={styles.select}
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                >
                    <option value="">Без категорії</option>
                    {categories.map(category =>
                        <option
                            value={category.id}
                            key={category.id}
                        >
                            {category.name}
                        </option>
                    )}
                </select>
                <select
                    className={styles.select}
                    value={companyId}
                    onChange={(e) => setCompanyId(e.target.value)}
                >
                    <option value="">Без компанії</option>
                    {companies.map(company =>
                        <option
                            value={company.id}
                            key={company.id}
                        >
                            {company.name}
                        </option>
                    )}
                </select>
                {characteristics.map(characteristic =>
                    <div key={characteristic.numberId}>
                        <Input
                            type="text"
                            placeholder="Назва"
                            value={characteristic.name}
                            onChange={(e) => changeCharacteristic(characteristic.numberId, "name", e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Значення"
                            value={characteristic.body}
                            onChange={(e) => changeCharacteristic(characteristic.numberId, "body", e.target.value)}
                        />
                        <Button
                            onClick={() => removeCharacteristic(characteristic.numberId)}
                            style={{ marginTop: "5px" }}
                        >
                            Видалити
                        </Button>
                    </div>
                )}
                <Button
                    style={{ marginTop: "5px" }}
                    onClick={addCharacteristic}
                >
                    Додати характеристику
                </Button>
                <Button
                    onClick={addMerch}
                    style={{ marginTop: "5px" }}
                >
                    Створити товар
                </Button>
            </div>
        </Modal>
    );
};

export default AddMerchModal;