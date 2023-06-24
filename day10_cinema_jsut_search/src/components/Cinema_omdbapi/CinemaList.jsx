import React from 'react';
import { CinemaListContent } from '../styled/CinemaStyle';
import CinemaItem from './CinemaItem';

const CinemaList = ({data}) => {
    return (
        <CinemaListContent>
            {
                data.map(item=><CinemaItem key={item.imdbID} item={item}/>)
            }
            
        </CinemaListContent>
    );
};

export default CinemaList;