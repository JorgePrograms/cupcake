import React from 'react';
import Header from './componentes/sections/Header';
import Home from './componentes/pages/home';
import Cupcakes from './componentes/pages/cupcakes';
import AboutUs from './componentes/pages/aboutUs';
import './styles/styles.scss';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
          <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/cupcakes' element={<Cupcakes peticion="cupcakes" />} />
        <Route path='/nosotros' element={< AboutUs />} />
        <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;