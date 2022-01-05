import { Fragment, useEffect, useRef } from 'react';
import classes from './Input.module.css';
import correctSound from '../../correct.mp3';
import Keyboard from '../Keyboard/Keyboard';
import SkipButton from '../Skip/SkipButton';

const Input = ({ guessed, name, skip }) => {

    const input = useRef();
    var correct = new Audio(correctSound);

    const handleInput = e => {
        input.current.value = input.current.value.toUpperCase();
        check();
    }

    const check = () => {
        const value = input.current.value.toUpperCase();

        if (value === name.toUpperCase()) {
            correct.play();
            setTimeout(() => {
                input.current.value = '';
                guessed();
            }, 600);
        }
    }

    useEffect(() => {
        input.current.value = '';
    }, [name])

    const handleClick = e => {
        let newInput = input.current.value;
        if (e === '') {
            e = ' ';
        }
        if (e === 'backspace') {
            newInput = newInput.slice(0, newInput.length - 1);
        }
        else {
            newInput = newInput + e;
        }
        input.current.value = newInput;
        check();
    }

    return (
        <Fragment>
            <div className={classes.inputBig}>
                <input autoFocus className={classes.input}
                    placeholder='Country name...' type='text'
                    ref={input} onChange={handleInput} />
                <SkipButton skip={skip} />
            </div>
            <div className={classes.keyboard}>
                <div className={classes.in}>
                    <input autoFocus className={classes.input}
                        placeholder='Country name...' type='text'
                        ref={input} readOnly="true" />
                    <SkipButton skip={skip} />
                </div>
                <Keyboard handleClick={handleClick} />
            </div>
        </Fragment>
    )
}

export default Input;