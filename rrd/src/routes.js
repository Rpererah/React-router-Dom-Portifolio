import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import Sobre from './screens/Sobre/Sobre';
import NotFound from './screens/NotFound/NotFound';
import Rodape from './components/Rodape/Rodape';
import Menu from './components/Menu/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Post from 'screens/Posts/Post';

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>
          <Route path='post/:id' element={<Post />} />

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
