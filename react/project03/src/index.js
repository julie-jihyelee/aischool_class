import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ex01 from './component/Ex01'; // App 컴포넌트를 가져와서 사용하겠습니다.
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
