import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import '../components/allmovie.css'
import Modal from './Modal';

const Allmovie = ({title,fetchUrl}) => {
    // 영화정보 객체 배열
    const [movies,setMovies] = useState([]);
    // 선택된 영화 정보
    const [movieSelect,setMovieSelect] = useState({});
    // 모달창 open,close 확인
    const [modalOpen,setModalOpen] = useState(false);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {
        const requests = await axios.get(fetchUrl);
        // console.log("여러개를 한방에", requests);
        setMovies(requests.data.results);
    }

    const handleClick = (movie) =>{
        // movie = item :클릭한 영화정보
        setMovieSelect(movie);
        setModalOpen(true);
    }
    
    // console.log("선택된 영화정보",movieSelect);


    return (
        <div className='allmovie'>
            <h2>{title}</h2>
            <div className="posters">
                {
                    movies.map((item)  =>
                        <div className='card' onClick={()=>handleClick(item)} >
                            <div className='imgbox'>
                                <img src = {`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title}/>
                            </div>
                            <p className='title'>{item.title ? item.title : item.name}</p>
                        </div>
                )
                }
            </div>
            {/* modalOpen == ture일때만 modal 보여짐 */}
            {
                // 참이면
                modalOpen && (
                    <Modal movieSelect={movieSelect} setModalOpen={setModalOpen}/>
                )
            }
        </div>
    );
};

export default Allmovie;