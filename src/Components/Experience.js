import React, { useContext } from "react";
import "../CSS/Experience.css";
import Technoweit from "../Images/technoweit.png";
import { ThemeContext } from "./ThemeContext";
const Experience = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="experience" id="Experience">
      <h2 className={`experience-heading ${theme}-mode`}>My Experience</h2>
      <div className="experience-container">
        <div className={`experience-box ${theme}-mode`}>
          <img src={Technoweit} alt="" />
          <h3>Full Stack Web Development</h3>
          <span>
            Highly skilled MERN Stack developer bringing 6 months of experience
            in designing and developing robust web applications. Proficient in
            front-end and back-end technologies, including React.js, Node.js,
            MongoDB, and Express.js. I am successfully completed my projects.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
