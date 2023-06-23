import React, { useState } from 'react';
import { CinemaMenuList } from '../styled/CinemaStyle';

const CinemaMenu = ({screenMenu, onMenu, data, switchBtn, onSwitchBtn}) => {
    
    return (
        <CinemaMenuList>
            <div>
                {screenMenu.map(item=><button key={item.id} className={item.isClass?'on':''} onClick={()=>onMenu(item.category)}>
                    {item.name}
                </button>)}
            </div>
            <div className='txt'> 
                <p className='switchBtnWrap'>
                    <input type="checkbox" />
                    <span className={`onoffSwitch ${switchBtn?'on':''}`} onClick={onSwitchBtn}></span>
                </p>
                <strong>개봉작만</strong>
                <strong>{data.length}개의 영화가 검색되었습니다.</strong>
            </div>
        </CinemaMenuList>
    );
};

export default CinemaMenu;




