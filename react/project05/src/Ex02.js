import React, { useState, useEffect } from 'react'
import './App.css'

const Ex02 = () => {

  // [실습] 랜덤게임을 만들어보자
  // 1) 필요한 state들을 관리 (ranNum : 랜덤숫자, num:내숫자, result:결과, gameNum : 게임의 횟수)
  //    => 이때, 값들은 화면에 바로 변화되게 할 것
  // 2) 랜덤한 수 뽑아주자 (1~3)
  // 3) 내가 누른 버튼의 숫자를 구해보자 (이벤트 객체, 함수 매개변수 e) => 여기까지만 혼자 실습
  //console창에 '내가 누른 숫자 2, 컴퓨터 랜덤 숫자 1' 출력
  // 4) 2번-3번 숫자를 비교 (시점에 따라 진행) - 게임의 횟수에 따라 
  // 버튼을 클릭할 때마다 gameNum 1++
  // gameNum이 변경될 때 2번 숫자와 3번 숫자 값을 비교


  const [num, setNum] = useState()
  const [ranNum, setRanNum] = useState()
  const [result, setResult] = useState()
  const [gameNum, setGameNum] = useState(0)

   console.log(result)



  // 버튼을 클릭했을 때 실행될 함수
  const btnCk = (e) => {
    setRanNum(parseInt(Math.random() * 3 + 1))
    setNum(parseInt(e.target.innerText))
    setGameNum(gameNum + 1)
  }

  // gameNum State의 값이 변경될 때마다 승부를 판단
  useEffect(() => {
    console.log('gameNum useEffect')

    if (num !== undefined) {
      if (ranNum > num) {
        setResult('패배')
      } else if (ranNum < num) {
        setResult('승리')
      } else if (ranNum == num){
        setResult('무승부')
      }
    }
  }, [gameNum])

  return (
    <div className='App'>
      <h1>랜덤게임 진행해보기</h1>
      <button onClick={btnCk}>1</button>
      <button onClick={btnCk}>2</button>
      <button onClick={btnCk}>3</button>

      <div>
        <p>내가 입력한 숫자 : {num}</p>
        <p>컴퓨터가 입력한 숫자 : {ranNum}</p>
        <p>결과는? {result}</p>
      </div>

      {console.log(`Round${gameNum} : 내가 누른 숫자 ${num}, 컴퓨터 랜덤 숫자 ${ranNum} `)}
    </div>
  )
}

export default Ex02