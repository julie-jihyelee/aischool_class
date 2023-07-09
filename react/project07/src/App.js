import './App.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';
import axios from 'axios';

function App() {

 /*
 
 axios를 통해 받아온 데이터 중, 순위와 관련된 배열이 존재
 그 배열을 movieList라는 state배열에 세팅
 const [movieList, setMovieList] = useState([])
 movieList배열에 map함수를 이용해서 화면에 영화순위 기재

    순위  |   영화제목   |   개봉일자   |
    1     | 범죄도시 3   | 2023.06.01
 
 */

  let movieUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230601';
 
  const [movieList, setMovieList] = useState([])

  /*   화면에 영화 랭킹을 띄워주자!

  - jQuery + aJax 방식
      => 리액트에서는 jQuery라이브러리를 사용할 필요가 없기 때문에 이 방식이 효율적이지 않다.
  
  - fetch API : 
  - Axios : 우리는 앞으로 이 방식에 익숙해지면 된다!

  Q. API를 언제 가져와줘야 할까?
  A. 화면이 뜬 직후! (Mount) => useEffect
     - 왜? 화면이 어느정도 뜨고 데이터를 가지고 오는데 주춤하면 OK
     - 몇 초 동안 화면 자체가 안 떠버리면 사용자 입장에서 불편하다고 느낌
*/ 
  /*case1. Fetch
  1) 장점 
    - JS안에 내장되어있는 라이브러리, 우리 굳이 설치하거나 import할 필요가 없다
    - 내장라이브러리이기 때문에 업데이트에 영향을 받지 않는다. 
  
  2) 단점
    - 지원하지 않는 브라우저가 존대 (IE 11) =< jQuery + aJax조합이 흥했던 이유 : IE 서비스 종료이후 상관없어짐 
    - json으로 변환해주는 과정이 필요하다.
    - axios에 비해 기능이 적다


  Q. 만약 내가 프론트에서 백으로 보내줘야 할 정보가 있다면?
  A. 인자에 작성을 하면 된다! (방법만 알려줌... 지금 당장 필요하지 않음) 

      fetch(movieUrl.{
        id : 'seonzeti'
      })
          .then(res => res.json()) //Fetch를 통해 받아온 데이터를 json형태로 파싱
          .then(res => console.log(res))
          .catch(()=>{console.log('error!')})

  */
  // const getDataWithFetch = ()=>{
  //   console.log('getDataWithFetch')
    
  //   fetch(movieUrl)
  //     .then(res => res.json()) //Fetch를 통해 받아온 데이터를 json형태로 파싱
  //     .then(res => console.log(res))
  //     .catch(()=>{console.log('error!')})
  

  /*case2. Axios
  1) 장점 
      - 기능이 많다
      - 크로스 브라우징이 최적화 (다양한 브라우저 지원)
  2) 
      - 설치가 필요하다
      - import가 필요하다
      - 무겁다

  ** 설치방법
      1) npm i axios
      2) import axious from axios

  */

  
  
  const getDataWithAxios = ()=>{
    console.log('getDataWithAxios');
    axios(movieUrl)
    .then(res => res.data);
  }


  
  //  //** 만약 내가 데이터를 보내주고 싶으면?
  //  //1. get방식으로 데이터를 보내주는 경우 
  //  axios.get(movieUrl, {id='seonjeti'})
  //  .then(res => console.log(res))

  // //2. post방식으로 데이터를 보내주는 경우 
  // axios.post(movieUrl, {id='seonjeti'})
  //   .then(res => console.lof(res))

  
  useEffect(()=>{
    getDataWithAxios()
  },[])
   

  return (
    <div className="App">
      <h1>6월의 영화데이터</h1>
      <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>순위</th>
          <th>영화 제목</th>
          <th>개봉일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
      </div>
    </div>
    
  );
}

export default App;
