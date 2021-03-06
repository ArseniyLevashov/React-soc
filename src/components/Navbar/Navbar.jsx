import React from 'react';
import s from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return <nav className={s.nav}>
    <div className={s.profile}>
      <img src="" className={s.avatar}></img>
    </div>

    <div className={s.item}>
      <NavLink to="/Profile" activeClassName={s.activeLink}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/Dialogs">Mesages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/News">News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/Music">Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/Settings">Settings</NavLink>
    </div>
    </nav>
}

export default Navbar;