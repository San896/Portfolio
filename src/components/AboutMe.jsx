import React from 'react';
import style from './About.module.css'
import foto from '../images/foto.png'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function AboutMe() {
    return (
      <div>
        <h1 className={style.title}> Santiago Fernandez </h1>
      

<div class="card mb-3" style={{width: '80rem', backgroundColor:'transparent', display: 'flex', position: 'absolute', left:'9rem', top:'10rem'}}>

<div class="row g-0">

  <div class="col-md-8">

    <div class="card-body">
      <h2 class="card-title">Sobre mi</h2>
      <p class="card-text">Mi nombre es Santiago, tengo 26 años, soy un Desarrolador Web Full Stack Jr. Me instrui en el bootcamp de SoyHenry, un curso intensivo con +800 hrs de practica y muchos proyectos. Me encanto la programacion y es a lo que me quiero dedicar.<br/>
          Como Full-Stack me desenvuelvo bien tanto en Front-End, Back-End como en manejo de Base de Datos, no tengo ninguna preferencia al momento de elegir. Soy bueno resolviendo problemas, encarando desafios nuevos, trabajando en equipo con metodologias agiles como SCRUM. Me encantan los animales, tengo como hobbies hacer ejercicio y jugar al futbol con amigos, me considero una persona paciente y con mucha resiliencia . Actualmente me ecnuentro trabajando en algunos proyectos, estudiando tecnologias nuevas y mejorando las aprendidas. Estoy en busca de empleo IT, preferentemente remoto pero escucho cualquier oferta.</p>
      <p class="card-text"><small class="text" style={{color: 'grey'}}> Full Stack Web Developer</small></p>
    </div>
    
  </div>
    <div class="col-md-4">
    <img src= { foto }  alt="..." style={{width:'20rem', height:'20rem', borderRadius:'999px'}}/>
  </div>
</div>
</div>
  <Link to= '/exp'><button className={style.btn}> continuar <AiOutlineArrowRight/> </button></Link>
</div>
    );
}

export default AboutMe;