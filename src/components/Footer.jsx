import React from 'react';
//import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { FiFileText } from 'react-icons/fi';
import style from './Footer.module.css'

function Footer(props) {
    return (
        
        <div className = {style.foot}>
            <a  href= 'https://www.linkedin.com/in/santiago-fernandez896/'>  < SiLinkedin className={style.links}/> </a>
            <a  href= 'https://github.com/San896'> < BsGithub className={style.links}/> </a>
            <a  href= 'https://cvsan.netlify.app' className={style.cv}>< FiFileText className={style.links}/> cv </a>
        </div>
        
    );
}

export default Footer;