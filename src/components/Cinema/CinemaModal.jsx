import React from 'react';
import { Popup } from '../styled/CinemaStyle';
import { AiOutlineCloseCircle, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiReservedLine } from "react-icons/ri";

const CinemaModal = ({ clickData, onClose }) => {
    const { imageURL, movieNm, openDt, infoTitle, info, screening, salesShare } = clickData

    return (
        <Popup>
            <div className='bg' onClick={onClose}></div>
            <div className='popup'>
                <div>
                    <h2>영화정보</h2>
                    <div>
                        {
                            screening === "now" ? <button>예매하기</button> : <em>상영이 종료되었습니다.</em>
                        }
                        <i onClick={onClose}><AiOutlineCloseCircle /></i>
                    </div>
                </div>
                <div className='movieInfo'>
                    <img src={imageURL} alt={movieNm} />
                    <div className='movieInfoText'>
                        <h3>{movieNm}</h3>
                        <ul>
                            <li><i><RiReservedLine /></i>예매율 {salesShare} %</li>
                            <li><i><AiOutlineFundProjectionScreen /> </i>개봉일 {openDt}</li>
                        </ul>
                        
                        <p><strong>{infoTitle}</strong>{info}</p>
                    </div>
                </div>
            </div>

        </Popup>
    );
};

export default CinemaModal;