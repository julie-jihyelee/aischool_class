import React from 'react'


const Ex05MemberCard = ({ list }) => {

  const cardStyle_M = {
    display: 'inline-block',
    color: '#FFFFFF',
    backgroundColor: '#4A55A2',
    textAlign: 'center',
    border: '7px double #C5DFF8',
    borderRadius: '30px',
    margin: '10px',
    padding: '40px'
  }
  const cardStyle_F = {
    display: 'inline-block',
    color: '#FFFFFF',
    backgroundColor: '#FF6666',
    textAlign: 'center',
    border: '7px double #FFEADD',
    borderRadius: '30px',
    margin: '10px',
    padding: '40px'
  }

  return (
    <div style={list.gender==='남성' ? cardStyle_M : cardStyle_F}>
      <h3>{list.name}</h3>
      <p>나이 : {list.age} / {list.gender}</p>
    </div>
  )
}




export default Ex05MemberCard