import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./request.js";

function App() {
  return (
    <div className="app">
      <h1>Building netflix clone</h1>
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Originals" fetchUrl={request.fetchNetflixOriginal} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={request.fetchHOrrorMovies} />
    </div>
  );
}

export default App;
