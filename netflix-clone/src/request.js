// install axios
// 1. api key

const APIKEY ='5a7c7a0a33463163ae0c76e66fa4029a' ;

const request ={
    fetchTrending=`/trending/allweek?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginal=`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover.movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `/discover.movie?api_key=${APIKEY}&with_genres=35`,
    fetchHOrrorMovies: `/discover.movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies: `/discover.movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `/discover.movie?api_key=${APIKEY}&with_genres=99`,

}
export default request;