import React from 'react';
import style from './About.module.css'
import foto from '../images/foto.png'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function AboutMe() {
    return (
      <div>
        <h1 className={style.title}> Santiago Fernandez </h1>
      

<div class="card mb-3" style={{width: '90vw', border:'none', backgroundColor:'transparent', display: 'flex', position: 'absolute', left:'4rem', top:'25vh'}}>

<div class="row g-0">

  <div class="col-md-8">

    <div class="card-body">
      <h2 class="card-title">Sobre mi</h2>
      <p class="card-text">Mi nombre es Santiago, tengo 26 años, soy un Desarrolador Web Full Stack Jr. Me instrui en el bootcamp de SoyHenry, un curso intensivo con +800 hrs de practica y muchos proyectos.<br/>
          Como Full-Stack me desenvuelvo bien tanto en Front-End, Back-End como en manejo de Base de Datos, no tengo ninguna preferencia al momento de elegir. Soy bueno resolviendo problemas, encarando desafios nuevos, trabajando en equipo con metodologias agiles como SCRUM.<br/>
          Personalmente me encantan los animales, tengo como hobbies hacer ejercicio y jugar al futbol con amigos, me considero una persona paciente y con mucha resiliencia . Actualmente  estoy en busca de empleo IT, me ecnuentro trabajando en algunos proyectos, estudiando tecnologias nuevas y mejorando las aprendidas.</p>
      <p class="card-text"><small class="text" style={{color: 'darkgrey'}}> Full Stack Web Developer</small></p>
    </div>
    
  </div>
    <div class="col-md-4">
    <img src= { foto }  alt="..." style={{ height:'50vh', borderRadius:'999px'}}/>
  </div>
</div>
</div>
  <Link to= '/proyects'><button className={style.btn}> Proyectos <AiOutlineArrowRight/> </button></Link>
</div>
    );
}

export default AboutMe;