import React from "react";
import { Link } from "react-router-dom";
import style from './Exp.module.css'

function Exp(props) {
  return (
    <div>

<h1 className={style.title}> Experiencia</h1>
    
    <div class="card text-center" style={{display:'flex', width:'75vw', left:'9rem', top:'10rem', backgroundColor:'transparent' }}>
        

      

      <div class="card-body">

        <h5 class="card-title" >SoyHenry Bootcamp</h5>

        <div style={{color: 'darkgrey'}}>October 2021 - November 2022</div>
        <p class="card-text">
          Bootcamp intensivo, +800 hrs de practica y clases. Enfocado en
          desarrolo Web Full Stack. Tecnologias trabajadas : Javascript | SQL |
          React | Redux | HTML | Bootstrap | CSS | Node.js | Express | Sequelize
          | PostgreSQL | SQLite | Scrum | GIT - GIT-flow | Material UI UX.{" "}
          <br />
          Particiapacion en proyectos individuales y grupales. Te invito a que
          veas mis proyectos
        </p>

        {/* <a href="/proyects" class="btn btn-primary">
          Ver Proyectos
        </a> */}
        <Link to="/proyects" class="btn btn-dark"> Ver Proyectos </Link>
      </div>
    </div>
    </div>
  );
}

export default Exp;
