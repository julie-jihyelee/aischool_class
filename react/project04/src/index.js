import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 1. Ex01 - 변수와 State의 차이
import App from './Ex01';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
