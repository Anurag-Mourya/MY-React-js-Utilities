
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoute from './components/AppRoute';


import reportWebVitals from './reportWebVitals'
// import App from './App';
// import { App_2 } from './App_2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <App/> */}
      {/* <App_2/> */}
      <AppRoute/>
     
  </React.StrictMode>
);
reportWebVitals();

