import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import Context from './context/Context';
import App from './App';


ReactDOM.render(
  <Context>
      <Router>
        <App />
    </Router>
  </Context>,
  document.getElementById('root')
);
