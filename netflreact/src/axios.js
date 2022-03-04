// 실제로 설치한 axios 라이브러리를 import 하는 코드
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3', //tmdb api url

});

export default instance;

// if instance.get('/discover/tv?api_key=${API_KEY}&with_networks=213')
// -> https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213