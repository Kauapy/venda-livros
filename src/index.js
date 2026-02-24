import styled from 'styled-components';
import Header from './componentes/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './rotas/home';
import reportWebVitals from './reportWebVitals';
import Favoritos from './rotas/Favoritos';
const { createGlobalStyle } = require('styled-components');



const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Epunda Slab", serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

li{
  list-style: none;
}


`

const AppHeader = styled.header`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    <AppHeader>
        <Header />
      </AppHeader>
      <Routes>
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
