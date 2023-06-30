import React from 'react'


const MemberBox = ({props}) => {
  return (
    <div className="container" style={style}>
      <p>이름 : {props.name}</p>
      <p>성별 : {props.gender}</p>
      <p>좋아하는 노래 : {props.song}</p>
    </div>
  )
  /*
  상위 컴포넌트에서 보낸 값을 하위 컴포넌트에서 받는 방법
  함수의 형태이기 때문에, 값은 함수의 매개변수를 통해서 받는다.

  case1. (props) => { ~ props.name ~ }

  case2. 객체비구조화 할당
  - 객체 안에 속성만 꺼내서 마치 변수인 것처럼 사용

  */
  // let person = {
  //   name : '선영표',
  //   gender : 'W'
  // }
  // console.log(person.name);

  // let {name, gender} = {
  //   name : '선영표',
  //   gender : 'W'
  // }
  // console.log(name);





    const style ={
      border : 'lpx solid black',
      backgroundColor : 'black',
      display : 'inline-bolck',
      width : '300px',
      color: 'white',
      padding : '20px',
      margin : '10px'
    };

 
}

export default MemberBox