import { FC, MouseEventHandler, PropsWithChildren } from "react";

import styles from "./button.module.scss";

interface ButtonProps extends PropsWithChildren {
    margin?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
};

const Button:FC<ButtonProps> = ({children, margin, onClick}) => {
    
    return (
        <div 
            className={styles.button} 
            onClick={onClick} 
            style={{margin: margin}}
        >
            {children}
        </div>
    );
};

export default Button;