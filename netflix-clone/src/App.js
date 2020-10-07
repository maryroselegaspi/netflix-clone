import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request.js";
// import { fetchActionMovies } from "./request.js";
import Banner from "./Banner";

const APIKEY = "5a7c7a0a33463163ae0c76e66fa4029a";
function App() {
  return (
    <div className="app">
      {/* Nav */}
      {/* Banner */}
      <Banner />
      {/* <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      /> */}
      <Row
        title="Originals"
        fetchUrl={requests.fetchNetflixOriginal}
        isLargeRow={true}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHOrrorMovies} />
      {/* <Row
        title="Action Movies"
        fetchUrl={fetchActionMovies}
        isLargeRow={true}
      /> */}
      {/* <Row
        title="Action Movies"
        fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=28`}
      /> */}
    </div>
  );
}

export default App;
