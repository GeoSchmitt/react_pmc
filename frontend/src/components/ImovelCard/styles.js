import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    flex-direction: column;
    margin: 20px;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img{
        width: 50px;
        height: 50px;
    }
`
export const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`