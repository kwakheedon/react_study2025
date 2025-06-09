import React from 'react'

const MapArrayExam = () => {

    let numbers=[1,2,3,4,5];

    // map함수: 기존배열을 새로운배열로 다시 묶어서 반환 
  return (
    <div>
        {numbers}
        {numbers.map((item,index)=>(
            <div key={index} > 번째요소:{item}</div>
        ))}

    </div>
  )
}

export default MapArrayExam