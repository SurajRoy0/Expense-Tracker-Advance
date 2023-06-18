import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './Store/AuthContext';
import { ItemContextProvider } from './Store/ItemContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ItemContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ItemContextProvider>
  </AuthContextProvider>
);