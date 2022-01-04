import classes from './Container.module.css';

const Contariner = props => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

export default Contariner;