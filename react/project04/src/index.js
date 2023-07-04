import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 1. Ex01 - 변수와 State의 차이
// import App from './Ex01';

// 2. Ex02 -state로 좋아요 실습
// import App from './Ex02';

// 3. Ex03 - 참참참 실습
// import App from './Ex03';
// import App from './Ex03_1';

// 4. map함수와 filter함수 (JS개념)
// import App from './Ex04';

//5. Map함수로 반복 렌더링하기
// import App from './Ex05';

//6. Map함수 최종 실습
// import App from './Ex06';

//7. 하위 컴포넌트에서 상위 컴포넌트로 값을 주기
import App from './Ex07';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
