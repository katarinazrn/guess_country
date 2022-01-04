import StartButton from "../Start/StartButton";
import classes from './End.module.css';

const End = props => {
    return (
        <div className={classes.end}>
            <div>Your score: {props.score}/{props.limit}</div>
            <div>New Game? </div>
            <StartButton start={props.start} />
        </div>
    )
}

export default End;