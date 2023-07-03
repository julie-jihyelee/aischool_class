import React, { useState } from 'react'

const Ex01 = () => {

  /*React Event
    1. onClick={함수이름}
        이때, 선언되어 있는 함수가 아니라면 바로 함수를 작성하여 호출한다
        onClick={ck} (o)
        onClick={()=>{}} (o)
    
    
    ** State 
    - 변수는 값이 변한다고 해서 화면이 다시 렌더링되지는 않는다
      만약 화면에 변수를 바뀐 값으로 띄어주려면 바뀔 때마다 재런더링을 해줘야한다. 
    - state는 컴포넌트 내부에서 관리되는 변경이 가능한 데이터, 
      값이 바뀔 때마다 화면이 재렌더링 되어서 반응이 빠르다.
  
  */
  let num=0

  const ck = ()=>{
    console.log('ck');
    num ++;
    console.log('현재 num은',num)
  }

  //State 값 변경해보기!
  //const [변수이름, set변수이름] = useState(초기값)
  //내가 만약 state의 값을 변경하고 싶다면 set변수이름 함수를 호출

  //예) 내가 화면에 바로 갱신되는 num2를 3으로 값을 변경하고 싶다면?
  // setNum2(3)

  

  // -1 이 적힌 버튼을 기재해서 state 옆의 숫자를 하나씩 감소 

  const [num2,setNum3] = useState(0);
  const minusNum = ()=>{
    setNum3(num2-1);
  }
  const plusNum = ()=>{
    setNum3(num2+1);
  }
  return (
    <div>
      <p>변수 : {num}</p>
      <p>state : {num2}</p>
      <button onClick={ck}>+1</button>  
      <button onClick={plusNum}>+1</button>     
      <button onClick={minusNum}>-1</button>   
      </div>
  )
}

export default Ex01