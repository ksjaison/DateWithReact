import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import SpreadOperatorApp from './Components/SpreadOperatorApp';
import MapMethodApp from './Components/MapMethodApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SpreadOperatorApp></SpreadOperatorApp> */}
    <MapMethodApp></MapMethodApp>
  </React.StrictMode>
);

