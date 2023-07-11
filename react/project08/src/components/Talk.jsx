import React from 'react';
import { useState, useEffect, useRef } from 'react';


// 선생님풀이
// const Talk = () => {

//   const [listArr, setListArr] = useState([
//     { writer: '선영표', content: '멋진 기사네요!' }
//   ])

//   const writerRef = useRef()
//   const contentRef = useRef()

//   const addComment = () => {
//     console.log('addComment Function')
//     setListArr([...listArr, { 
//       writer : writerRef.current.value, 
//       content : contentRef.current.value }])
//     writerRef.current.value = ''
//     contentRef.current.value = ''
//     writerRef.current.focus()

//   }



//   return (
//     <div>
//       <h3>톡톡!</h3>
//       <span>기사에 대한 의견을 자유롭게 남겨주세요!</span>
//       {listArr.map(item => {
//         return <div key={item.content}>
//           <p>{item.content} <span> |  작성자 : {item.writer}</span></p>
//         </div>
//       })}



//       <hr />
//       작성자 : <input type='text' ref={writerRef} /><br />
//       <br />
//       <textarea cols='40' rows='4' placeholder='내용을 작성해주세요!' ref={contentRef} ></textarea><br />
//       <button onClick={addComment}>댓글작성</button>
//     </div>
//   )
// }








const Talk = () => {

  const writerRef = useRef('이름')
  const contentRef = useRef('기사에 대한 댓글을 적어주세요!')
  
  const [comment,setComment] = useState([{
    writer : '선영표', content :'멋진 기사네요!'
  }])

  const handleAdd = ()=>{
    console.log('clickEvent', writerRef.current.value, contentRef.current.value)
    
    if(writerRef.current.value != null && contentRef.current.value != null){
      setComment([...comment, {writer : writerRef.current.value, content : contentRef.current.value}])
      writerRef.current.value=''
      contentRef.current.value=''
    }

    
    }
 
  


  return (
    <div>
      <h3>톡톡!</h3>
      <span>기사에 대한 의견을 자유롭게 남겨주세요!</span><br/>
      <div>
       {comment.map(item => {
        return <p>{item.content}<span> - 작성자 : {item.writer}</span></p>
       })}
       
      </div>

      <hr/>
      작성자 : <input type='text' ref={writerRef}/><br/>
      <br/>    
      <textarea cols='40' rows='4' placeholder='기사에 대한 댓글을 작성해주세요!' ref={contentRef} ></textarea><br/>
      <button onClick={handleAdd}>댓글작성</button>



    </div>
  )
}


export default Talk