import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

function Header(){
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Geo"/>
            </S.LeftSide>
            <S.RightSide>
                <Link to="/">Home</Link>
                <Link to="/user">Novo Usuário</Link>
                <Link to="/imovel">Novo Imóvel</Link>
                <Link to="/planta">Nova Planta</Link>
            </S.RightSide>

        </S.Container>
    )
}

export default Header;