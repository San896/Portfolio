import React from 'react';
import style from './Home.module.css'

function Home() {
    return (
        <div className={style.home}>
            <h1> Bienvenido/a a mi portfolio</h1>
            <h2> Soy Santiago Fernandez, Full Stack Web Developer Jr</h2>
            <h5> No cuentes los días, haz que los días cuenten.. </h5>
        </div>
    );
}

export default Home;