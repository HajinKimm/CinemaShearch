import React from 'react';
import { CinemaItemBox } from '../styled/CinemaStyle';
import { useState } from 'react';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';

const CinemaItem = ({item}) => {
    const {Poster, Title, Type, Year, imdbID} = item

    const [data, setData] = useState([])
    const [loading,setloading] = useState(true)
    const [error, setError] = useState(null)
    return (
        <CinemaItemBox>
            <img src={Poster==='N/A'?'./images/imgNot.jpg':Poster} alt={Title} />
            <h2>{Title}</h2>
            <ul>
                <li>Premiere : {Year}</li>
                <li>Category : {Type}</li>
            </ul>
        </CinemaItemBox>
    );
};

export default CinemaItem;