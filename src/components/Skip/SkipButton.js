import classes from './Skip.module.css';

const SkipButton = props => {
    return (
        <button className={classes.skip} onClick={props.skip}>
            skip
        </button>
    )
}

export default SkipButton;