import React, { useState } from 'react'

const Ex03_1 = () => {

  let list = ['좌', '정면', '우'];
  const [ranChoice, setRanChoice] = useState('좌');
  const [myChoice, setMyChoice] = useState('좌');

  const btnCk = (e) => {
    console.log('btn Ck', e.target.innerText);

    // 나의 선택을 세팅
    setMyChoice(e.target.innerText);

    // 컴퓨터의 선택을 세팅
    setRanChoice(list[parseInt(Math.random() * 3)])


    console.log('나', myChoice, '컴퓨터', ranChoice)

  }



  return (
    <div>
      <h1>참참참 게임을 해보자!</h1>

      <button onClick={btnCk}>좌</button>
      <button onClick={btnCk}>정면</button>
      <button onClick={btnCk}>우</button>

      <p>나의 선택! </p>
      <p>컴퓨터의 선택!</p>

      {/* 결과 비교 : 나의 선택과 컴퓨터의 선택이 같으면 나의 승리 
                        선택 두개가 다르면 나의 패배 
            단, 결과 비교는 무조건 return 문 안에서 진행
        */}

        {ranChoice === myChoice ? <p>나의 승리!</p> : <p>나의 패배</p>}
    </div>

  )
}

export default Ex03_1