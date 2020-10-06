import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./request.js";
import { fetchActionMovies } from "./request.js";
import Banner from "./Banner";

const APIKEY = "5a7c7a0a33463163ae0c76e66fa4029a";
function App() {
  return (
    <div className="app">
      {/* Nav */}
      {/* Banner */}
      <Banner />
      <Row
        title="Trending Now"
        fetchUrl={request.fetchTrending}
        isLargeRow={true}
      />
      <Row title="Originals" fetchUrl={request.fetchNetflixOriginal} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={request.fetchHOrrorMovies} />
      <Row
        title="Action Movies"
        fetchUrl={fetchActionMovies}
        isLargeRow={true}
      />
      {/* <Row
        title="Action Movies"
        fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=28`}
      /> */}
    </div>
  );
}

export default App;
