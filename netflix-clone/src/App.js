import React from 'react';
import './App.css';
import Row from './Row';
import request from './request.js';

function App() {
  return (
    <div className="app">
      <h1>Building netflix clone</h1>
      <Row title='Trending Now' fetchUrl={request.fetchTrending}/>
      <Row title="Originals"  fetchUrl={request.fetchNetflixOriginal}/>
    </div>
  );
}

export default App;
