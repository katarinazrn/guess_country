import logo from '../../../logo.png';
import classes from './Logo.module.css';

const Logo=props=>{
    return(
        <img className={classes.logo} style={{width: props.width}} src={logo} alt='Flags of the world' />
    )
}

export default Logo;