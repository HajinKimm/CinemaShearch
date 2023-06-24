import React from 'react';
import { Container } from '../styled/CinemaStyle';
import CinemaForm from './CinemaForm';
import CinemaList from './CinemaList';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Cinema = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [text, setText] = useState()
    

    useEffect(()=>{
        const APIKEY= `4ddfafc5`
        const url = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${text}`
        axios.get(url)
            .then(res=>{
                console.log(res.data.Search)
                setData(res.data.Search)
                setLoading(true)
                setError(null)
            })
            .catch(error=>{
                setData([])
                setLoading(false)
                setError(`주소가 올바르지 않습니다.`)
            })

    },[text])

    const onSearch =(txt)=>{
        setText(txt)
        console.log(text)
    }

    return (
        <Container>
            <CinemaForm onSearch={onSearch}/>
            <CinemaList data={data}/>
        </Container>
    );
};

export default Cinema;