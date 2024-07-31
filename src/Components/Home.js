import React, { useContext } from "react";
import "../CSS/Home.css";
import { Typewriter } from "react-simple-typewriter";
import Vaishnavi_Resume from "../Images/Vaishnawi_Resume.pdf";
import { ThemeContext } from "./ThemeContext";
const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="home" id="Home">
      <div className="home-content">
        <h1>Hi, I'm Vaishnavi</h1>
        <span>
          <Typewriter words={["Full Stack Web Developer", "MERN Stack Developer"]} loop={false} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={80} delaySpeed={1000}></Typewriter>
        </span>
        <p>
          I am Computer Science Student. I enjoy problem-solving and coding.
          Always strive to bring 100% to the work I do. I have worked on
          technologies like HTML, CSS, JavaScript, ExpressJs, ReactJs, MongoDB,
          NodeJs.
        </p>
        <a href={Vaishnavi_Resume} download="Vaishnawi_Resume" target="_blank" rel="noreferrer" className={`home-btn ${theme}-mode`}>
          Download Resume
        </a>
        <div className={`home-img ${theme}-mode`}></div>
      </div>
    </section>
  );
};

export default Home;
