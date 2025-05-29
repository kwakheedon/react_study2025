
import Menubox from './components/Menubox'
import './App.css'
import React from 'react'
import Member from './components/Member'
import Count from './components/Count'

 // component (컴포넌트)
 // ui를 표현하는 최소단위
 // 컴포넌트를 만들때 파일명은 반드시 대문자 

 //2 props (프로퍼티)  
 //  리엑트는 상위에서 하위로 데이터를 전달하는 방식( 단방향)
 // 값을 전달하는 방식은 객체 ({key : value})로 전달 
 //  <Menubox menuNm= {"아메리카노"} price={2800}/>
 // 형태로 생성한 후 하위 컴포넌트로 전달  
 // 

function App() {
  
  return (
    <>
  
    { /* 11111 */} 
      {/* <Menubox menuNm= {"아메리카노"} price={2800}/>
      <Menubox menuNm={"말차녹차"} price={4000}/>
      <Menubox menuNm={"아이스링크"} price={3900}/> */}

    { /* 22222 */}   
      {/* <div className='container'>
    <Member team ={"KIA타이거즈"} price={"강병우"} />
    <Member team ={"SSG랜더스"} price={"김광현"} />
    <Member team ={"두산베어스"} price={"곽빈"} />
    <Member team ={"한화이글스"} price={"류현진"} />
      </div>   */}

      {/*state실습*/}
      <Count/>

    </>
  )
}
export default App
