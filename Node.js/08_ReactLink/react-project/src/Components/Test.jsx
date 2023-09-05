import React, { useState } from 'react'
import axios from '../axios'

const Test = () => {

  const[data, setData] = useState();

  /**input에 입력한 데이터를 server에 전송하는 함수 */
  const sendData = (e)=>{
    e.preventDefault();
    console.log('function sendData', data);
    
    axios
      .post('/getData', {data : data})
      .then(res => console.log(res))

  }
   

  return (
    <div>
      <form onSubmit={sendData}> 
        <h1>Test</h1>
        <input type='text' onChange={(e)=>{setData(e.target.value)}}></input>
        <button type='submit'>데이터 전송하기</button>
      </form>
    </div>
  )
}

export default Test