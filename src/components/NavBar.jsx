import React from "react";
//import { useState } from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css'
//import { FaHome } from 'react-icons/fa'
 
function NavBar() {
 

  return (
    <div className={style.navbar}>
      <Link to='/'><button className={ style.btn} > Bienvenido/a </button></Link>
        <Link to='/about'> <button className={ style.btn} >  Sobre Mi </button>  </Link>
        <Link to='/exp'> <button className={style.btn} > Experiencia </button> </Link>
        <Link to='/proyects'> <button className={ style.btn }> Proyectos </button> </Link>
        <Link to='/contact'> <button className={ style.btn } > Contactame ! </button> </Link>
    </div>
  );
}

export default NavBar;
