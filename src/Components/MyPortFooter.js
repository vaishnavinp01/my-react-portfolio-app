import React, { useContext } from "react";
import "../CSS/MyPortFooter.css";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-scroll";
import Resume from "../Images/online-resume.png";
import "../CSS/MyPortFooter.css";
import { ThemeContext } from "./ThemeContext";
const MyPortFooter = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="Footer" className={`footer ${theme}-mode`}>
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>
                <img src={Resume} alt="Resume" /> <span>Vaishnavi</span>
              </h3>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Menu</h5>
              <ul>
                <li>
                  <Link className={`footer-link ${theme}-mode`} to="Home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className={`footer-link ${theme}-mode`} to="Experience">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link className={`footer-link ${theme}-mode`} to="Project">
                    Project
                  </Link>
                </li>
                <li>
                  <Link className={`footer-link ${theme}-mode`} to="Skill">
                    Skill
                  </Link>
                </li>
                <li>
                  <Link className={`footer-link ${theme}-mode`} to="Education">
                    Education
                  </Link>
                </li>
                <li>
                  <Link className={`footer-link ${theme}-mode`} to="Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Contact Us</h5>
              <a className={`footer-anchor ${theme}-mode`}>
                <MdPhone className="footer-icon" /> +91 9874567346
              </a>
              <a className={`footer-anchor ${theme}-mode`}>
                <MdEmail className="footer-icon" /> vaishnavinp01@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="last-footer">
        <p>
          @{" "}
          <a
            href="https://www.technoweit.com/"
            rel="noreferrer"
            className="footer-techoweit"
          >
            Technoweit
          </a>{" "}
          {new Date().getFullYear()}. All right reserved. Designed by{" "}
          <u>Vaishnavi Patil.</u>
        </p>
      </div>
    </section>
  );
};

export default MyPortFooter;
