import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import 'modern-normalize/modern-normalize.css'; // npm install modern-normalize
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
