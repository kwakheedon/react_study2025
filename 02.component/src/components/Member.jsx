import React from 'react'

const member = ({team,price}) => {


  return (
     <div className  = "container" >
        <div className ="bat">
            <h1>{team}</h1>
            <p>{price}</p> 
        </div>

     </div>

  )
}

export default member