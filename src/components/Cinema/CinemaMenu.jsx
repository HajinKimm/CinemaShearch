import React from 'react';
import { CinemaMenuList } from '../styled/CinemaStyle';

const CinemaMenu = ({screenMenu, onMenu, data}) => {
    return (
        <CinemaMenuList>
            <div>
                {screenMenu.map(item=><button key={item.id} className={item.isClass?'on':''} onClick={()=>onMenu(item.category)}>
                    {item.name}
                </button>)}
            </div>
            <div className='txt'> {data.length}개의 영화가 검색되었습니다.</div>
        </CinemaMenuList>
    );
};

export default CinemaMenu;




