import React from "react";
import Landing from "../images/Landing.png";
import LandAthenas from "../images/LandAthenas.png";
 import style from "./Proyects.module.css";
 import { BsGithub } from "react-icons/bs";
 import { SiLinkedin } from "react-icons/si";
 import { RiGlobalFill, RiGlobalLine } from "react-icons/ri";


function Proyects() {
  return (
    <div>
      <h1 className={style.title}>Proyects  </h1>
      
      <div
      
        class="card mb-3"
        style={{
            display: "flex",
            width: "60rem",
          height: "14rem",
          position: "absolute",
          left: "12rem",
          top: "22rem",
          backgroundColor: "transparent",
          
        }}
        
        
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={LandAthenas}
              class="img-fluid rounded-start"
              alt="..."
              style={{ height: "13.9rem" }}
            />
          </div>
          
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Athenas APP
               <a href="https://github.com/MATarg81/proyecto-final"><BsGithub className={style.gh}/></a>
                <a href="https://proyecto-final-one-murex.vercel.app"><RiGlobalFill className={style.ln}/></a></h5>
              <p class="card-text">
                {" "}
                Single Page Aplication(SPA). Cuenta con un e-commerce integrado, pasarela de pagos de mercado pago, autenticacion de usuarios con Auth0, dashboard para el administrador y usuarios. Creacion y organizacion de productos, imagenes en Cloudinary, reviews de los productos entre muchas mas funcionalidades, etc.
              </p>
              <p class="card-text">
                <small class="text" style={{color: 'darkgrey'}}>
                  Tecnologias: SQL | JavaScript | NodeJs | Express | Sequelize |
                  React | Redux | CSS | Bootstrap  | Mercado Pago | Scrum | PostgreSQL {" "}
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
          width: "60rem",
          height: "11rem",
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
              style={{ height: "10.9rem" }}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Food App 
              <a href="https://github.com/San896/PIFood"><BsGithub className={style.gh}/></a>
                <a href="https://sansfoodapp.netlify.app/"><RiGlobalLine className={style.ln}/></a></h5>
              <p class="card-text">
                {" "}
                App sobre recetas de comida. Podes buscar varias recetas,
                ordenarlas y filtrarlas, tambien podes crear tus propias
                recetas.
              </p>
              <p class="card-text">
                <small class="text" style={{color: 'darkgrey'}}>
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
