import React, { useContext, useEffect, useState } from "react";
import "../CSS/Hero.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Vaishnawi_Pic from "../Images/Vaishnawi_Pic.png";
import Vaishnavi_Resume from "../Images/Vaishnawi_Resume.pdf";
import { ThemeContext } from "./ThemeContext";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Full Stack Developer", "MERN Stack Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="hero" id="Home">
      <div className="heropage">
        <div className="left-section">
          <h1 className="hero-heading">
            {`Hi I'm Vaishnavi`}
            <span
              className="txt-rotate"
              dataPeriod="1000"
              data-rotate='[ "Full Stack Developer","MERN Stack Developer" ]'
            >
              <span className="wrap_hero">{text}</span>
            </span>
          </h1>
          <p className="hero_p">
            I am Computer Science Student. I enjoy problem-solving and coding.
            Always strive to bring 100% to the work I do. I have worked on
            technologies like HTML, CSS, JavaScript, ExpressJs, ReactJs,
            MongoDB, NodeJs.
          </p>
          <a
            className={`hero-btn ${theme}-mode`}
            href={Vaishnavi_Resume}
            download="Vaishnawi_Resume"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume <ArrowRightCircle size={25} />
          </a>
        </div>
        <div className="right-section">
          <img className="hero_img" src={Vaishnawi_Pic} alt="Vaishnawi_Pic" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
