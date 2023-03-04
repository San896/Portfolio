import React from "react";
import Landing from "../images/Landing.png";
import LandAthenas from "../images/LandAthenas.png";
import Wheather from '../images/wheather.png'
 import style from "./Proyects.module.css";
 import { BsGithub } from "react-icons/bs";
 //import { SiLinkedin } from "react-icons/si";
 import { RiGlobalFill, RiGlobalLine } from "react-icons/ri";


function Proyects() {
  return (
    <div>
      <h1 className={style.title}>Proyects  </h1>
      
      <div
      
        class="card mb-3"
        style={{
            display: "flex",
            width: "70rem",
          height: "13.5rem",
          position: "absolute",
          left: "10rem",
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
              style={{ height: "13.4rem" }}
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
          width: "70rem",
          height: "12rem",
          position: "absolute",
          left: "10rem",
          top: "8rem",
          backgroundColor: "transparent",
        }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={Landing}
              class="img-fluid rounded-start"
              alt="..."
              style={{ height: "11.9rem" }}
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




      <div
      
      class="card mb-3"
      style={{
          display: "flex",
          width: "70rem",
        height: "13.5rem",
        position: "absolute",
        left: "10rem",
        top: "37.8rem",
        backgroundColor: "transparent",
        
      }}
      
      
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={Wheather}
            class="img-fluid rounded-start"
            alt="..."
            style={{ height: "13.4rem" }}
          />
        </div>
        
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Athenas APP
             <a href="https://github.com/MATarg81/proyecto-final"><BsGithub className={style.gh}/></a>
              <a href="https://wheathersf.netlify.app/"><RiGlobalFill className={style.ln}/></a></h5>
            <p class="card-text">
              {" "}
              Single Page Aplication(SPA) sobre el clima, se puede buscar ciudades y ver sus pronosticos de su clima
            </p>
            <p class="card-text">
              <small class="text" style={{color: 'darkgrey'}}>
                Tecnologias:   JavaScript | React | CSS  {" "}
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
