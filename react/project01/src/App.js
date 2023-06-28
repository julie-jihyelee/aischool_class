import './App.css';

function App() {
  /*
  JSX : 하나의 파일 안에 HTML문법과 JS문법을 동시에 작성할 수 있는 파일 확장자
  
          => JS에서 HTML 문서로 접근할 때 별도로 document 객체에 접근할 필요 없음
          => 가독성이 높고, 작성하기 쉬움, 기능별로 분류하기 쉽다.
  
      ** JSX만의 규칙
      1. 여러 요소가 있다면 반드시 '하나의 부모 요소'로 감싸주어야 한다.
      이 때, 감싸는 부모요소는 <div>가 아니더라도 상관없다.
      (div를 제일 많이 사용. <></>도 가능!)
  
      2. 표현식 사용 가능!
      HTML 태그 옆에 JS 문법을 사용하고 싶다면?
      => return 문 안에, {중괄호} 안에 작성
      단, {}안에 if문은 사용할 수 없다.


      case1 ) 조건이 하나일 때 : && 연산자
      - && 연산자는 양 옆이 모두 true일 때만 렌더링

      case2 ) 조건이 두개일 때 : 삼항연산자
      - 조건문? true일 때 실행문 : false일 때 실행문

      case3 ) 조건이 세개 이상일 때 : if문 사용
      - 표현식으로는 사용이 불가하다
      - return문 위쪽에서 사용

     3. 기존 HTML문법과 다른점
      1) class 대신 className을 사용
      2) html태그(DOM요소)를 사용할 때는 무조건 소문자를 사용
        ex) <h1> O  <H1> X
        그 이유는? 대문자는 따로 쓸 일이 있음
      3) content가 존재하지 않더라도 끝태그를 생략할 수 없다. 
        다만, 줄여쓰는 건 가능함
        ex) <input> X <input/> O
          
  */ 
 
  let name = '임명진';
  console.log(`현재 방문한 사람은 ${name}입니다.`)

  let state = 'open';

  // 3. 조건이 3개 이상일 때

  let subName ='';
  if(name==='임명진'){
    subName ='JS'
  }else if(name==='최영화'){
    subName = 'python'
  }else if(name==='선영표'){
    subName = 'React'
  }


  return (
    <div className="App">
      {/* 1. 조건이 하나일 때 */}
      {state==='open' && <div>이지혜의 {subName}홈페이지에 오신 것을 환영합니다~</div>}
      

      {/* 2. 조건이 두개일 때 */}
      {name==='나예호'
      ? <div>{name}님 환영합니다~</div> 
      :<div> 죄송합니다. 이용하실 수 없습니다. </div>}

    </div>
  );
}

export default App;
