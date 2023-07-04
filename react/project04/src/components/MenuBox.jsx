import React from 'react'
import '../Ex.css'

const MenuBox = ({list}) => {
  
  const style={
    width : '290px',
    height : '440px',
    textAlign : 'center',
    backgroundColor: '#FF6666',
    border: '10px double #FFEADD',
    borderRadius : '30px',
    boxSizing : 'border-box',
    padding: '20px 20px 0px 20px',
    margin : '10px 0 30px 10px'
  }

  const imgStyle={
    marginTop : '10px',
    width : '200px',
    height : '200px',
    borderRadius : '20px'
  }

  const nameStyle={
    fontSize : '1.8rem',
    display: 'inline-block',
    color : 'white',
    margin : '10px',
    fontFamily: 'KOTRAHOPE'
  }

  const priceStyle={
    fontSize : '1.5rem',
    fontFamily : 'BRBA_B',
    display: 'inline-block',
    fontWeight : '400',
    backgroundColor : '#FFEADD',
    color : '#FF6666',
    padding : '2px 15px',
    borderRadius : '10px',
    marginTop: '2px'

  }
  
  const pStyle={
    fontFamily:'GangwonEdu_OTFBoldA',
    color : 'white',
    display: 'inline-block',
    width : '200px',
    marginTop: '0px',
    whiteSpace: 'normal'
  }
  

  return (
    <div className='menu' style={style}>
        <img src={list.imgSrc} style={imgStyle} alt='푸딩사진'></img>
        <p style={nameStyle}>{list.name}</p><br/>
        <p style={priceStyle}>💸{list.price}💸</p>
        <p style={pStyle}>{list.content}</p>
    </div>
  )
}

export default MenuBox