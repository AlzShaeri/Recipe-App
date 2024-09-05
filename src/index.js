import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // existing import
import './styles.css'; // new import
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
