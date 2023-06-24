import React from 'react';
import { Container } from '../styled/CinemaStyle';
import CinemaForm from './CinemaForm';
import CinemaList from './CinemaList';
import { useState } from 'react';
import CinemaModal from './CinemaModal';
import CinemaMenu from './CinemaMenu';
import { useAxios } from '../hook/useAxios';
import CinemaPaging from './CinemaPaging';

const screenMenus = [
    {id:1, category:'all', name:'전체', isClass:true},
    {id:2, category:'now', name:'상영중', isClass:false},
    {id:3, category:'future', name:'상영예정', isClass:false},
    {id:4, category:'past', name:'상영종료', isClass:false},
]

const Cinema = () => {
    //데이터
    const { dataList, data,setData, loading, error} = useAxios('https://gist.githubusercontent.com/HajinKimm/99ff7a390542503799071196e19ae5c8/raw/f3c05aafda581a5558180bba20abf6a22b8975f6/Cinema')
    const [title, setTitle] =useState('all')
    const [clickData, setClickData] = useState(data[0]) 
    const [isOpen, setIsOpen] = useState(false)
    const [screenMenu, setScreenMenu] =useState(screenMenus)
    const [switchBtn, setSwitchBtn] = useState(false)
    
    //페이징   
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerpage, setPostsPerpage] = useState(8) //화면에 나올 게시물수
    const totalPage = data.length;
    const lastPost = currentPage * postsPerpage
    const firstPost = lastPost - postsPerpage
    const pageNumber = Math.ceil(totalPage/postsPerpage)
    const currentPosts = data.slice(firstPost, lastPost)
    const current = pageNumber=>setCurrentPage(pageNumber)

    //검색함수
    const onSearch =(txt)=>{
        //전체 데이터에서 검색
        setData(dataList.filter(item=>item.movieNm.toLowerCase().includes(txt.toLowerCase())))
        //검색시 '전체'메뉴로 변경
        if(title !== 'all'){
            onMenu('all')
        }
    }
    //좋아요버튼 , 컬러변경, 숫자증가 감소
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
    const formattedData = currentPosts.map(item => {
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
    //메뉴 - 전체/상영중/상영예정
    const onMenu=(category)=>{
        current(1)
        setScreenMenu(screenMenu.map(item=>item.category ===category?{...item, isClass:true}:{...item, isClass:false}))
        if(category === 'all'){
            setData(dataList)
        }else{
            setData(dataList.filter(item=>item.screening === category))
        }
        setTitle(category)
        setSwitchBtn(false)
    }
    //개봉작만 보기 스위치버튼
    const onSwitchBtn=()=>{
        current(1)
        setSwitchBtn(!switchBtn)
        if(!switchBtn){
            setData(dataList.filter(item=>item.screening==='now'||item.screening==='past'))
            setScreenMenu(screenMenu.map(item=>item.isClass?{...item, isClass:false}:item))
        }else{
            setScreenMenu(screenMenu.map(item=>item.category==='all'?{...item, isClass:true}:item))
            setData(dataList)
        }
    }

    return (
        <Container>
            <CinemaForm onSearch={onSearch}/>
            <CinemaMenu screenMenu={screenMenu} onMenu={onMenu} data={data} onSwitchBtn={onSwitchBtn} switchBtn={switchBtn}/>
            <CinemaList data={formattedData} onLike={onLike} onOpen={onOpen}/>
            { isOpen && <CinemaModal clickData={clickData} onClose={onClose}/> }
            <CinemaPaging current={current} pageNumber={pageNumber} currentPage={currentPage} setCurrentPage={setCurrentPage}/>  
        </Container>
    );
};

export default Cinema;