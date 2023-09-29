import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import {NavLink} from 'react-router-dom';
import nameRM from './images/nameR&M.png';
import RM from './images/RM.gif';

export default function Nav(props){

    const {onSearch} = props;



    return(
        <nav className={style.NavBar}>
            <div className={style.buttonsContainer}>
            <button className={style.button} ><NavLink className={style.navLink} to='/Home'>Home</NavLink></button>
            <button className={style.button} ><NavLink className={style.navLink} to='/about'>About</NavLink></button>
            <button className={style.button} ><NavLink className={style.navLink} to='/favorites'>Favorites</NavLink></button>
            <button className={style.button}  onClick={props.logout}>Logout</button>
            </div>
            <img className={style.nameRM} src={nameRM}></img>
            <img className={style.RM} src={RM}></img>
            <SearchBar className={style.searchBar} onSearch={onSearch} />
        </nav>
    )
}