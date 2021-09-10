import React, { useEffect, useState } from "react";
import Slider from "infinite-react-carousel";
import axios from "axios";
const CelebrityFullDetails = () => {
  const img_300 = "https://image.tmdb.org/t/p/w300";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
  const noPicture =
    "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";
  const [actorFullDetails, setActorFullDetails] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const queryParams = new URLSearchParams(window.location.search);
  const actorId = queryParams.get("id");
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${actorId}?api_key=887a6e58ff55501bcfdc69a8db52ba7f&language=en-US`
      )
      .then((res) => setActorFullDetails(res.data))
      .catch((err) => console.log(err));
  }, [actorId, setActorFullDetails]);
  var dob = new Date(`${actorFullDetails.birthday}`);
  var month_diff = Date.now() - dob.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=887a6e58ff55501bcfdc69a8db52ba7f&language=en-US`
      )
      .then((res) => setMovieList(res.data))
      .catch((err) => console.log(err));
  }, [actorId, setMovieList]);
  console.log(movieList);
  movieList?.cast?.sort((a, b) => {
    return b.release_date?.slice(0, 4) - a.release_date?.slice(0, 4);
  });
  return (
    <div className="actor_full_details">
      <div className="left_section">
        {actorFullDetails.profile_path ? (
          <img
            src={`${img_300}${actorFullDetails.profile_path} `}
            alt={actorFullDetails.name}
          />
        ) : (
          <img src={unavailable} alt={actorFullDetails.name} />
        )}
        <h1>Personal Info</h1>
        {actorFullDetails.known_for_department && (
          <div className="details_item">
            <span>
              <b>Known For</b>
            </span>
            <p>{actorFullDetails.known_for_department}</p>
          </div>
        )}
        {actorFullDetails.birthday && (
          <div className="details_item">
            <span>
              <b>Birth Date</b>
            </span>
            <p>
              {actorFullDetails.birthday}({age} years)
            </p>
          </div>
        )}
        {actorFullDetails.place_of_birth && (
          <div className="details_item">
            <span>
              <b>Place of Birth</b>
            </span>
            <p>{actorFullDetails.place_of_birth}</p>
          </div>
        )}
        {actorFullDetails.also_known_as?.length > 1 && (
          <div className="details_item">
            <span>
              <b>Also Known As</b>
            </span>
            {actorFullDetails.also_known_as.map((name) => (
              <p key={name}>{name}</p>
            ))}
          </div>
        )}
      </div>
      <div className="right_section">
        <h1>{actorFullDetails.name}</h1>
        {actorFullDetails.biography && (
          <div>
            <span>
              <b>Biography</b>
            </span>
            <p>{actorFullDetails.biography}</p>
          </div>
        )}
        <h4>Known for</h4>
        <div className="movie_list">
          {movieList?.cast?.map((movie) => (
            <div className="movie" key={movie.title}>
              {movie.poster_path ? (
                <img src={`${img_300}${movie.poster_path}`} alt={movie.title} />
              ) : (
                <img src={noPicture} alt={movie.title} />
              )}
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
        <h4>Acting({movieList?.cast?.length})</h4>
        <div className="movie_details">
          {movieList?.cast?.map((details) => (
            <div className="each_cinema_details" key={details.id}>
              <div className="year">{details.release_date?.slice(0, 4)}</div>
              {details.poster_path ? (
                <img
                  src={`${img_300}${details.poster_path}`}
                  alt={details.id}
                  height="100px"
                />
              ) : (
                <img src={noPicture} alt={details.id} height="100px" />
              )}
              <p>
                <b>{details.original_title}</b>
              </p>
              {details.character && (
                <p className="character">as {details.character}</p>
              )}
            </div>
          ))}
        </div>
        {movieList?.crew?.length > 0 && (
          <>
            <h4>Production</h4>
            <div className="movie_details">
              {movieList?.crew?.map((details) => (
                <div className="each_cinema_details" key={details.id}>
                  <div className="year">
                    {details.release_date?.slice(0, 4)}
                  </div>
                  <p>
                    <b>{details.original_title}</b>
                  </p>
                  {details.job && <p className="character">as {details.job}</p>}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CelebrityFullDetails;
