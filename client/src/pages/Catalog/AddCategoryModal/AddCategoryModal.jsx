import { useState } from "react";

import { createCategory } from "../../../http/categoryAPI";

import Modal from "../../../components/UI/Modal/Modal";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";

import styles from "./add-category-modal.module.css";

const AddCategoryModal = ({ visible, setVisible }) => {

    const [name, setName] = useState("");

    const addCategory = () => {
        createCategory(name);
        setVisible(false);
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
                    style={{ marginTop: "5px" }}
                >
                    Додати
                </Button>
            </div>
        </Modal>
    );
};

export default AddCategoryModal;