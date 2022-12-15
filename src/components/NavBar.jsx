import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css'
import { FaHome } from 'react-icons/fa'
 
function NavBar() {
 

  return (
    <div className={style.navbar}>
        <div className={style.div}><Link to='/'> <FaHome className={style.icon}/> </Link></div>
        <Link to='/about'> <button className={ style.btn} >  About Me </button>  </Link>
        <Link to='/exp'> <button className={style.btn} > Experience </button> </Link>
        <Link to='/proyects'> <button className={ style.btn }> Proyects </button> </Link>
        <Link to='/contact'> <button className={ style.btn } > Contact Me! </button> </Link>
    </div>
  );
}

export default NavBar;
