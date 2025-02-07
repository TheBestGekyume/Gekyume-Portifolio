import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Remover ou ajustar conforme necessário
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se você quiser medir o desempenho do seu aplicativo, adicione novamente reportWebVitals conforme necessário
// reportWebVitals(console.log);
