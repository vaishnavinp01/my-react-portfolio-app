// import React, { useContext } from "react";
// import "../CSS/Home.css";
// import { Typewriter } from "react-simple-typewriter";
// import Vaishnavi_Resume from "../Images/Vaishnawi_Resume.pdf";
// import { ThemeContext } from "./ThemeContext";
// const Home = () => {
//   const { theme } = useContext(ThemeContext);
//   return (
//     <section className="home" id="Home">
//       <div className="home-content">
//         <h1>Hi, I'm Vaishnavi</h1>
//         <span>
//           <Typewriter
//             words={["Full Stack Web Developer", "MERN Stack Developer"]}
//             loop={false}
//             cursor
//             cursorStyle="|"
//             typeSpeed={70}
//             deleteSpeed={80}
//             delaySpeed={1000}
//           ></Typewriter>
//         </span>
//         <p>
//           I am Computer Science Student. I enjoy problem-solving and coding.
//           Always strive to bring 100% to the work I do. I have worked on
//           technologies like HTML, CSS, JavaScript, ExpressJs, ReactJs, MongoDB,
//           NodeJs.
//         </p>
//         <div className={`home-img ${theme}-mode`}></div>
//       </div>
//       <div className="home-part">
//         <a
//           href={Vaishnavi_Resume}
//           download="Vaishnawi_Resume"
//           target="_blank"
//           rel="noreferrer"
//           className="home-anchor"
//         >
//           <button className={`home-btn ${theme}-mode`}>Download Resume</button>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React, { useContext, useEffect, useState } from "react";
import "../CSS/Home.css";
import Vaishnawi_Pic from "../Images/Vaishnawi_Pic.png";
import Vaishnavi_Resume from "../Images/Vaishnawi_Resume.pdf";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { ThemeContext } from "./ThemeContext";
const Home = () => {
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
    <section className="home" id="Home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <span className="tagline">Welcome to my Portfolio</span> */}
            <h1>
              {`Hi I'm Vaishnavi`}
              <span
                className="txt-rotate"
                dataPeriod="1000"
                data-rotate='[ "Full Stack Developer","MERN Stack Developer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              I am Computer Science Student. I enjoy problem-solving and coding.
              Always strive to bring 100% to the work I do. I have worked on
              technologies like HTML, CSS, JavaScript, ExpressJs, ReactJs,
              MongoDB, NodeJs.
            </p>
            <a
              className={`home-btn ${theme}-mode`}
              href={Vaishnavi_Resume}
              download="Vaishnawi_Resume"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume <ArrowRightCircle size={25} />
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={Vaishnawi_Pic} alt="Vaishnawi_Pic" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
