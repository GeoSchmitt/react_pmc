import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    height: 75px;
    background: ${props => props.actived ? '#A3C2F6' : '#2980b9'};
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    cursor: pointer;

    img{
        width: 50px;
        height: 50px;
    }

    &:hover{
        background: #A3C2F6;
    }

    span{
        color: #FFF;
        font-weight: bold;
        align-self: flex-end;
        font-size: 20px;
    }



`