import React from 'react'

const MapObjectExam = () => {

      let members =[
        {id:1, name:'박수현', age:25, gender:'w'},
        {id:2, name:'박현', age:27, gender:'M'},
        {id:3, name:'박박수', age:26, gender:'M'}      
        ];

      let result = members.map((member)=>{
        return( <div key={member.id}>{member.id}.{member.name}- 
                {member.age} ({member.gender === "M"?"남자":"여자"})</div>);



      })  

  return (
    <div>
        {members.map((member)=>(
            <div key={member.id}>{member.id}.{member.name}- 
                {member.age} ({member.gender === "M"?"남자":"여자"})</div>

        ))}

        {result}
      

    </div>
  )
}




export default MapObjectExam