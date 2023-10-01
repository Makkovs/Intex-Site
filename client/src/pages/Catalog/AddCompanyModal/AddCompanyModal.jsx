import { useState } from "react";

import { createCompany } from "../../../http/companyAPI";

import Modal from "../../../components/UI/Modal/Modal";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";

import styles from "./add-company-modal.module.css";

const AddCompanyModal = ({ visible, setVisible }) => {

    const [name, setName] = useState("");

    const addCompany = () => {
        createCompany(name);
        setVisible(false);
    };

    return (
        <Modal visible={visible} setVisible={setVisible}>
            <div className={styles.content}>
                <h2 className={styles.title}>Створення компанії</h2>
                <Input
                    type="text"
                    placeholder="Назва компанії"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Button
                    onClick={addCompany}
                    style={{ marginTop: "5px" }}
                >
                    Додати
                </Button>
            </div>
        </Modal>
    );
};

export default AddCompanyModal;