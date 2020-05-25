import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    
`
export const Form = styled.div`
    width: 50%;
    margin-bottom: 100px;
`



export const StarIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    .inative{
        opacity: 0.2;
    }
    button{
        border: none;
        background: none;
        outline: none;
    }
    img{
        width: 50;
        height: 50px;
        margin: 20px;
        cursor: pointer;
        &:hover{
            opacity: 0.5;
        }
    }
`

export const PropertyIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    .inative{
        opacity: 0.1;
    }
    button{
        border: none;
        background: none;
        outline: none;
    }
    img{
        width: 50;
        height: 100px;
        margin: 20px;
        cursor: pointer;
        &:hover{
            opacity: 0.5;
        }
    }

`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    span {
        font-size: 22px;
        margin-top: 10px;
        color: #707070;
        margin-bottom: 5px;
    }
    input {
        font-size: 15px;
        padding: 20px;
        border: none;
        border-bottom: 3px solid #A3C2F6;
    }
`


export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    input{
        margin-left: 25px;
    }

    div{
        display: flex;
        align-items: center;
        color: #3498db;
        font-weight: bold;
        font-size: 18px;
    }
`
export const Save = styled.div`
    width: 100%;
    margin-top: 20px;
    button{
        width: 100%;
        background: #3498db;
        border: none;
        font-size: 24px;
        color: #FFF;
        font-weight: bold;
        padding: 20px;
        &:hover{
            opacity: 0.7;
        }
        border-radius: 20px;
        cursor: pointer;
    }
    
`