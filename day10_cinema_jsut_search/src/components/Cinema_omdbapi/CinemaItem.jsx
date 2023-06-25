import React from 'react';
import { CinemaItemBox } from '../styled/CinemaStyle';

const CinemaItem = ({item}) => {
    const {Poster, Title, Type, Year, imdbID} = item
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