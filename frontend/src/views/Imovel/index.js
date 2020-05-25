import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StarIcon from '../../utils/starIcons';
import PropertyIcon from '../../utils/propertyIcons';
import api from '../../services/api';

function Imovel({match}) {

  const [star, setStar] = useState(5);
  const [title, setTitle] = useState();
  const [address, setAddress] = useState();
  const [property, setProperty] = useState();
  const [bedroom, setBedroom] = useState();
  const [bathroom, setBathroom] = useState();
  const [suite, setSuite] = useState();
  const [size, setSize] = useState();
  const [balcony, setBalcony] = useState();
  const [grill, setGrill] = useState();

  async function loadImovelDetails(){
    await api.get(`/imovel/${match.params.id}`).then(response =>{
      setStar(response.data.star)
      setTitle(response.data.title)
      setAddress(response.data.address)
      setProperty(response.data.property)
      setBedroom(response.data.bedroom)
      setBathroom(response.data.bathroom)
      setSuite(response.data.suite)
      setSize(response.data.size)
      setBalcony(response.data.balcony)
      setGrill(response.data.grill)
    })
  }

  useEffect(()=>{
    loadImovelDetails();
  },[]);

  async function save(){
    await api.post('/imovel',{
      star, title, address, property, bathroom, suite, size, balcony, grill
    }).then(()=>
      alert('Imóvel cadastrado')
    )
  }

  return (
    <S.Container>
      <Header/>
        <S.Form>
          <S.StarIcons>
            {
              StarIcon.map((icon, index) =>(
                index > 0 &&
                <button type="button" onClick={()=>setStar(index)}>
                  <img src={icon} alt="Avaliação" className={star && star < index && 'inative'}/>
                </button>
              ))
            }
          </S.StarIcons>
          <S.Input>
            <span>Título</span>
            <input type="text" placeholder="Digite o título" onChange={e => setTitle(e.target.value)} value={title}></input>
            <span>Endereço</span>
            <input type="text" placeholder="Digite o endereço" onChange={e => setAddress(e.target.value)} value={address}></input>
          </S.Input>
          <S.PropertyIcons>
            {
              PropertyIcon.map((icon, index) =>(
                index > 0 &&
                <button type="button" onClick={()=>setProperty(index)}>
                  <img src={icon} alt="Tipo de imóvel" className={property && property !== index && 'inative'}/>
                </button>
              ))
            }
          </S.PropertyIcons>
          <S.Input>
            <span>Quartos</span>
            <input type="number" placeholder="Digite número de quartos" onChange={e => setBedroom(e.target.value)} value={bedroom}></input>
            <span>Benheiros</span>
            <input type="number" placeholder="Digite número de benheiros" onChange={e => setBathroom(e.target.value)} value={bathroom}></input>
            <span>Suites</span>
            <input type="number" placeholder="Digite número de suites" onChange={e => setSuite(e.target.value)} value={suite}></input>
            <span>Tamanho (m²)</span>
            <input type="number" placeholder="Digite o tamanho em m²" onChange={e => setSize(e.target.value)} value={size}></input>
          </S.Input>
          <S.Options>
            <div>
              <input type="checkbox" checked={balcony} onChange={()=> setBalcony(!balcony)}/>
              <span>Sacada</span>
              <input type="checkbox" checked={grill} onChange={()=> setGrill(!grill)}/>
              <span>Churrasqueira</span>
            </div>
          </S.Options>
          
          <S.Save>
            <button type="button" onClick={save}>Salvar</button>
          </S.Save>
        </S.Form>
      <Footer/>
    </S.Container>
      
    )
}

export default Imovel;
