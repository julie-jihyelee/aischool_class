import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const Main = () => {
  const newsUrl = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=fa8d9d2a4b2a41b6805c902f4a3d8929'
  const [artArr, setArtArr] = useState([])

  useEffect(() => {getNews()}, [])

  const getNews = () => {
    console.log('getNews Fuction')

    axios
      .get(newsUrl)
      .then(res => setArtArr(res.data.articles))
  }

  return (
    <div>
      {artArr.map(item => <NewsItem key={item.url} obj={item}/>)}
    </div>
  )
}

export default Main