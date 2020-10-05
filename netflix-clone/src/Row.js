import React,{useState, useEffect} from 'react';
import './Row.css';
import axios from './axios';

const base_url='https://image.tmdb/org/t/p/original/'
function Row({title,fetchURL}) {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        // if [] run once when the row loads, and dont run again
        async function fetchData() {
            const request =  await axios.get(fetchURL);
            console.log("this is the request:", request.data.results);
            setMovies();
            return request;
        }
        fetchData();

    },[fetchURL]);

    console.log(movies);
    return (
        <div className='row'>      
            <h1>{title}</h1>
            {/* Title */}
            <div className='row__posters'>
                {/* several row posters */}
                {movies.map(movie => (
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>

            {/* Container => posters */}
            
        </div>
    )
}

export default Row
