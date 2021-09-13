import React from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/celebrity">Celebrity</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
