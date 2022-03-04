import React, { useEffect, useState } from 'react';
import axios from '../axios'; // 우리가 만든 axios.js 파일을 import하는 코드
import requests from '../requests';
import './Banner.css'


const Banner = () => {
    const [movie, setMovie] = useState([]); // 초기 값 : 빈 배열

    // useEffect() hook
    useEffect(() => {
        // 화면이 초기에 렌더링 된 직후 한번 호출

        // API 서버에 데이터 요청하는 부분.
        // async, await
        async function fetchData(){

            // 비동기 요청으로 받아온 응답 데이터
            const request = await axios.get(requests.fetchNetflixOriginals);
            // console.log(request);

            const randomMovie = request.data.results[1];
            setMovie(randomMovie);
        }

        fetchData();
    }, []); 

    console.log(movie);

  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundPosition: "center center"
    }}>
        {/* Background image */}
        <div className="banner__contents">
            <h1 className="banner__title">Arcane</h1>
            
            {/* div.banner__buttons > div.banner__button*2 */}
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>

            {/* description */}
            <h1 className="banner__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consequatur ex, laudantium quam optio soluta!
            </h1>
        </div>
    </header>
  )
}

export default Banner