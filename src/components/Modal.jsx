import React from 'react';
import '../components/Modal.css'

const Modal = ({movieSelect,setModalOpen}) => {

    return (
        <div className='modal'>
            <div className="modal_wrap"  style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movieSelect.backdrop_path}")`}}>
                <div className="content">
                    <span onClick={()=>setModalOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM16 28C9.4 28 4 22.6 4 16C4 9.4 9.4 4 16 4C22.6 4 28 9.4 28 16C28 22.6 22.6 28 16 28Z" fill="white"/>
                            <path d="M22.1071 22.2929C21.7166 22.6834 21.0834 22.6834 20.6929 22.2929L16 17.6L11.3071 22.2929C10.9166 22.6834 10.2834 22.6834 9.89289 22.2929L9.70711 22.1071C9.31658 21.7166 9.31658 21.0834 9.70711 20.6929L14.4 16L9.70711 11.3071C9.31658 10.9166 9.31658 10.2834 9.70711 9.89289L9.89289 9.70711C10.2834 9.31658 10.9166 9.31658 11.3071 9.70711L16 14.4L20.6929 9.70711C21.0834 9.31658 21.7166 9.31658 22.1071 9.70711L22.2929 9.89289C22.6834 10.2834 22.6834 10.9166 22.2929 11.3071L17.6 16L22.2929 20.6929C22.6834 21.0834 22.6834 21.7166 22.2929 22.1071L22.1071 22.2929Z" fill="white"/>
                        </svg>
                    </span>
                    <div className="title">
                        <h3>{movieSelect.title ? movieSelect.title : movieSelect.name}</h3>
                        <h4>{movieSelect.original_title}</h4>
                        <p>{movieSelect.overview}</p>
                    </div>
                    <div className='info_wrap'>
                        <ul className="info">
                            <li>개봉일 <span>{movieSelect.release_date? movieSelect.release_date : movieSelect.first_air_date}</span></li>
                            <li>총점 <span>{Math.floor(movieSelect.vote_average)}점</span></li> 
                            
                        </ul>
                        <ul className="info">
                            <li>인기순위 <span>{Math.floor(movieSelect.popularity)}위</span></li>
                            <li>득표수 <span>{movieSelect.vote_count}개</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;