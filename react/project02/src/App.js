import logo from './logo.svg';
import './App.css';

function App() {
  /* JSX 문법 규칙
    1. return 안에 있는 태그가 2개 이상이라면, 
    반드시, 부모태그가 있어야 한다. (하나의 태그로 묶여야 한다.)

    2. {중괄호}를 사용해서 JS에 있는 값을 이용할 수 있다!
    (표현식이 사용 가능하다)
    but, 제어문(if, for, while 등)을 사용할 수 없다. 
    => 삼항연산자 or &&, || 등을 활용하여 사용한다.
    
    3. class라는 키워드 대신 className을 이용한다.

    4. JSX 문법에서 스타일 적용 시 객체 형태로 사용해야한다. */

 
  
  let toDay = new Date();

  let name = prompt('이름을 말씀해주세요.');

  console.log(name);

  let year = toDay.getFullYear();
  let month = toDay.getMonth()+1;
  let date = toDay.getDate();
  
  let todayMonth = toDay.getMonth()+1;

  let season ='';
  let photo = '';

  if(todayMonth >= 3 && todayMonth <= 5){
    season = '🌱봄🌱';
    photo = 'https://img.lovepik.com/background/20211021/large/lovepik-spring-floral-background-image_401686078.jpg';
  }else if(todayMonth >= 6 && todayMonth <= 8){
    season = '☀️여름☀️';
    photo = 'https://src.hidoc.co.kr/image/lib/2022/7/20/1658306424525_0.jpg';
  }else if(todayMonth >= 9 && todayMonth <= 11){
    season = '🍁가을🍁';
    photo = 'https://blog.kakaocdn.net/dn/cTziTl/btrNqMsOlBz/CZgHO8kbUWiXZDKEk4bDwk/img.jpg';
  }else if(todayMonth === 12 ||todayMonth === 1 || todayMonth === 2 ){
    season = '☃️겨울☃️';
    photo = 'https://media.istockphoto.com/id/1333254904/ko/%EC%82%AC%EC%A7%84/%ED%95%98%EC%96%80-%EB%88%88-%EB%8D%AE%EC%9D%B8-%ED%81%AC%EB%A6%AC%EC%8A%A4%EB%A7%88%EC%8A%A4-%ED%8A%B8%EB%A6%AC-%EB%B0%B0%EA%B2%BD-%EC%95%BC%EC%99%B8%EC%9D%98-%EA%B8%B4-%EB%B0%B0%EB%84%88-%EC%A3%BC%EC%9C%84-%EC%9D%98-%EC%A1%B0%EB%AA%85-%EB%B3%B4%EC%BC%80-%EB%88%88-%EB%96%A8%EC%96%B4%EC%A7%80%EB%8A%94-%ED%81%AC%EB%A6%AC%EC%8A%A4%EB%A7%88%EC%8A%A4-%EB%B6%84%EC%9C%84%EA%B8%B0.jpg?s=612x612&w=0&k=20&c=OUik9BZUulr1Z3rrZqQjvncy80iOXB3iIbfKotC1IwQ=';
  }





  return (
    <div className="App">
      <h1>{year}.{month}.{date}.</h1>
      <div className='box'><img src ={photo}></img></div>
      
      
   
      <hr></hr>
      <p>{name}님! 지금은 {season}입니다.<br/> 오늘도 좋은 하루 보내세요!</p>
    
      
    </div>
  );
}

export default App;
