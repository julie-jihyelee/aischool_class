import React from 'react'
import Ex07child from './components/Ex07child'
import { useState } from 'react'

const Ex07 = () => {

  const[data, setData] = useState('')

  

  // 금고 역할을 해주는 함수
  // 자식 컴포넌트가 부모 컴포넌트로 직접 데이터를 전송할 수 없으니
  // 자식이 와서 데이터를 두고갈 수 있을만한 공간을 만들어 두는 것!
  const changeData = (txt)=>{
    console.log('changeData Function',txt)
    setData(txt)
  }


  return (
    <div>
      <h3>상위 컴포넌트</h3>
      <p>받은 값 : {data}</p>
   
      <hr/>
      <Ex07child changeData={changeData}/>
    </div>
  )
}

export default Ex07