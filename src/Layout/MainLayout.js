import React from "react";
import MyPortfolioNav from "./MyPortfolioNav";
import Home from "../Components/Home";
import Experience from "../Components/Experience";
import Project from "../Components/Project";
import Skill from "../Components/Skill";
import Education from "../Components/Education";
import Contact from "../Components/Contact";
import MyPortFooter from "../Components/MyPortFooter";
const MainLayout = () => {
  return (
    <div>
      <MyPortfolioNav />
      <div style={{ paddingTop: "50px" }}>
        <section id="Home"> <Home /> </section>
        <section id="Experience"> <Experience /> </section>
        <section id="Project"> <Project /> </section>
        <section id="Skill"> <Skill /> </section>
        <section id="Education"> <Education /> </section>
        <section id="Contact"> <Contact /> </section>
        <section id="Footer"> <MyPortFooter /> </section>
      </div>
    </div>
  );
};

export default MainLayout;
