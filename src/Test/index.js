import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";
// let img_path = "https://image.tmdb.org/t/p/w300";

const Test = () => {
  const [userData, setUserData] = useState([]);
  console.log(userData);
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=887a6e58ff55501bcfdc69a8db52ba7f&language=en-US&query=money heist&page=1&include_adult=false&region=india`
    );
    setUserData(data);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  // console.log(userData[0].profile_path);
  return (
    <div className="person_data">
      {/* {userData?.map((user) => (
        <div className="container" key={user?.id}>
          <img src={`${img_path}${user?.profile_path}`} alt="" />
          <p>{user?.name}</p>
        </div>
      ))} */}
      test
    </div>
  );
};

export default Test;
