import React from 'react';
import * as S from './styles';
import filterIcon from '../../assets/filter.png'

function Filter({type, actived}){
    return (
        <S.Container actived={actived}>
           <img src={filterIcon} alt="Filtro"/>
           <span>{type}</span>
        </S.Container>
    )
}

export default Filter;