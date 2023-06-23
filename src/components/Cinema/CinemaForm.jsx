import React, { useEffect } from 'react';
import { CinemaSearchForm } from '../styled/CinemaStyle';
import { useState } from 'react';

const CinemaForm = ({onSearch}) => {
    const [text, setText] = useState('')
    const [isplay,setIsplay] =useState(false)
    
    const onSubmit =(e)=>{
        e.preventDefault()
        onSearch(text)
        setText('')
        setIsplay(!isplay)
    }
    useEffect(()=>{
        if(text&&isplay){
            setIsplay(false)
        } 
        if(!isplay){
            onSearch(text)
        }
    },[text])
    return (
        <CinemaSearchForm onSubmit={onSubmit}>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button type='submit'>검색</button>
        </CinemaSearchForm>
    );
};

export default CinemaForm;

