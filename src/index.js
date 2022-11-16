import React from 'react';
import { createRoot } from 'react-dom/client';
import './theme/main.scss'; // obs: NOT right extension, needs "scss" instead of "css"
import { HashRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
