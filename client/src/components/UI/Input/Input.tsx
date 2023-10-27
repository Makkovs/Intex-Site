import { FC } from "react";

import styles from "./input.module.scss";

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input:FC<InputProps> = ({type, placeholder, value, onChange}) => {
    return (
        <input 
            className={styles.input} 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;