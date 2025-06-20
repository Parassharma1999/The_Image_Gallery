import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalContext from './GlobalContext.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext>
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </GlobalContext>
  </React.StrictMode>,
)
