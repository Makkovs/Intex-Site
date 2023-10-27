import { FC } from "react";

import styles from "./loading.module.scss";

interface LoadingProps {
    loading: boolean;
};

const Loading:FC<LoadingProps> = ({loading}) => {

    if (loading) {
        return (
            <div className={styles.loading__animation}></div>
        );
    };
};

export default Loading;