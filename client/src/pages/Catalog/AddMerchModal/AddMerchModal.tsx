import { FC, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { createCharacteristic, createMerch } from "../../../http/merchAPI";
import { ICategory, ICharacteristic, ICompany } from "../../../types/merchTypes";

import Modal from "../../../components/UI/Modal/Modal";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";

import styles from "./add-merch-modal.module.scss";


interface AddMerchModalProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    categories: ICategory[];
    companies: ICompany[];
};

const AddMerchModal: FC<AddMerchModalProps> = ({ visible, setVisible, categories, companies }) => {

    const [name, setName] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [status, setStatus] = useState<boolean>(true);
    const [files, setFiles] = useState<Array<File>>([]);

    const [companyId, setCompanyId] = useState<number | string>("");
    const [categoryId, setCategoryId] = useState<number | string>("");

    const [characteristics, setCharacteristics] = useState<ICharacteristic[]>([]);

    const addMerchToast = () => toast("Товар доданий");

    const convertToBoolean = (value: string) => value === "true"; //true / false 

    const addCharacteristic = () => {
        setCharacteristics([
            ...characteristics,
            { name: "", body: "", id: Date.now() }
        ]);
    };

    const removeCharacteristic = (id: number) => {
        setCharacteristics(characteristics.filter(
            (characteristic: ICharacteristic) => characteristic.id !== id)
        );
    };

    const changeCharacteristic = (id: number, key: string, value: any) => {
        setCharacteristics(characteristics.map(
            (characteristic: ICharacteristic) => characteristic.id === id
                ? { ...characteristic, [key]: value }
                : characteristic
        ));
    };

    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            if (!files.includes(e.target.files[0])){
                setFiles([...files, e.target.files[0]]);
            };
        };
    };

    const unSelectFile = (fileLastModified: number) => {
        setFiles(files.filter((file: File) => file.lastModified !== fileLastModified));
    };

    const addMerch = () => {
        const newCompanyId: number | null = companyId == "" ? null : Number(companyId);
        const newCategoryId: number | null = categoryId == "" ? null : Number(categoryId);
        createMerch(name.length > 0 ? name : `Без назви ${String(Date.now()).slice(-3)}`, desc, price, status, files, newCompanyId, newCategoryId).then(data =>
            characteristics.map((characteristics: ICharacteristic) =>
                createCharacteristic(characteristics.name, characteristics.body, data.merch.id)
            )
        ).finally(() => addMerchToast());
        setName("");
        setDesc("");
        setFiles([]);
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
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
                <select
                    className={styles.select}
                    value={String(status)}
                    onChange={(e) => setStatus(convertToBoolean(e.target.value))}
                >
                    <option value={String(true)}>В наявності</option>
                    <option value={String(false)}>Немає в наявності</option>
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
                Обрати зображення для товару:
                {files.map(file => 
                    <span className={styles.addedFile} key={file.name}>
                        Додано:
                        <span className={styles.fileName}>
                            {file.name}
                        </span> 
                        <span
                            className={styles.deleteButton}
                            onClick={() => unSelectFile(file.lastModified)}
                        >
                            X
                        </span>
                    </span>
                )}
                {files.length < 4 &&
                    <input type="file" onChange={selectFile} />
                }
                {characteristics.map((characteristic: ICharacteristic) =>
                    <div key={characteristic.id}>
                        <Input
                            type="text"
                            placeholder="Назва"
                            value={characteristic.name}
                            onChange={(e) => changeCharacteristic(characteristic.id, "name", e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Значення"
                            value={characteristic.body}
                            onChange={(e) => changeCharacteristic(characteristic.id, "body", e.target.value)}
                        />
                        <Button
                            onClick={() => removeCharacteristic(characteristic.id)}
                            margin={"10px 0px 0px 0px"}
                        >
                            Видалити
                        </Button>
                    </div>
                )}
                <Button
                    margin={"10px 0px 0px 0px"}
                    onClick={addCharacteristic}
                >
                    Додати характеристику
                </Button>
                <Button
                    onClick={addMerch}
                    margin={"10px 0px 0px 0px"}
                >
                    Створити товар
                </Button>
            </div>
            <Toaster />
        </Modal>
    );
};

export default AddMerchModal;