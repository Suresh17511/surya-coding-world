import React from "react";

const Main = ({ movieData }) => {
  console.log(movieData);
  return (
    <div className="main_container">
      <div className="display_movie_content">
        <img src={movieData.poster} alt="" />
        <b>{movieData.title}</b>
        <b>{movieData.year}</b>
        <div className="cinema_plot">
          <span>{movieData.plot}</span>
        </div>
        <span>IDMB Rating: {movieData.rating}/10</span>
        <div className="cast">
          <div className="cast_header">
            <b>Cast </b>
          </div>
          <div className="cast_details">
            {movieData?.cast?.map((cast) => (
              <span key={cast.actor_id}>{cast.actor}</span>
            ))}
          </div>
        </div>
        <div>
          <a href={movieData?.trailer?.link}>
            <b>Watch Trailer on IDMD</b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
