import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./request.js";

const base_url = "https://image.tmdb.org/t/p/original/"; // for image

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      // console.log(
      //   "banner fetch",
      //   request.data.results[
      //     Math.floor(Math.random() * request.data.results.length - 1)
      //   ]
      // );

      return request;
      // randomly select one
    }
    fetchData();
  }, []);

  console.log("Banner fetch", movie);
  console.log("path:", movie.backdrop_path);
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backGroundImage: `('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        // backGroundImage: `url("${base_url}${movie.poster_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <header>
        <div className="banner__contents">
          {/* title */}
          <h1>{movie?.original_name || movie?.title || movie?.name}</h1>
          {/* div 2 buttons */}
          <div className="banner__buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          {/* description */}
        </div>
      </header>
    </div>
  );
}

export default Banner;
