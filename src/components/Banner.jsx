import React, { useEffect, useState } from 'react';
import "../components/Banner.css"
import axios from '../api/axios';
import requests from '../api/requests';
import styled from 'styled-components';

const Banner = () => {
    const [movie,setMovie]= useState([]);
    const [isClick,setIsClick] =useState(false);

    useEffect(()=>{
        fetchData();
    },[])

    // 현재 상영중인 영화 정보 가져옴
    const fetchData = async () =>{
        const movieData = await axios.get(requests.fetchNowPlaying);
        // console.log(movieData);
        setMovie(movieData.data.results);

        // 스무개의 영화 배열 데이터 중에서 영화 하나의 id를 랜덤하게 가져오기
        const movieId =  movieData.data.results[Math.floor(Math.random() * movieData.data.results.length)].id
        // console.log(movieId);

        // 랜덤한 id에 해당하는 영화정보 가져오기
        const {data:detail} = await axios.get(`movie/${movieId}`,{
            params : { append_to_response : "videos" }
        })
        // console.log(detail);
        setMovie(detail);
    }
    console.log("id에 대한 영화 정보",movie);

    if(!isClick){
        return (
            <div className='banner' style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`}}>
                <div className="content">
                    <div className="title">
                        <h2>{movie.title}</h2>
                    </div>
                    <div className='summery'>
                        <p>{movie.overview}</p>
                    </div>
                    <div className='btn_wrap'>
                        <button onClick={()=>{setIsClick(true)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.72453 3.96704C4.74704 3.77782 4.81337 3.59646 4.91827 3.43738C5.02316 3.2783 5.16372 3.14589 5.32877 3.05066C5.49382 2.95543 5.6788 2.90002 5.86903 2.88883C6.05925 2.87764 6.24946 2.91098 6.42453 2.98621C7.30953 3.36454 9.29286 4.26371 11.8095 5.71621C14.327 7.16954 16.0979 8.43871 16.867 9.01454C17.5237 9.50704 17.5254 10.4837 16.8679 10.9779C16.1062 11.5504 14.357 12.8029 11.8095 14.2745C9.25953 15.7462 7.29953 16.6345 6.42286 17.0079C5.66786 17.3304 4.82286 16.8412 4.72453 16.027C4.60953 15.0754 4.39453 12.9145 4.39453 9.9962C4.39453 7.07954 4.6087 4.91954 4.72453 3.96704Z" fill="#111111"/>
                            </svg>
                            재생
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.625 13.75V8.75H8.125V10H9.375V13.75H7.5V15H12.5V13.75H10.625ZM10 5C9.81458 5 9.63332 5.05498 9.47915 5.158C9.32498 5.26101 9.20482 5.40743 9.13386 5.57873C9.06291 5.75004 9.04434 5.93854 9.08051 6.1204C9.11669 6.30225 9.20598 6.4693 9.33709 6.60041C9.4682 6.73152 9.63525 6.82081 9.8171 6.85699C9.99896 6.89316 10.1875 6.87459 10.3588 6.80364C10.5301 6.73268 10.6765 6.61252 10.7795 6.45835C10.8825 6.30418 10.9375 6.12292 10.9375 5.9375C10.9375 5.68886 10.8387 5.4504 10.6629 5.27459C10.4871 5.09877 10.2486 5 10 5Z" fill="white"/>
                                <path d="M10 18.75C8.26942 18.75 6.57769 18.2368 5.13876 17.2754C3.69983 16.3139 2.57832 14.9473 1.91606 13.3485C1.25379 11.7496 1.08051 9.9903 1.41813 8.29296C1.75575 6.59563 2.58911 5.03653 3.81282 3.81282C5.03653 2.58911 6.59563 1.75575 8.29296 1.41813C9.9903 1.08051 11.7496 1.25379 13.3485 1.91606C14.9473 2.57832 16.3139 3.69983 17.2754 5.13876C18.2368 6.57769 18.75 8.26942 18.75 10C18.75 12.3206 17.8281 14.5462 16.1872 16.1872C14.5462 17.8281 12.3206 18.75 10 18.75ZM10 2.5C8.51664 2.5 7.0666 2.93987 5.83323 3.76398C4.59986 4.58809 3.63856 5.75943 3.07091 7.12988C2.50325 8.50032 2.35473 10.0083 2.64411 11.4632C2.9335 12.918 3.64781 14.2544 4.6967 15.3033C5.7456 16.3522 7.08197 17.0665 8.53683 17.3559C9.99168 17.6453 11.4997 17.4968 12.8701 16.9291C14.2406 16.3614 15.4119 15.4001 16.236 14.1668C17.0601 12.9334 17.5 11.4834 17.5 10C17.5 8.01088 16.7098 6.10323 15.3033 4.6967C13.8968 3.29018 11.9891 2.5 10 2.5Z" fill="white"/>
                            </svg>
                            상세 정보
                        </button>
                    </div>
                </div>
            </div>
        );
    }else{
        if(movie.videos.results.length === 0){
                window.alert('준비된 동영상이 없습니다 ˊ•̥ ̯ •̥`');
                return (
                    <div className='banner' style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`}}>
                        <div className="content">
                            <div className="title">
                                <h2>{movie.title}</h2>
                            </div>
                            <div className='summery'>
                                <p>{movie.overview}</p>
                            </div>
                            <div className='btn_wrap'>
                                <button onClick={()=>{setIsClick(true)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.72453 3.96704C4.74704 3.77782 4.81337 3.59646 4.91827 3.43738C5.02316 3.2783 5.16372 3.14589 5.32877 3.05066C5.49382 2.95543 5.6788 2.90002 5.86903 2.88883C6.05925 2.87764 6.24946 2.91098 6.42453 2.98621C7.30953 3.36454 9.29286 4.26371 11.8095 5.71621C14.327 7.16954 16.0979 8.43871 16.867 9.01454C17.5237 9.50704 17.5254 10.4837 16.8679 10.9779C16.1062 11.5504 14.357 12.8029 11.8095 14.2745C9.25953 15.7462 7.29953 16.6345 6.42286 17.0079C5.66786 17.3304 4.82286 16.8412 4.72453 16.027C4.60953 15.0754 4.39453 12.9145 4.39453 9.9962C4.39453 7.07954 4.6087 4.91954 4.72453 3.96704Z" fill="#111111"/>
                                    </svg>
                                    재생
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10.625 13.75V8.75H8.125V10H9.375V13.75H7.5V15H12.5V13.75H10.625ZM10 5C9.81458 5 9.63332 5.05498 9.47915 5.158C9.32498 5.26101 9.20482 5.40743 9.13386 5.57873C9.06291 5.75004 9.04434 5.93854 9.08051 6.1204C9.11669 6.30225 9.20598 6.4693 9.33709 6.60041C9.4682 6.73152 9.63525 6.82081 9.8171 6.85699C9.99896 6.89316 10.1875 6.87459 10.3588 6.80364C10.5301 6.73268 10.6765 6.61252 10.7795 6.45835C10.8825 6.30418 10.9375 6.12292 10.9375 5.9375C10.9375 5.68886 10.8387 5.4504 10.6629 5.27459C10.4871 5.09877 10.2486 5 10 5Z" fill="white"/>
                                        <path d="M10 18.75C8.26942 18.75 6.57769 18.2368 5.13876 17.2754C3.69983 16.3139 2.57832 14.9473 1.91606 13.3485C1.25379 11.7496 1.08051 9.9903 1.41813 8.29296C1.75575 6.59563 2.58911 5.03653 3.81282 3.81282C5.03653 2.58911 6.59563 1.75575 8.29296 1.41813C9.9903 1.08051 11.7496 1.25379 13.3485 1.91606C14.9473 2.57832 16.3139 3.69983 17.2754 5.13876C18.2368 6.57769 18.75 8.26942 18.75 10C18.75 12.3206 17.8281 14.5462 16.1872 16.1872C14.5462 17.8281 12.3206 18.75 10 18.75ZM10 2.5C8.51664 2.5 7.0666 2.93987 5.83323 3.76398C4.59986 4.58809 3.63856 5.75943 3.07091 7.12988C2.50325 8.50032 2.35473 10.0083 2.64411 11.4632C2.9335 12.918 3.64781 14.2544 4.6967 15.3033C5.7456 16.3522 7.08197 17.0665 8.53683 17.3559C9.99168 17.6453 11.4997 17.4968 12.8701 16.9291C14.2406 16.3614 15.4119 15.4001 16.236 14.1668C17.0601 12.9334 17.5 11.4834 17.5 10C17.5 8.01088 16.7098 6.10323 15.3033 4.6967C13.8968 3.29018 11.9891 2.5 10 2.5Z" fill="white"/>
                                    </svg>
                                    상세 정보
                                </button>
                            </div>
                        </div>
                    </div>
                );
        }else{
            return(
                <Container>
                    <Inner>
                        <Iframe>
                            <iframe
                            width="100%"
                            height="100%"
                            src= {`https://www.youtube.com/embed/${movie.videos.results[0].key}?autoplay=1&mute=1&loop=1&controls=0&playlist=${movie.videos.results[0].key}`}
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                            </iframe>
                        </Iframe>
                    </Inner>
                </Container>
            )
        }
    };
    
};

// 재생 버튼 클릭 시 나오는 영상 팝업 모달
const Container = styled.div`
    display : flex;
    justify-content: center;
    align-items : center;
    width : 100%; 
    height : 100vh; 
`
const Inner = styled.div`
    width : 100%;
    height : 100%;
`
const Iframe = styled.div`
    width : 100%;
    height : 100%;
`

export default Banner;