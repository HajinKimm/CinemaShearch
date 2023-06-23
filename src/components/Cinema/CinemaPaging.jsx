import React from 'react';
import { Paging } from '../styled/CinemaStyle';
import { AiOutlineRight ,AiOutlineLeft} from "react-icons/ai";

const CinemaPaging = ({current, pageNumber, currentPage,setCurrentPage}) => {
    let pageNum = [...Array(pageNumber).keys()].map(item=>item+1);
    console.log(pageNum.length)
    const onPrevPage=()=>{
        if(currentPage > 1) setCurrentPage(currentPage-1)
    }
    const onNextPage=()=>{
        if(currentPage < pageNum.length) setCurrentPage(currentPage+1)

    }
        
    
    return (
        <Paging>
            <i onClick={onPrevPage}><AiOutlineLeft/></i>
            {
                pageNum.map(item=><a href='#' key={item} onClick={(e)=>{e.preventDefault(); current(item);}} className={currentPage===item?'on':''}>{item}</a>)
            }
            <i onClick={onNextPage}><AiOutlineRight/></i>
        </Paging>
    );
};

export default CinemaPaging;