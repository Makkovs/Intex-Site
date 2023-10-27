import { FC, useState } from "react";

import { createCompany } from "../../../http/companyAPI";

import Modal from "../../../components/UI/Modal/Modal";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";

import styles from "./add-company-modal.module.scss";

interface AddCompanyModalProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
};

const AddCompanyModal:FC<AddCompanyModalProps> = ({visible, setVisible}) => {
    
    const [name, setName] = useState<string>("");
    
    const addCompany = () => {
        createCompany(name);
        setVisible(false)
    }
    
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
                    margin={"5px 0px 0px 0px"}
                >
                    Додати
                </Button>
            </div>
        </Modal>
    );
};

export default AddCompanyModal;