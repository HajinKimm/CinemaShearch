import React from 'react';
import { CinemaItemBox } from '../styled/CinemaStyle';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';

const CinemaItem = ({ item, onLike, onOpen }) => {
    const { imageURL, movieNm, openDt, screening, movieCd, isLike, audiCnt, agelimit, salesShare } = item

    return (
        <CinemaItemBox >
            <img src={imageURL} alt={movieNm} onClick={() => onOpen(movieCd)} />
            <h2 onClick={() => onOpen(movieCd)}><img src={agelimit} alt="" />{movieNm}</h2>
            <ul>
                <li className='bar'>예매율 {salesShare} %</li>
                <li>개봉일 {openDt}</li>
            </ul>
            <ul>
                <li><i onClick={() => onLike(movieCd)}>{isLike ? <FcLike /> : <FcLikePlaceholder />}</i>{audiCnt}</li>
                <li className='btn'>
                    {
                        screening === "now" && <button className='screenNow' onClick={() => onOpen(movieCd)} >예매하기</button>
                    }
                    {
                        screening === "past" && <button  className='screenPast' onClick={() => onOpen(movieCd)} >상영종료</button>
                    }
                    {
                        screening === "future" && <button  className='screenFuture' onClick={() => onOpen(movieCd)} >상영예정</button>
                    }
                    <button onClick={() => onOpen(movieCd) } className='infoBtn'>영화정보</button>
                </li>
            </ul>
        </CinemaItemBox>
    );
};

export default CinemaItem;