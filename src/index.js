import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inicio from './Inicio';
import Nosotros from './nosotros';
import Servicios from './servicios';
import Skills from './skills';
import Portfolio from './portfolio';
import Contacto from './contacto';
import Footer from './footer';
import Boton from './boton';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Boton />
    <Inicio />
    <Nosotros/>
    <Servicios />
    <Skills />
    <Portfolio />
    <Contacto />
    <Footer />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
