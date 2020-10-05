import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
// import axios from "axios";
// const baseURL: "https://api.themoviedb.org/3/";

const APIKEY = "5a7c7a0a33463163ae0c76e66fa4029a"; //api_key

const base_url = "https://image.tmdb.org/t/p/original/"; // for image

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if [] run once when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(
        fetchUrl
        // "https://api.themoviedb.org/3/" + fetchURL
        // `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=28`
      );
      console.log("this is the request:", request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log("movies:", movies);
  return (
    <div className="row">
      <h1>{title}</h1>
      {/* Title */}
      <div className="row__posters">
        {/* several row posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />

          // (<p>{movie.original_title}</p>)
        ))}
      </div>

      {/* Container => posters */}
    </div>
  );
}

export default Row;
