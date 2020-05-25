import React, { useState } from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons'
import api from '../../services/api';

function User() {

  const [type, setType] = useState();
  const [active, setActive] = useState(1);
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  async function save(){
    await api.post('/user',{
      type, active, name, password
    }).then(()=>
      alert('Usuário cadastrado')
    )
  }

  return (
    <S.Container>
      <Header/>
        <S.Form>
          <S.TypeIcons>
            {
              TypeIcons.map((icon, index) =>(
                index > 0 &&
                <button type="button" onClick={()=>setType(index)}>
                  <img src={icon} alt="Privilégio de acesso" className={type && type !== index && 'inative'}/>
                </button>
              ))
            }
          </S.TypeIcons>
          <S.Input>
            <span>Name</span>
            <input type="text" placeholder="Digite seu nome de usuário" onChange={e => setName(e.target.value)} value={name}></input>
            <span>Senha</span>
            <input type="password" placeholder="Digite sua password" onChange={e => setPassword(e.target.value)} value={password}></input>
          </S.Input>
          <S.Options>
            <div>
              <input type="checkbox" checked={active} onChange={()=> setActive(!active)}/>
              <span>Ativo</span>
            </div>
            <button type="button">Deletar Usuário</button>
          </S.Options>
          <S.Save>
            <button type="button" onClick={save}>Salvar</button>
          </S.Save>
        </S.Form>
      <Footer/>
    </S.Container>
      
    )
}

export default User;
