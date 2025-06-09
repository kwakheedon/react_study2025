import React, { useState } from 'react'
import { useRef } from 'react';

const RefExam = () => {

  let counvar =0;
  const[countState,setcountState]= useState(0);
  let countRef = useRef(0);

  const handleClick= ()=>{
    countvar +=1;

  }

    const handleClick2= ()=>{
    setcountState(countState+1); 
    
  }

      const handleClick3= ()=>{
    countRef.current +=1;

    
  }

  const print = () =>{
    console.log('vqr:',counvar);
    console.log('state:',countState);
    console.log('ref:',countRef.current);
  }

  return (
    <div>
        <h1>Ref 실습 </h1>
        <div>
          <p>var: {counvar}</p>
          <p>state: {countState}</p>
          <p>ref: {countRef.current}</p>
        </div>
        <div>
          <button onClick={handleClick}>var증가 </button>
          <button onClick={handleClick2}>state증가 </button>
          <button onClick={handleClick3}>ref증가</button>
          <button>출력</button>
        </div>


    </div>
  )
}

export default RefExam