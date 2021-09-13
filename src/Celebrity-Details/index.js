import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import axios from "axios";
import "./css/global.css";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CelebrityFullDetails from "./components/CelebrityDetails/index";

const CelebrityDetails = () => {
  const apiKey = "887a6e58ff55501bcfdc69a8db52ba7f";
  const [celebrityName, setCelebrityName] = useState("Tom Hiddleston");
  const [celebrityData, setCelebrityData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${celebrityName}&page=1&include_adult=false`
      )
      .then((res) => setCelebrityData(res.data.results))
      .catch((err) => console.log(err));
  }, [celebrityName, setCelebrityData]);
  return (
    <Router>
      <div className="celebrity_details_app">
        <Switch>
          <Route exact path="/celebrity">
            <Header setCelebrityName={setCelebrityName} />
            <Main celebrityData={celebrityData} />
          </Route>
          <Route path="/details">
            <CelebrityFullDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default CelebrityDetails;
