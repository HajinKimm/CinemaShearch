import React from 'react';
import { Paging } from '../styled/CinemaStyle';
import { AiOutlineRight ,AiOutlineLeft} from "react-icons/ai";

const CinemaPaging = ({ pageNumber, currentPage,setCurrentPage}) => {
    let pageNum = [...Array(pageNumber).keys()].map(item=>item+1);
    
    //페이징버튼 클릭시 스크롤 맨위로
    const pagingUp=()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const onPrevPage=()=>{
        if(currentPage > 1) {
            setCurrentPage(currentPage-1)
            pagingUp()
        }
    }
    const onNextPage=()=>{
        if(currentPage < pageNum.length) {
            setCurrentPage(currentPage+1)
            pagingUp()
        }
    }
    
    return (
        <Paging>
            <i onClick={onPrevPage}><AiOutlineLeft/></i>
            {
                pageNum.map(item=><a href='#' key={item} onClick={(e)=>{e.preventDefault(); setCurrentPage(item); pagingUp();}} className={currentPage===item?'on':''}>{item}</a>)
            }
            <i onClick={onNextPage}><AiOutlineRight/></i>
        </Paging>
    );
};

export default CinemaPaging;