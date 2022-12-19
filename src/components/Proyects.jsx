import React from "react";
import Landing from "../images/Landing.png";
import LandAthenas from "../images/LandAthenas.png";
 import style from "./Proyects.module.css";
 import { BsGithub } from "react-icons/bs";
 import { SiLinkedin } from "react-icons/si";


function Proyects() {
  return (
    <div>
      <h1 className={style.title}>Proyects  </h1>
      
      <div
      
        class="card mb-3"
        style={{
            display: "flex",
            width: "50rem",
          height: "10rem",
          position: "absolute",
          left: "12rem",
          top: "25rem",
          backgroundColor: "transparent",
          
        }}
        
        
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={LandAthenas}
              class="img-fluid rounded-start"
              alt="..."
              style={{ height: "9.9rem" }}
            />
          </div>
          
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Athenas APP
               <a href=""><BsGithub className={style.gh}/></a>
                <a href=""><SiLinkedin className={style.ln}/></a></h5>
              <p class="card-text">
                {" "}
                App sobre recetas de comida. Podes buscar varias recetas,
                ordenarlas y filtrarlas, tambien podes crear tus propias
                recetas.
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Tecnologias: SQL | JavaScript | NodeJs | Express | Sequelize |
                  React | Redux | CSS{" "}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>


      


      <div
        class="card mb-3"
        style={{
          display: "flex",
          width: "50rem",
          height: "10rem",
          position: "absolute",
          left: "12rem",
          top: "10rem",
          backgroundColor: "transparent",
        }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={Landing}
              class="img-fluid rounded-start"
              alt="..."
              style={{ height: "9.9rem" }}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Food App 
              <a href=""><BsGithub className={style.gh}/></a>
                <a href=""><SiLinkedin className={style.ln}/></a></h5>
              <p class="card-text">
                {" "}
                App sobre recetas de comida. Podes buscar varias recetas,
                ordenarlas y filtrarlas, tambien podes crear tus propias
                recetas.
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Tecnologias: SQL | JavaScript | NodeJs | Express | Sequelize |
                  React | Redux | CSS{" "}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
