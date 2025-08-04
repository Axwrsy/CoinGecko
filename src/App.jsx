import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import Header from './components/Header';
import CoinDetails from './components/CoinDetails'
import CoinCard from './components/CoinCard'

import './App.css'

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coin/:id" element={<CoinDetails />} />
    </Routes>
  </>
 
   
  )
}

export default App
