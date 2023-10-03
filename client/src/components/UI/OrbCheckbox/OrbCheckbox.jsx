import classes from "./orb-checkbox.module.css";

const OrbCheckbox = ({text, ...props}) => {

    return (
        <label className={classes.container}>
            <input type="checkbox" {...props}/>
            {
                text && <span className={classes.text}>{text}</span>
            }
            <span className={classes.checkmark}></span>
        </label>
    );
};

export default OrbCheckbox;