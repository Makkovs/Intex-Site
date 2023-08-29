import classes from "./orb-checkbox.module.css";

const OrbCheckbox = ({text}) => {

    return (
        <label className={classes.container}>
            <input type="checkbox" />
            {
                text && <span className={classes.text}>{text}</span>
            }
            <span className={classes.checkmark}></span>
        </label>
    );
};

export default OrbCheckbox;