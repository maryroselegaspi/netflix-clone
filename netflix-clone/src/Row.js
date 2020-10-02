import React,{useState, useEffect} from 'react';
import './Row.css';
import axios from './axios';

function Row({title,fetchURL}) {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        // if [] run once when the row loads, and dont run again
        async function fetchData() {
            const request =  await axios.get(fetchURL);
            console.log("this is the request:", request);
            return request;
        }
        fetchData();

    },[]);
    return (
        <div>
            <h1>{title}</h1>
            {/* Title */}

            {/* Container => posters */}
            
        </div>
    )
}

export default Row
