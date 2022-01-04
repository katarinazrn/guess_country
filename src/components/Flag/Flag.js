import classes from './Flag.module.css';

const Flag = ({url}) => {
    return (
        <div className={classes.flag}>
            <img src={url} alt='?' />
        </div>
    )
}

export default Flag;