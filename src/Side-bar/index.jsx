import React from "react";
import { ArrowLeft } from "react-bootstrap-icons";

const SideBar = ({ leftContainer, changeSize }) => {
  return (
    <div
      className="left_container"
      style={{
        width: `${leftContainer.width}%`,
        height: "100vh",
        display: `${leftContainer.display}`,
      }}
    >
      <header>
        <h1>Surya Techs</h1>
        <button onClick={changeSize} className="button">
          <ArrowLeft color="#fff" size={25} className="" />
        </button>
      </header>
      <div className="items_list">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/movieReviewApp">Movie Review App</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
