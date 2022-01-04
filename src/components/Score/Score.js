import classes from './Score.module.css';

const Score = ({index, score, skipped, limit }) => {
    return (
        <div className={classes.score}>
            <div className={classes.progres}>
                {index}/{limit}
            </div>
            <div className={classes.values}>
                <span>Correct: <b>{score}</b></span>
                <span>Skipped: <b>{skipped}</b></span>
            </div>
        </div>
    )
}

export default Score;