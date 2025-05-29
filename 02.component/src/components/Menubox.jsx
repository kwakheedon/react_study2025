import React from 'react'


// const Menubox = (props) => {
//     console.log(props);
    
//   return (
//     <div>
//         <h1>{props.menuNm}</h1>
//         <p>{props.price}</p>
//     </div>
//   )
// }


//  const {menNm,price} = Props;

 const Menubox = ({menuNm,price}) => {
   
    
   return (
     <div>
         <h1>{menuNm}</h1>
         <p>{price}</p>
     </div>
  )
 }


export default  Menubox