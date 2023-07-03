import React , { useState } from 'react'
import picSrc from './img/pic2.jpg'

const Ex02 = () => {

  /*React에서 내부 이미지 지정하는 방법

    1. 원하는 이미지를 다운로드
    2. img 폴더 생성 (src, public 내부)
    
    1) src 폴더 내에 있는 이미지 사용하기 
      import 이미지변수 from '경로'
    - <img src={이미지변수}></img>

    2) public 폴더 내에 있는 이미지 사용하기 
      올려놓은 사진이 이미 서버에 올라가져 있음 
    <img src=”public 절대경로”></img>
  */ 



  // 좋아요를 눌렀을 때, 화면을 변경해보자!
  //  1.1 비어있는 하트를 , 꽉찬 하트로 ! 좋아요 0개 => 개수 + 1
  //  1.2 좋아요가 눌러져 있는 상태 => 1개 -> 0개 / 꽉찬하트 -> 비어있는 하트

  const [emoji, setEmoji] = useState('🤍');
  const [num, setNum] = useState(0);
  

  const handleLike = ()=>{
    if(num == 0){
      setEmoji('❤️');
      setNum(1);
    }else{
      setEmoji('🤍');
      setNum(0);
    }
  }


  return (
    <div>
      {/* <img src="http://localhost:3000/img/pic1.png">public이미지</img> */}
      {/* <img src={picSrc}>scr이미지</img> */}
      <img src="http://localhost:3000/img/pic1.png" 
      width = '250px'></img>

      <p>
        <span onClick={handleLike}>{emoji}</span>{" "}
        <span>좋아요 {num}개</span>
      </p>

    </div>

  )
}

export default Ex02