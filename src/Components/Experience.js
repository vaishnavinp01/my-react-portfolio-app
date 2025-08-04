import React, { useContext } from "react";
import "../CSS/Experience.css";
import Technoweit from "../Images/technoweit.png";
import { ThemeContext } from "./ThemeContext";
const Experience = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="experience" id="Experience">
      <h2 className={`experience-heading ${theme}-mode`}>My Experience</h2>
      <div className="experience-card-container">
        <div className={`experience-content ${theme}-mode`}>
          <div className="experience-card">
            <img src={Technoweit} alt="Card" className="experience-card-image" />
            <div className="experience-card-content">
              <h2 className="experience-card-title">Full Stack Web Developer</h2>
              <p className="experience-card-description">
                Highly skilled MERN Stack developer bringing 6 months of
                experience in designing and developing robust web applications.
                Proficient in front-end and back-end technologies, including
                React.js, Node.js, MongoDB, and Express.js. I am successfully
                completed my projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
