import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import Header from './components/Header';
import CoinDetails from './components/CoinDetails'
// import CoinCard from './components/CoinCard' // Não é necessário importar CoinCard aqui

import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      {/* O Header agora recebe a função de busca como prop */}
      <Header onSearch={handleSearch} />
      
      <Routes>
        {/* O Home agora recebe o searchTerm como prop */}
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
    </>
  )
}

export default App