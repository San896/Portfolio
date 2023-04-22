import React from "react";
//import { useState } from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css'
//import { FaHome } from 'react-icons/fa'
 
function NavBar() {
 

  return (
    <div className={style.navbar}>
      <Link to='/'><button > Inicio </button></Link>
        <Link to='/about'> <button  >  Sobre Mi </button>  </Link>
        <Link to='/exp'> <button  > Experiencia </button> </Link>
        <Link to='/proyects'> <button > Proyectos </button> </Link>
        <Link to='/contact'> <button  > Contactame  </button> </Link>
    </div>
  );
}

export default NavBar;
