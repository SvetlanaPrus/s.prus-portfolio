import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './theme/main.scss'; // obs: NOT right extension, needs "scss" instead of "css"
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
