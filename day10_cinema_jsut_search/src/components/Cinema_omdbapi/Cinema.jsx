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
    const [text, setText] = useState('sun')
    

    useEffect(()=>{
        const APIKEY= `4ddfafc5`
        const url = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${text}`
        //const url = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${text}&page=1-100` //페이지에 나오는 갯수 지정 오류
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
                setError(`address is incorrect`)
            })
    },[text])

    const onSearch =(txt)=>{
        setText(txt)
    }

    return (
        <Container>
            <CinemaForm onSearch={onSearch}/>
            { !loading && <h2>loading...</h2> }
            { data && loading ? <CinemaList data={data} /> : <h2>Please enter another title...</h2>}
            { error ? error : null }
            
        </Container>
    );
};

export default Cinema;