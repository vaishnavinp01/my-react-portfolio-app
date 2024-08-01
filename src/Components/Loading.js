import React from "react";
import { ClipLoader } from "react-spinners";
import "../CSS/Loading.css";
const Loading = () => {
  return (
    <div className="main-loading">
      <ClipLoader style={{ color: "#000", size: "26" }} />
      <div className="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
