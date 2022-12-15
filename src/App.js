import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Proyects from "./components/Proyects";
import style from './App.css'

import { Routes, Route } from "react-router-dom";
import Exp from "./components/Exp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={style.app}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/exp" element={<Exp />} />
        <Route exact path="/proyects" element={<Proyects />} />
        <Route exact path="/about" element={<AboutMe />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
