// src/components/Footer.js
import React from "react";
import "../CSS/MyPortFooter.css";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const MyPortFooter = () => {
  return (
    <footer className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb__fotter-links_div">
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resource center</p>
            </a>
            <a href="/resource">
              <p>Testimonials</p>
            </a>
            <a href="/resource">
              <p>SSTV</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Partners</h4>
            <a href="/employer">
              <p>Swing Tech</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb__footer-link_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p>
                <FaFacebook />
              </p>
              <p>
                <BsTwitter />
              </p>
              <p>
                <BsLinkedin />
              </p>
              <p>
                <BsInstagram />
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyPortFooter;
