import React from "react";
import foto from "../images/foto.png";
import create from "../images/create.png";
import home from "../images/home.png";
import Landing from "../images/Landing.png";
import style from './Proyects.module.css'


function Proyects() {
  return (
    <div className={style.divp}>
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
      style={{display:'flex', width:'25rem', height:'15rem', position:'absolute', left:'15rem', bottom:'9rem'}}
    >

      <div class="carousel-inner">

        <div class="carousel-item active" data-bs-interval="5000" style={{display:'flex'}}>
          <img
            src={Landing}
            style={{ display: "flex",width: "25rem", height: "15rem", borderRadius:'30px' }}
            alt="..."
          /> 
          {/* <h5>Titulos 1</h5>
          <h2> ajsdbnkjbjsdb</h2> */}
        </div>

        <div class="carousel-item" data-bs-interval="5000">
          <img
            src={home}
            style={{ display: "flex",width: "25rem", height: "15rem", borderRadius:'30px' }}
            alt="..."
          />
          {/* <h5>Titulos 2</h5>
          <h2> ajsdbnkjbjsdb</h2> */}
        </div>

        <div class="carousel-item">
          <img
            src={create}
            style={{ display: "flex",width: "25rem", height: "15rem", borderRadius:'30px' }}
            alt="..."
          />
                    {/* <h5>Titulos 3</h5>
          <h2> ajsdbnkjbjsdb</h2> */}
        </div>

      </div>
      
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div className={style.title}>
        <h2>Food App</h2>
    </div>
    </div>
  );
}

export default Proyects;
