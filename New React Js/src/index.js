import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './Redux/app/store';
import { Provider } from 'react-redux';
import Counter from './Redux/components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       {/* <App /> */}
       <Counter/>
    </Provider>
       
  </React.StrictMode>
);

export const coinApi = `https://api.coingecko.com/api/v3`;

