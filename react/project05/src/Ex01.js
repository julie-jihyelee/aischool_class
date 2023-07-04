import React, { useEffect, useState } from 'react'


const Ex01 = () => {

  // 1. 생성자 ( 컴포넌트가 실행될 때) : 화면이 렌더링 되기 이전 : 최초의 단계
  // 변수, 함수, state 등 값을 초기화 할 때 사용하는 공간

  console.log('1) 컴포넌트 최초 실행')

  /*
  LifeCycle : React Component에 존재하는 생명 주기
   - 1) 컴포넌트가 최초 실행되거나
   - 2) 컴포넌트의 화면이 렌더링 되는 중이거나
   - 3) 컴포넌트의 화면 렌더링이 끝난 직 후 이거나
   - 4) 특정 값이 변화했거나
  등등 특정 시점에 이벤트가 발생할 때 로직 작성을 할 수 있다.
  */

  /*
  3. 화면이 갱신된 직후!
  - useEffect라는 리액트 훅을 사용
  - useEffect(함수, 배열)
  - useEffect(()=>{},[])
 
  => 화면의 렌더링이 끝났을 때, 첫번째 인자에 있는 함수를 호출하게 된다. 
    보통, API call 처럼 무거운 작업을 진행한다. 
  */

  useEffect(() => {
    console.log('3) 화면 갱신 직후')
  }, [])

  /*
  4. 특정 값이 변화했을 때
  - useEffect라는 리액트 훅을 사용
  - useEffect(함수, [변화를 감지할 state])
  - useEffect(함수, [num])
    => num이라는 state가 변할 때마다 1번 인자의 함수를 호출해준다.  
  */
 
  const [num, setNum] = useState(0)
  useEffect(()=>{
    console.log('4) 값 변화함!')
  },[num])



  return (

    //2. 화면이 렌더링되는 공간 => 화면을 구성하는 요소를 작성
    <div>
      {console.log('2) 화면 렌더링 중...')}
      {num}
      <button onClick={()=>{setNum(num+1)}}>+1</button>
    </div>
  )
}

export default Ex01
