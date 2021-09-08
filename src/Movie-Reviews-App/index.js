import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";
import "./css/global.css";

const MovieReviewsApp = () => {
  const [movieData, setMovieData] = useState([]);
  const [movieName, setMovieName] = useState("Inception");
  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${movieName}`,
      headers: {
        "x-rapidapi-host":
          "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        "x-rapidapi-key": "1713352826mshba671b873bd06a5p1f170ejsn44a9b1bed69c",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovieData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [movieName]);

  return (
    <div className="movie_reviews_app">
      <Header setMovieName={setMovieName} />
      <Main movieData={movieData} />
    </div>
  );
};

export default MovieReviewsApp;
