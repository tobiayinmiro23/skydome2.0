import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import MenuReducer from './features/home/Menu';
import AddToCartReducer from './features/home/AddToCart'
import CartReducer from './features/Cart/Cart'
import PaymentLinkReducer from './features/Checkout/PaymentLink'
import GetTotalReducer from './features/Checkout/Total'


const store = configureStore({
  reducer: {
    menu: MenuReducer,
    addToCart: AddToCartReducer,
    cart: CartReducer,
    paymentlink: PaymentLinkReducer,
    total: GetTotalReducer
  },
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
