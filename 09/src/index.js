import React from 'react';
import dva from 'dva';
import './index.css';
import './assets/reset.less';
import App from './App';
import reportWebVitals from './reportWebVitals';

import products from './models/products';
import cart from './models/cart';

const app = dva({
  onStateChange(state) {
    const { cart } = state.cart;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});
app.model(products);
app.model(cart);
app.router(() => <App />);
app.start('#root');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
