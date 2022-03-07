import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Row.css';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

const Row = (props) => {
    console.log('Row rendered');

    const [movies, setMovies] = useState();

    useEffect(() => {
        
        // fetchData()가 비동기적으로 동작하도록 명시
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);

            setMovies(request.data.results);
            return request;
        }
        
        fetchData();
    }, []);

  return (
    <div className='row'>
        {/* title */}
        <h2>{props.title}</h2>
        <div className="row__posters">
                {/* 여러 장의 영화 포스터  */}

        </div>
    </div>
  )
}

export default Row