import React from "react";
import { ClipLoader } from "react-spinners";
import "../CSS/Loading.css";

const Loading = () => {
  return (
    <div className="main-div">
      <ClipLoader style={{ color: "#000", size: "26" }} />
      <div className="loading">
        <div className="loading-bar1"></div>
        <div className="loading-bar2"></div>
        <div className="loading-bar3"></div>
        <div className="loading-bar4"></div>
        <div className="loading-bar5"></div>
        <div className="loading-bar6"></div>
        <div className="loading-bar7"></div>
        <div className="loading-bar8"></div>
        <div className="loading-bar9"></div>
        <div className="loading-bar10"></div>
        <div className="loading-bar11"></div>
        <div className="loading-bar12"></div>
      </div>
    </div>
  );
};

export default Loading;
