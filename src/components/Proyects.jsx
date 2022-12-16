import React from "react";
import foto from "../images/foto.png";

function Proyects() {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >

      <div class="carousel-inner">

        <div class="carousel-item active" data-bs-interval="5000">
          <img
            src={foto}
            style={{ display: "flex", width: "20rem", height: "20rem" }}
            alt="..."
          />
          <h5>Titulos 1</h5>
          <h2> ajsdbnkjbjsdb</h2>
        </div>

        <div class="carousel-item" data-bs-interval="5000">
          <img
            src={foto}
            style={{ display: "flex", width: "20rem", height: "20rem" }}
            alt="..."
          />
                    <h5>Titulos 2</h5>
          <h2> ajsdbnkjbjsdb</h2>
        </div>

        <div class="carousel-item">
          <img
            src={foto}
            style={{ display: "flex", width: "20rem", height: "20rem" }}
            alt="..."
          />
                    <h5>Titulos 3</h5>
          <h2> ajsdbnkjbjsdb</h2>
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
  );
}

export default Proyects;
