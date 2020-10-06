import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./request.js";

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
      console.log(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
      // randomly select one
    }
    fetchData();
  }, []);
  return (
    <div className="banner">
      <header>
        {/* title */}
        {/* div 2 buttons */}
        {/* description */}
      </header>
    </div>
  );
}

export default Banner;
