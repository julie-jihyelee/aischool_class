import React from 'react'
import MemberCard from './components/Ex05MemberCard'

// Map 함수
// 주어진 함수를 호출한 결과를 모아서 새로운 배열을 생성한다
// map함수를 이용하려며 key을 꼭 작성해주어야 한다. 
// 이때, key값은 고유한 값이어야 한다. (중복X) 



let name = [
  {
    name: '임나연',
    age: 27,
    gender: '여성'
  
  },
  {
    name: '차은우',
    age: 25,
    gender: '남성'
  },
  {
    name: '장원영',
    age: 22,
    gender: '여성'
  }
]

const style = {
  textAlign : 'center'
}

const btn ={
  margin : '10px'
}

let nameList = name.map(item => <button key={item.name} style={btn}>{item.name}</button>)
console.log(nameList)

const Ex05 = () => {
  return (
    <div style={style}> 
      <h1>회원 카드</h1>
      {nameList}
      <br/>
      <br/>
      {/* 
      case1. Map함수를 이용하지 않은 경우
      <MemberCard name={name[0]}/>
      <MemberCard name={name[1]}/>
      <MemberCard name={name[2]}/> */}


      {/* 
      2. Map함수를 이용하는 경우
       */}
      {/* {name.map(item => <MemberCard name={item.name} age={item.age} gender={item.gender} key={item.name}></MemberCard>)} */}
    {name.map(item => <MemberCard list={item} key={item.name}></MemberCard>)} 




    </div>
  )
}

export default Ex05