import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #2980b9;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    h3{
        color: #2980b9;
        position: relative;
        top: 30px;
        background: #FFF;
        padding: 0 20px;
    }
`

export const List = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 70px;
    a{
        text-decoration: none;
        color: #000;
    }
`

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    button{
        backgound: none;
        border: none;
        outline: none;
    }

`