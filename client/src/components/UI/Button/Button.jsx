import styles from "./button.module.css";

const Button = ({children, ...props}) => {
    
    return (
        <div className={styles.button} {...props}>
            {children}
        </div>
    );
};

export default Button;