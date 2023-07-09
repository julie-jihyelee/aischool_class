import React from 'react'
import { useParams } from 'react-router-dom'
import list from '../boardlist.json'

const Detail = () => {


  let { num } = useParams()

  const newList = list.boardList.filter(item => item.num == num)
  /* 
  filter() : 배열함수
  => 조건에 해당하는 (true를 반환하는) 요소들만 모아서 새로운 배열을 생성
  검색, 카테고리화 ... 에 많이 사용



  useParams
  - url의 파라미터 정보를 가져올 수 있는 React Hook
  - 보통 물품/게시글의 고유한 ID값을 설정할 때 적합하다
  - 단, params는 한 가지의 정보만 가져올 수 있다. 

  a. <Route path='/경로이름/:파라미터변수'></route>
  b. /경로이름/3 =>url요청 => 파라미터 변수 안에 3이 담겨져 온다. 
  c. 경로에 해당하는 컴포넌트에 와서 
    1) import {useParams} from 'react-router-dom'
    2) let {파라미터변수} = useParams()
   
  */

  return (
    <div>
      제목 : {newList[0].title}
      <br />
      내용 : {newList[0].content}
    </div>
  )
}

export default Detail