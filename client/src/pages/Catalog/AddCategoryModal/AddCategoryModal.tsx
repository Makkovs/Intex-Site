import { FC, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { createCategory } from "../../../http/categoryAPI";

import Modal from "../../../components/UI/Modal/Modal";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";

import styles from "./add-category-modal.module.scss";

interface AddCategoryModalProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
};

const AddCategoryModal: FC<AddCategoryModalProps> = ({ visible, setVisible }) => {

    const [name, setName] = useState<string>("");
    const addCategoryToast = () => toast("Категорія додана");

    const addCategory = () => {
        createCategory(name.length > 0 ? name : `Без назви ${String(Date.now()).slice(-3)}`)
        .finally(() => addCategoryToast());
        setName("");
    };

    return (
        <Modal visible={visible} setVisible={setVisible}>
            <div className={styles.content}>
                <h2 className={styles.title}>Створення категорії</h2>
                <Input
                    type="text"
                    placeholder="Назва категорії"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Button
                    onClick={addCategory}
                    margin="5px 0px 0px 0px"
                >
                    Додати
                </Button>
            </div>
            <Toaster />
        </Modal>
    );
};

export default AddCategoryModal;