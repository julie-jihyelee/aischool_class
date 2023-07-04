import React from 'react'
import { useState } from 'react'

const Ex07child = ({changeData}) => {

  const [inputTxt, setInputTxt] = useState('')


  return (
    <div>
      <p>이 곳은 하위 컴포넌트 입니다.<br/> {inputTxt}</p>
      <input type='text' onChange={(e)=>{setInputTxt(e.target.value)}}></input>
      <button onClick={()=>{changeData(inputTxt)}}> 값 보내기! </button>
    </div>
  )
}

export default Ex07child