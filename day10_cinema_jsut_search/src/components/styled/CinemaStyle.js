import styled from 'styled-components'
const mainColor = 'tomato'
const subColor = '#84c1db'

//Cinema
export const Container = styled.div`
    width: 1400px;
    margin: auto;
    
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
        padding: 7px 10px;
        vertical-align: top;
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
    margin-bottom: 30px;
    width: 300px;
    &:nth-child(4n){
        margin-right: 0;
    }
    img{
            width: 100%;
        }
    h2{
        img{
            width: 23px; 
            margin-right: 8px;
        }
        margin: 10px 0px;
        font-size: 25px;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.2;
    }
    ul{
        display: flex;
        li{
            margin-bottom: 3px;
            position: relative;

            &.bar{
                &::after{
                    content: '';
                    display: block;
                    background-color: #aaa;
                    width: 1px;
                    height: 15px;
                    position: absolute;
                    top: 5px; right: -10px;
                }
            }
            &:last-child{
                margin-left: 20px;
            }
            i{
                font-size: 25px;
                vertical-align: middle;
                margin-right: 10px;
            }
        }
        &:last-child{
            justify-content:space-between;
            .btn{
                button{
                    margin-top: 5px;
                    margin-right: 10px;
                    background: ${mainColor};
                    padding: 1px 10px;
                    border-radius: 10px;
                    color: #fff;
                    line-height: 30px;
                    border: none;
                    &.infoBtn{
                        background:#444;
                    }
                }
                
            }
        }
    }
`

export const Popup = styled.div`
    .bg{
        position:fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: #000;
        opacity: 0.7;
    }
    .popup{
        position: fixed;
        width: 900px;
        left: 50%;
        top: 50%;
        background: #fff;
        padding: 20px 40px;
        box-sizing: border-box;
        transform: translate(-50%,-50%);
        div{
            display: flex;
            justify-content: space-between;
            h2{
                font-size: 25px;
                font-weight: 700;
                margin-bottom: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            div{
                button{
                    margin-right: 20px;
                    font-size: 16px;
                    background: ${mainColor};
                    border-radius: 10px;
                    padding: 0px 30px;
                    color: #fff; font-weight: 700;
                    border: none; 
                    height: 40px;
                }
                em{
                    margin-right: 20px;
                    background: #bbb;
                    border-radius: 10px;
                    padding: 0px 30px;
                    color: #fff; font-weight: 700;
                    border: none;
                    height: 40px;
                    line-height: 40px;
                }
                i{
                        font-size: 35px;
                        line-height: 1.3;
                }

            }
        }
        .movieInfo{
            display: flex;
            margin-bottom: 20px;
            img{
                width: 320px;
                height: 457px;
                box-shadow: 3px 3px 5px #666;
            }
            .movieInfoText{
                display: block;
                width: 460px;
                h3{
                    font-size: 25px;
                    font-weight: 700;
                    padding-bottom: 5px;
                    margin-bottom: 10px;
                    border-bottom: 2px solid #ccc;
                }
                ul{
                    display: flex;
                    border-bottom: 2px solid #ccc;
                    
                    li{
                        width: 50%;
                        i{
                            font-size: 20px;
                            vertical-align: middle;
                            margin-right: 5px;
                        }
                    }
                }
                strong{
                    font-weight: 500;
                    font-size: 18px;
                    display: block;
                    margin: 10px 0px 15px;
                    
                }
                p{
                    
                    white-space: pre-line;
                }
                
            }
        }

    }
`

export const CinemaMenuList = styled.div`
div{
    display: flex;
    margin-bottom: 20px;
    button{
        padding: 10px 30px ;
        margin-right: 30px;
        border-radius: 5px;
        font-size: 18px;
        box-sizing: border-box;
        background:#aaa;
        border: none;
        cursor: pointer;
        color: #fff;
        font-weight: 700;
        &.on{
            background: ${subColor};
        }
    }

}
    .txt{
        margin-bottom: 20px;
    }
`