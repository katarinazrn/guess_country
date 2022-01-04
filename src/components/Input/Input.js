import { useState } from 'react';
import classes from './Input.module.css';

const Input = ({ guessed, name }) => {

    const [input, setInput] = useState('');

    const handleInput = e => {
        const value = e.target.value.toUpperCase();
        setInput(value);

        if (value === name.toUpperCase()) {
            setInput('');
            guessed();
        }
    }

    return (
        <input className={classes.input}
            placeholder='Country name...' type='text'
            value={input} onChange={handleInput} />
    )
}

export default Input;