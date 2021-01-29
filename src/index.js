import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Index from './index.css'
import { robots } from './robots'
import 'tachyons';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
