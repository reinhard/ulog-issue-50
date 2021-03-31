import "ulog";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

localStorage.setItem('log', 'all')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

