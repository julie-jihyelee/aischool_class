import React from 'react'
import MemberBox from './component/MemberBox'


const AppExample = () => {
  return (
    <div>
      <h1 style = {{textAlign: 'center'}}>🐤🐤코딩 삐약이🐤🐤<br/> 귀여운 팀원을 소개합니다</h1>
      <MemberBox name='양춘모' gender='남성' song='박명호 - 사진'></MemberBox>
      <MemberBox name='양희준' gender='남성' song='10CM - 그라데이션'></MemberBox>
      <MemberBox name='김원영' gender='남성' song='안녕 - 가질 수 없는 너'></MemberBox>
      <MemberBox name='김용민' gender='남성' song='radiohead-creep'></MemberBox>
      <MemberBox name='명소이' gender='여성' song='NewJeans - Hurt'></MemberBox>
      <MemberBox name='이지혜' gender='여성' song='이무진 - 잠깐 시간 될까'></MemberBox>
    </div>
  )
}

export default AppExample