import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './index.scss';
import TabelaCanais from './pages/sobre';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<TabelaCanais/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

