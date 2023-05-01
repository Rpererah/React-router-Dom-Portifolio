import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Sobre from './screens/Sobre';
import NotFound from './screens/NotFound';
import Rodape from './components/Rodape/Rodape';
import Menu from './components/Menu/Menu';
import PaginaPadrao from 'components/PaginaPadrao';

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Route>

        {/* 
        Na rota raiz a estrutura a ser renderizada eh 
        <PaginaPadrao><Home/></PaginaPadrao>
        
        Na rota sobre a estruta a ser renderizada eh 
        <PaginaPadrao><Sobre/></PaginaPadrao>
        */}

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}
