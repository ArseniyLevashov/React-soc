import React from 'react';
import s from "./Header.module.css";

const Header = () =>{
    return <header className={s.header}>
    <div className={s.lk_container}>
    <img src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"></img>
    <a href="#">Learn React</a>
    <a href="https://reactjs.org/">Home</a>
    <a href="https://github.com/ArseniyLevashov">My Github</a>
    </div>
  </header>
}

export default Header;
