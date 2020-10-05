// install axios
// 1. api key
// import axios from "axios";
// const instance = axios.create({
//   baseURL: `https://api.themoviedb.org/3`,
// });

// const baseURL: 'https://api.themoviedb.org/3';
const APIKEY = "5a7c7a0a33463163ae0c76e66fa4029a";

const movieRequest = {
  fetchTrending: `trending/allweek?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginal: `discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHOrrorMovies: `discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${APIKEY}&with_genres=99`,
};
export default movieRequest;

export const fetchTrending = `trending/allweek?api_key=${APIKEY}&language=en-US`;
export const fetchNetflixOriginal = `discover/tv?api_key=${APIKEY}&with_networks=213`;
export const fetchTopRated = `movie/top_rated?api_key=${APIKEY}&language=en-US`;
export const fetchActionMovies = `discover/movie?api_key=${APIKEY}&with_genres=28`;
export const fetchComedyMovies = `discover/movie?api_key=${APIKEY}&with_genres=35`;
export const fetchHOrrorMovies = `discover/movie?api_key=${APIKEY}&with_genres=27`;
export const fetchRomanceMovie = `discover/movie?api_key=${APIKEY}&with_genres=10749`;
export const fetchDocumentaries = `discover/movie?api_key=${APIKEY}&with_genres=99`;
