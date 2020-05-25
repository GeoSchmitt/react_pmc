import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    background: #2980b9;
    border-bottom: 5px solid #A3C2F6;
    display: flex;
`
export const LeftSide = styled.div`
    width: 50%;
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    img{
        width: 80px;
        height: 80px; 
    }
`
export const RightSide = styled.div`
    width: 50%;
    height: 100px;
    a{
        color: #FFF;
        font-weight: bold;
        font-size: 20px;
        text-decoration: none;
        margin: 0 20px;
        &:hover{
            color: #A3C2F6;
        }
    }
    display: flex;
    justify-content: flex-end;
    align-items: center;
`