import { useEffect, useRef } from 'react';
import classes from './Input.module.css';
import correctSound from '../../correct.mp3';

const Input = ({ guessed, name }) => {

    const input = useRef();
    var correct = new Audio(correctSound);

    const handleInput = e => {

        input.current.value = input.current.value.toUpperCase()
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

    return (
        <input
            autoFocus="autofocus"
            className={classes.input}
            placeholder='Country name...' type='text'
            ref={input}
            onChange={handleInput} />
    )
}

export default Input;