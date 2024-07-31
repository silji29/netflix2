import axios from "axios";

const instance = axios.create({
    baseURL: 'http://api.themoviedb.org/3/',
    timeout: 1000,
    params: { // 주소 뒤에 붙는 애들
        api_key: 'ad6b728144703e756282ab8902677fb0', // api key
        language : 'ko-KR' // 한국어로 데이터 전달
    } 
});

export default instance;