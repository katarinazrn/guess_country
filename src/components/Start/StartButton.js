import classes from './Start.module.css';

const StartButton=props=>{

    return(
        <button className={classes.start} onClick={props.start}>
            START
        </button>
    )
}

export default StartButton;