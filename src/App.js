import React, { useState } from "react";
import MovieReviewsApp from "./Movie-Reviews-App";
import { ArrowRight } from "react-bootstrap-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./Side-bar";

function App() {
  const [leftContainer, setLeftContainer] = useState({
    width: 20,
    display: "block",
  });
  const [rightContainer, setRightContainer] = useState(80);

  const changeSize = () => {
    setLeftContainer({ display: "none" });
    setRightContainer(100);
  };
  const changeToNormal = () => {
    setLeftContainer({ width: 20, display: "block" });
    setRightContainer(80);
  };
  return (
    <Router>
      <div className="App">
        <SideBar changeSize={changeSize} leftContainer={leftContainer} />
        <div
          className="right_container"
          style={{ width: `${rightContainer}%`, height: "100vh" }}
        >
          {rightContainer === 100 && (
            <button onClick={changeToNormal} className="buttonItem">
              <ArrowRight color="#fff" size={25} />
            </button>
          )}
          <Switch>
            <Route path="/movieReviewApp">
              <MovieReviewsApp />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
