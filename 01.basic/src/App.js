
import './App.css';

// App 컴포넌트
// React 애플리케이션 루트 컴포넌트
// 화면 ui를 정의하는 컴포넌트 + 다른 컴포넌트르 포함 
// jsx 문법을 사용해서 HTML+JS 를 작성
// css 스타일 정의 


    //JSX 문법 , JS 와 HTML을 결합한 문법 , document 객체 x
    
    // 사용문법 : {변수} 
    // return : 화면에 보여줄 HTML을 구성   
    // 부모요소는 반드시 하나 
function App() {

   let isLogin = true;
   let name ="곽";
   let styled = {
      border: "1px solid break",
      width: 400,
      textAlign: "center"

    };

    let temp =prompt("오늘의 온도는?");
    let result ="";
    if(temp <15){
      result = " 너무덥다 ,, ";
    }else if(temp >20){
      result ="눈물을 흘린다,, ";
    }else if(temp >30){
      result= "흘렸나 눈물을 ";
    }else {
      result="울었다";
    }

    // CSS 스타일 정의방법3가지 
    // 1 요소 내부에 style 속성으로 적용   <div style={{ color:"red"}}> </div>
    // 2 style 값을 변수에 선언 
    // 3 css 파일 분리 

    {/* 
      조건부 랜더링 : 삼항연사자를 활용하는 방법 { 조건식 ? ():() }

      조건부 랜더링 : 조건이 하나일때 사용 ex) 클래스 이름을 추가/삭제, 상태값과 연계해서 사용도 가능
       {isLogin && "로그인된상태"}  &&기호는  변수가 맞으면 결과값 ,아니면 반환x 
      */}

      
  return (
    <div style={styled}>
    <div className='App' >
      로그인상태: {isLogin && "로그인된상태"} <br />
     이름: {name}{"곽곽곽"} <br/>
     나이: {30}
    </div>
       <div className='App' >
     이름: {name}{"곽곽곽"} <br/>
     나이: {30}{30> 19 ? (
      <p>성인</p>
     ):(
      <p>미성년자 </p>
     )}

     <p> 오늘의 날씨는 {result}</p> 


    </div>
    </div>


  );
}


export default App;
