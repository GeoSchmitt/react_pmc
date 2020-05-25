import React, { useState } from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';
import PropertyIcon from '../../utils/propertyIcons';

function Planta() {

  const [title, setTitle] = useState();
  const [address, setAddress] = useState();
  const [property, setProperty] = useState();
  const [yearRelease, setYearRelease] = useState();
  const [size, setSize] = useState();
  const [stuck, setStuck] = useState();
  const [license, setLicense] = useState();

  
  async function save(){
    await api.post('/planta',{
      title, address, property, yearRelease, size, stuck, license
    }).then(()=>
      alert('Planta cadastrada')
    )
  }

  return (
    <S.Container>
      <Header/>
        <S.Form>
          <S.PropertyIcons>
            {
              PropertyIcon.map((icon, index) =>(
                index > 0 &&
                <button type="button" onClick={()=>setProperty(index)}>
                  <img src={icon} alt="Tipo de imóvel na planta" className={property && property !== index && 'inative'}/>
                </button>
              ))
            }
          </S.PropertyIcons>
          <S.Input>
          <span>Título</span>
            <input type="text" placeholder="Digite o título" onChange={e => setTitle(e.target.value)} value={title}></input>
            <span>Endereço</span>
            <input type="text" placeholder="Digite o endereço" onChange={e => setAddress(e.target.value)} value={address}></input>
          </S.Input>
          <S.Options>
            <div>
              <input type="checkbox" checked={stuck} onChange={()=> setStuck(!stuck)}/>
              <span>Obra embargada</span>
              <input type="checkbox" checked={license} onChange={()=> setLicense(!license)}/>
              <span>Possui Alvará</span>
            </div>
          </S.Options>
          <S.Input>
            <span>Tamanho (m²)</span>
            <input type="number" placeholder="Digite o tamanho em m²" onChange={e => setSize(e.target.value)} value={size}></input>
            <span>Ano de lançamento</span>
            <input type="number" placeholder="Digite o ano de lançamento" onChange={e => setYearRelease(e.target.value)} value={yearRelease}></input>
          </S.Input>
          <S.Save>
            <button type="button" onClick={save}>Salvar</button>
          </S.Save>
        </S.Form>
      <Footer/>
    </S.Container>
    )
}

export default Planta;
