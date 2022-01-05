import classes from './Keyboard.module.css';

const Keyboard = props => {

    const handleClick = (e) => {
        if (e.target.tagName.toUpperCase() === 'BUTTON') {
            props.handleClick(e.target.textContent);

            e.target.classList.add(classes.clicked);
            setTimeout(() => {
                e.target.classList.remove(classes.clicked);
            }, 200);
        }
    }

    return (
        <div className={classes.keyboard} onClick={handleClick}>
            <div>
                <button>Q</button>
                <button>W</button>
                <button >E</button>
                <button >R</button>
                <button >T</button>
                <button >Z</button>
                <button >U</button>
                <button >I</button>
                <button >O</button>
                <button >P</button>
            </div>
            <div>
                <button >A</button>
                <button >S</button>
                <button >D</button>
                <button >F</button>
                <button >G</button>
                <button >H</button>
                <button >J</button>
                <button >K</button>
                <button >L</button>
            </div>
            <div>
                <button >Y</button>
                <button >X</button>
                <button >C</button>
                <button >V</button>
                <button >B</button>
                <button >N</button>
                <button >M</button>
                <button className="material-icons">
                    backspace
                </button>
            </div>
            <div>
                <button id={classes.space}>
                </button>
            </div>
        </div>

    )
}

export default Keyboard;