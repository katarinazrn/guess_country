import { Fragment } from "react";
import StartButton from "../Start/StartButton";
import Logo from "../UI/Logo/Logo";
import classes from './Landing.module.css';

const Landing = props => {
    return (
        <div>
            <Logo />
            <p className={classes.desc}>Guess the country by its flag</p>
            <StartButton start={props.start} />
        </div>
    )
}

export default Landing;