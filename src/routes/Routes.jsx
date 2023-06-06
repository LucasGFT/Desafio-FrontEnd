import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../templates/Home/Home'
import Brewery from '../templates/Brewery/Brewery'
import Header from '../components/Header/Header'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Brewery />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas