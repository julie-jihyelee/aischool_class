import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const NewsItem = ({ obj }) => {
  console.log('props data :', obj)

  return (

    /*
    - Link 스타일 ⇒ a 태그 css
    - Link태그로 작업을 했는데, a 태그로 디자인 했을 때 적용되는 이유?
    - 우리가 div, p, h3  여러개를 하나의 NewsItem 컴포넌트에 담아준 것처럼 
    - a태그를 비롯한 여러 기능들을 Link컴포넌트에 담아준거임
    - 그래서 우리는 css 적용이 가능한 것!
        
    */


    <div className='article-container'>
      <img width='400px' src={obj.urlToImage}></img>
      <h3><Link to={obj.url} style={{ textDecoration: "none" }}>{obj.title}</Link></h3>
      <p>{obj.description}</p>
    </div>
  )
}

export default NewsItem