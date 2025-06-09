import React from 'react'

const FilterExam = () => {

    let numbers=[1,2,3,4,5,6,7,8,9,10];
    let result = numbers.filter((number)=> number%2===1);


    // fulter()
    // 배열내 요소중 조건에 부합한 요소를 새로운 배열에 묶어서 반환하는 함수
    // map처럼 출력하는게 아니기때문에 조건을 확인할때  fulter() 로 처리하고 출력은 map() 으로 활용용
    let members= [
        {id:1, name:`박수현`, age:25, gender:`W`},
        {id:2, name:`김수현`, age:30, gender:`M`},
        {id:3, name:`우수현`, age:32, gender:`W`}
    ];

    let resultmembers = members.filter((member)=>member.age >=30);


  return (
    <div>
        {result.map((number)=>
            <div>{number% 2===1}</div>
        )}
        <hr />
        {resultmembers.map((member)=>
            <div key={member.id}> {member.name}</div>
        )}
    </div>
    
  )
}

export default FilterExam