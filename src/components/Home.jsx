import { useEffect, useState } from 'react'
// importa os hooks useEffect e useState do react

import { Link } from 'react-router-dom'
// importa Link do react-router-dom para navegação entre páginas (não usado neste código, mas importado)

import axios from 'axios'
// importa axios para fazer requisições http

import '../style/Home.css'
// importa arquivo css para estilização da página

import CoinCard from './CoinCard'
// importa o componente CoinCard que vai mostrar cada moeda individualmente

//importa o searchbar para pesquisar
import SearchBar from './SearchBar'

function Home() {
  // componente funcional que mostra a lista de moedas

  const [coins, setCoins] = useState([])
  // estado local 'coins' que guarda a lista de moedas, inicialmente vazio

 

  useEffect(() => {
    // hook que roda ao montar o componente para buscar os dados da API

    axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      // faz requisição GET para a API do CoinGecko com os parâmetros abaixo

      params: {
        vs_currency: 'brl',          // moeda em real brasileiro
        order: 'market_cap_desc',    // ordena por capitalização de mercado decrescente
        per_page: 20,                // traz 20 moedas por página
        page: 1,                     // página 1
        sparkline: false             // não traz dados do sparkline (mini gráfico)
      }
    }).then(res => {
      setCoins(res.data)
      // atualiza o estado com a lista de moedas retornada da API
    }).catch(err => {
      console.error('erro ao buscar moeda', err)
      // em caso de erro na requisição, exibe no console
    })
  }, [])
  // o efeito roda somente uma vez ao montar o componente (array de dependências vazio)


  
  return (
    <div className='crypto-container'>
      {/* container principal para as moedas, com classe para estilização */}

      {coins.map(coin => (
        // percorre o array de moedas para renderizar cada CoinCard

        <CoinCard key={coin.id} coin={coin} />
        // para cada moeda, renderiza o componente CoinCard passando a moeda como prop
        // usa o id da moeda como key para otimização do react
      ))}
    </div>
  )
}

export default Home
// exporta o componente para uso em outras partes da aplicação
