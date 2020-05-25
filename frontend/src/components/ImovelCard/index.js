import React from 'react';
import * as S from './styles';

import propertyIcons from '../../utils/propertyIcons';

function ImovelCard({title, type, size, star}){
    return (
        <S.Container>
            <S.Top>
                <img src={propertyIcons[type]} alt="Icon"/>
                <h3>{title}</h3>
            </S.Top>
            <S.Bottom>
                <strong>{star} Estrelas!</strong>
                <span>{size} m²</span>
            </S.Bottom>
        </S.Container>
    )
}

export default ImovelCard;