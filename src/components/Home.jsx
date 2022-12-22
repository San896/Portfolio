import React from 'react';
import style from './Home.module.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className={style.home}>
            <h1 className={style.title }>Welcome </h1>
            <h1> Bienvenido/a a mi portfolio</h1>
            <h2> Soy Santiago Fernandez, Full Stack Web Developer Jr</h2>
            <h5> No cuentes los días, haz que los días cuenten.. </h5>
            <Link to= '/about'><button className={style.btn}> Continue <AiOutlineArrowRight/> </button></Link>
        </div>
    );
}

export default Home;