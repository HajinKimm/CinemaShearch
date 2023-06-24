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
                <strong>총 {data.length}개의 영화가 검색되었습니다.</strong>
                <div className="openingMovie">
                    <strong>개봉작 보기</strong>
                    <p className='switchBtnWrap'>
                        <input type="checkbox" />
                        <span className={`onoffSwitch ${switchBtn?'on':''}`} onClick={onSwitchBtn}></span>
                    </p>

                </div>
            </div>
        </CinemaMenuList>
    );
};

export default CinemaMenu;




