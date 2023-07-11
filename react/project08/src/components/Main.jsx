import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const Main = () => {
  const newsUrl = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=fa8d9d2a4b2a41b6805c902f4a3d8929'
  const [artArr, setArtArr] = useState([])
  
  
  // 1-2 ) session 저장소에서 데이터 가져오기
  let sessionData = sessionStorage.getItem('userId')
  console.log('session :', sessionData)

  useEffect(() => {getNews()}, [])

  const getNews = () => {
    console.log('getNews Fuction')

    // axios
    //   .get(newsUrl)
    //   .then(res => setArtArr(res.data.articles))
    // 현재 문서의 요청값이 너무 많아서 키 값 무효화 상테 -> 나중에 확인해보세열!!

  }

  return (
    <div>
      {sessionData === 'admin'?
      <p>{sessionData}님 환영합니다!</p> :
      <p>로그인이 필요합니다</p>}
      {artArr.map(item => <NewsItem key={item.url} obj={item}/>)}
      
    </div>
  )
}

export default Main