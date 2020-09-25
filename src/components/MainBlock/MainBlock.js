import React from "react";
import "./MainBlock.scss";

const MainBlock = ({ att1, att2, children }) => (
  <div className="main__container">
    <h1> {children} </h1>
  </div>
);

export default MainBlock;
