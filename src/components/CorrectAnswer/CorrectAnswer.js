import classes from './CorrectAnswer.module.css';

const CorrectAnswer = props => {
    return (
        <div className={classes.correct}>
            {props.name !== '' && 'Correct answer was '}
            <b>{props.name}</b>
        </div>
    )
}

export default CorrectAnswer;