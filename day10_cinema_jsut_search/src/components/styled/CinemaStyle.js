import styled from 'styled-components'
const mainColor = 'tomato'
const subColor = '#84c1db'

//Cinema
export const Container = styled.div`
    width: 1400px;
    margin: auto;
    h2{
        font-size: 30px;
        color: tomato;
    }
`

export const CinemaSearchForm = styled.form`
    margin: 50px auto;
    width: 50%;
    
    input{
        width: 500px;
        font-size: 20px;
        border: 1px solid #000;
        padding: 10px;
        margin-right: 20px;
    }
    button{
        font-size: 20px;
        padding: 7px 20px;
        vertical-align: top;
        background: #000;
        color: #fff;
    }

`

export const CinemaListContent = styled.div`
    display: flex; 
    flex-wrap: wrap; 
`

export const CinemaItemBox = styled.article`
    padding: 20px 20px 10px;
    box-sizing: border-box;
    box-shadow: 3px 3px 10px #999;
    margin-right: 60px;
    margin-bottom: 50px;
    width: 300px;
    &:nth-child(4n){
        margin-right: 0;
    }
    img{
            width: 100%;
            height: 370px;
        }
    h2{
        margin: 10px 0px;
        font-size: 25px;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.5;
    }
    ul{
        margin-bottom: 10px;
    }
`
