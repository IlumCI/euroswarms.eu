import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './style.css';

// Handle GitHub Pages SPA routing
const getBasePath = () => {
  const path = window.location.pathname;
  const base = '/euroswarms.eu';
  if (path.startsWith(base + '/')) {
    return base;
  }
  return import.meta.env.BASE_URL || base;
};

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <BrowserRouter basename={getBasePath()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

