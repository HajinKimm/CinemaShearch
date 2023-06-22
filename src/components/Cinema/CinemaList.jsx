import React from 'react';
import { CinemaListContent } from '../styled/CinemaStyle';
import CinemaItem from './CinemaItem';

const CinemaList = ({data, onLike,onOpen}) => {
    return (
        <CinemaListContent>
            {
                data.map(item=><CinemaItem key={item.movieCd} item={item} onLike={onLike} onOpen={onOpen}/>)
            }
            
        </CinemaListContent>
    );
};

export default CinemaList;