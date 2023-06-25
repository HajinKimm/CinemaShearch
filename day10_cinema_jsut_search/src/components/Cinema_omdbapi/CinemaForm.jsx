import React from 'react';
import { CinemaSearchForm } from '../styled/CinemaStyle';
import { useState } from 'react';
import { useRef } from 'react';

const CinemaForm = ({onSearch}) => {
    const textRef =useRef(null)
    const [text, setText] = useState('')
    const onSubmit =(e)=>{
        e.preventDefault()
        onSearch(text)
        setText('')
        textRef.current.focus()
        
    }
    return (
        <CinemaSearchForm onSubmit={onSubmit}>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} ref={textRef}/>
            <button type='submit'>search</button>
        </CinemaSearchForm>
    );
};

export default CinemaForm;