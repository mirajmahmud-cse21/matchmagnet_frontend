import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {disableDev} from '@fvilers/disable-react-devtools'

if(process.env.NODE_ENV === 'production') disableDev()



/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
