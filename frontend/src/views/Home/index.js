import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Filter from '../../components/Filter';
import ImovelCard from '../../components/ImovelCard';
import api from '../../services/api';
import { Link } from 'react-router-dom';

function Home() {
  const [filterActived, setFilterActived] = useState('Todos');
  const [imoveis, setImoveis] = useState([]);

  async function loadImoveis(){
    await api.get(`/imovel/filter/${filterActived}`).then(response =>{
      setImoveis(response.data);
    })
  }

  useEffect(()=>{
    loadImoveis();
  }, [filterActived])
  
  return (
    <S.Container>
      <Header/>
      <S.FilterArea>
        <button type="button" onClick={()=> setFilterActived("Todos")}>
          <Filter type="Todos" actived={filterActived === 'Todos'}/>
        </button>
        <button type="button" onClick={()=> setFilterActived("Casa")}>
          <Filter type="Casa" actived={filterActived === 'Casa'}/>
        </button>
        <button type="button" onClick={()=> setFilterActived("Apartamento")}>
          <Filter type="Apartamento" actived={filterActived === 'Apartamento'}/>
        </button>
      </S.FilterArea>

      <S.Title>
        <h3>IMÓVEIS</h3>
      </S.Title>
      <S.List>
        {
          imoveis.map(i =>(
            <Link to={`/imovel/${i._id}`}>
              <ImovelCard title={i.title} type={i.property} star={i.star} size={i.size}/>
            </Link>
          ))
        }
      </S.List>
      <Footer/>
    </S.Container>
      
    )
}

export default Home;
