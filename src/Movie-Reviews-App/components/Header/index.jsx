import React, { useState } from "react";

const Header = ({ setMovieName }) => {
  const [inputData, setInputData] = useState("");
  const changeCountry = (e) => {
    e.preventDefault();
    setMovieName(inputData);
    setInputData("");
  };
  return (
    <div className="header_movie_review_app">
      <div className="search_container">
        <form onSubmit={changeCountry} autoComplete="off" noValidate>
          <input
            type="text"
            id="myInput"
            placeholder="Search Movie... ex: Inception"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
