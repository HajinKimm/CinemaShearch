import React, { useEffect, useState } from 'react';
import axios from 'axios'
export const useAxios = (url=[]) => {
    const [dataList, setDataList] = useState([])
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(()=>{
        axios.get(url)
            .then(res=>{
                setData(res.data)
                setDataList(res.data)
                setLoading(true)
                setError(null)
            })
            .catch(error=>{
                setData([])
                setDataList([])
                setLoading(false)
                setError(`주소가 올바르지 않습니다.`)
            })
    },[url])

    return { dataList, data, setData, loading, error}
};

