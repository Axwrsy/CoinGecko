import { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/Home.css'
import CoinCard from '../components/CoinCard'
// import SearchBar from '../components/SearchBar' // Não precisa mais importar SearchBar
// import Header from '../components/Header'; // Não precisa mais importar Header

// O componente Home agora recebe a prop 'searchTerm' do App.jsx
//prop = passar de um componente pai pra um filho
function Home({ searchTerm }) {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'brl',
        order: 'market_cap_desc',
        per_page: 20,
        page: 1,
        sparkline: false
      }
    }).then(res => {
      setCoins(res.data)
    }).catch(err => {
      console.error('erro ao buscar moeda', err)
    })
  }, [])
  
  // A Home não precisa mais da função handleSearch, pois ela já está no App.jsx
  
  // Lógica de filtro para moedas usando o searchTerm recebido por prop
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Remove o Header duplicado daqui. Agora ele só aparece no App.jsx */}
      
      {/* retorna na pesquisa*/}
      <div className='crypto-container'>
        {filteredCoins.length > 0 ? (
          filteredCoins.map(coin => (
            <CoinCard key={coin.id} coin={coin} />
          ))
        ) : (
          <p>Nenhuma moeda encontrada.</p>
        )}
      </div>
    </div>
  )
}

export default Home