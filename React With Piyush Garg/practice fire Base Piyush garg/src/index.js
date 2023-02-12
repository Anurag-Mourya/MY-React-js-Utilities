
// import { StrictMode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals'
import App from './App';
import { CreateCounterProvider } from './Context/Counter';
// {/* we are wraping all the childrens components inside the provider ex. all the clildren present in app component*/}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <CreateCounterProvider>
      {/*  we are wraping all the childrens components inside the provider ex. all the clildren present in app component*/}
      <App />

    </CreateCounterProvider>
  </React.StrictMode>

);
reportWebVitals();

