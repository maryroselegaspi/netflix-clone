import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./request.js";
import { Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoIcon from "@material-ui/icons/Info";

const base_url = "https://image.tmdb.org/t/p/original/"; // for image

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] =useState('');
  const [open, setOpen] =useState(false);

 


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

  // console.log("Banner fetch", movie);
  // console.log("path:", movie.backdrop_path);

  let bannerStyle = {
    backgroundSize: "cover",
    // backGroundImage: `("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
    backgroundPosition: "center center",
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {movie?.original_name || movie?.title || movie?.name}
        </h1>

        {/* description */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>

        {/* div 2 buttons */}
        <div className="banner__buttons">
          <button className="banner__buttonPlay">
            <PlayArrowIcon className="banner__buttonIcon" />
            Play
          </button>
          <button className="banner__buttonMoreInfo">
            <InfoIcon className="banner__buttonIcon" />
            More Info
          </button>
        </div>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
