import React, { useState, useEffect } from "react";

import { useHistory } from "react-router";

const Main = ({ celebrityData }) => {
  const img_300 = "https://image.tmdb.org/t/p/w300";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
  const history = useHistory();

  return (
    <div className="main_container">
      {celebrityData?.map((actor) => (
        <div key={actor.id} className="celebrity_container">
          {actor.profile_path ? (
            <img src={`${img_300}${actor.profile_path} `} alt={actor.name} />
          ) : (
            <img src={unavailable} alt={actor.name} />
          )}
          <span>
            <b>{actor.name}</b>
          </span>
          <button
            onClick={() => {
              history.push(`/details/?id=${actor.id}`);
            }}
            className="view_more"
          >
            View More Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Main;
