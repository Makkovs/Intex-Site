import classes from "./loading.module.css";

const Loading = (props) => {

    if (props.loading) {
        return (
            <div className={classes.loading__animation}></div>
        );
    };
};

export default Loading;