import React , { useState }from 'react'

const Ex03 = () => {

  /* 참참참 게임을 해보자!
  1) 좌, 정면, 우 중 랜덤하게 값을 추출해보자 
  2) 랜덤하게 추출된 값과 내가 선택한 버튼의 값을 비교(단, return문 안에서 비교
  3) 만약 두 값이 같다면, "<p>나의 승리!</p>" 다르다면 "<p>나의 패배!</p>"  
  4) 각각 변화하는 값들 (내선택, 컴퓨터 선택, 결과값)은 바로바로 화면에 보여지게 함 
    */ 

  const [comp, setComp] = useState('과연?');
  const [mine, setMine] = useState('과연?');

  
  const btnCk = (e)=>{
    setMine(e.target.innerText);
    let comp = parseInt(Math.random()*3+1)

    if (comp === 1) {
      setComp('좌');
    }else if (comp === 2) {
      setComp('정면');
    }else if(comp === 3) {
      setComp('우')
    }
  }

  const style={
    
    width : '350px',
    textAlign: 'center',
    fontWeight: '700',
    backgroundColor : 'whitesmoke',
    padding : '20px',
    borderRadius : '50px',
    margin : '20px auto'
  }

  const btnStyle={
    margin : '10px'
  }

  const box={
    display : 'inline-block',
    backgroundColor : 'gray',
    color : 'white',
    padding : '3px 15px',
    borderRadius : '20px',
    margin : '15px'
  }

  

  return (
    <div style={style}>
      
      <h1>🫵 참참참 🫵<br/> 게임을 해보자!</h1>
      <hr/>
      <button onClick={btnCk} style={btnStyle}>좌</button>
      <button onClick={btnCk} style={btnStyle}>정면</button>
      <button onClick={btnCk} style={btnStyle}>우</button>
      <hr/>
      <p>나의 선택 : {mine} </p>
      <p>컴퓨터의 선택 : {comp} </p>
      <div style = {box}>
      <p>결과는? {(mine === comp) ? '나의 승리! ╰(*°▽°*)╯ ': '나의 패배! (┬┬﹏┬┬)'}</p>
      </div>
       {/* 결과 비교 : 
       1) 나의 선택 == 컴퓨터의 선택 : 나의 승리 
       2) !=면 나의 패배  
       단, 결과 비교는 무조건 return문 안에서 진행*/}


    </div>
  )
}

export default Ex03