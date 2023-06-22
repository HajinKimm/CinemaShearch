import React from 'react';
import { Container } from '../styled/CinemaStyle';
import CinemaForm from './CinemaForm';
import CinemaList from './CinemaList';
import { useState } from 'react';
import CinemaModal from './CinemaModal';
import CinemaMenu from './CinemaMenu';
import { useAxios } from '../hook/useAxios';

const screenMenus = [
    {id:1, category:'all', name:'전체', isClass:true},
    {id:2, category:'now', name:'상영중', isClass:false},
    {id:3, category:'pass', name:'상영종료', isClass:false},
]

const Cinema = () => {
    //데이터
    const { dataList, data,setData, loading, error} = useAxios('https://gist.githubusercontent.com/HajinKimm/99ff7a390542503799071196e19ae5c8/raw/8777331c0ee5c8ae4658a3704decee5d0d3a466f/Cinema')
    const [title, setTitle] =useState('all')
    const [clickData, setClickData] = useState(data[0])
    const [isOpen, setIsOpen] = useState(false)
    const [screenMenu, setScreenMenu] =useState(screenMenus)

    //검색함수
    const onSearch =(txt)=>{
        setData(dataList.filter(item=>item.movieNm.toLowerCase().includes(txt.toLowerCase())))
        if(title !== 'all'){
            onMenu('all')
        }
    }

    const onLike=(movieCd)=>{
        setData(data.map(item=>item.movieCd===movieCd?{...item, isLike:!item.isLike, audiCnt:item.isLike?item.audiCnt-1:item.audiCnt+1}:item))
    }
    //1000단위k
    const formatAccNumber=(number)=>{
        if (number >= 1000) {
            const suffixes = ["", "k", "M", "B", "T"];
            const suffixNum = Math.floor(("" + number).length / 3);
            let shortNumber = parseFloat((suffixNum !== 0 ? (number / Math.pow(1000, suffixNum)) : number).toPrecision(2));
            if (shortNumber % 1 !== 0) {
              shortNumber = shortNumber.toFixed(1);
            }
            return shortNumber + suffixes[suffixNum];
          }
          return number ? number.toString() : "";
    }
    const formattedData = data.map(item => {
        const formattedAudiCnt = formatAccNumber(item.audiCnt);
        return { ...item, audiCnt:formattedAudiCnt };
      });
    //popup열기
    const onOpen=(movieCd)=>{
        setIsOpen(true)
        setClickData(data.find(item=>item.movieCd===movieCd))
    }
    //popup닫기
    const onClose=()=>{
        setIsOpen(false)
    }
    //메뉴 - 전체/상영중/상영종료
    const onMenu=(category)=>{
        setScreenMenu(screenMenu.map(item=>item.category ===category?{...item, isClass:true}:{...item, isClass:false}))
        if(category === 'all'){
            setData(dataList)
            console.log(dataList)
        }else{
            setData(dataList.filter(item=>item.screening === category))
            console.log(dataList.filter(item=>item.screening === category))
        }
        setTitle(category)
    }
    
    return (
        <Container>
            <CinemaForm onSearch={onSearch} setData={setData} dataList={dataList}/>
            <CinemaMenu screenMenu={screenMenu} onMenu={onMenu} data={data}/>
            <CinemaList data={formattedData} onLike={onLike} onOpen={onOpen}/>
            { isOpen && <CinemaModal clickData={clickData} onClose={onClose}/> }
        </Container>
    );
};

export default Cinema;