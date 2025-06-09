import React, { use, useState } from 'react'
import MenuView from './MenuView'

const menu = () => {
        const[coffee,setCoffee]=useState([
         {id:1,coftype:"아메리카노",shop:"벌크"}
        ,{id:2,coftype:"카푸치노",shop:"스타벅스"}
        ,{id:3,coftype:"카푸치노",shop:"벌크"}
        ,{id:4,coftype:"헤이즐넛",shop:"벌크"}
        ,{id:5,coftype:"디저트",shop:"벌크"}
        ,{id:6,coftype:"디저트",shop:"메가"}
    ]);

    const bulkcoffee = setCoffee(coffee.filter(ietm=>ietm.shop==="벌크"))

  return (
    <div>
        {bulkcoffee.map((throwing)=>(
        <div key={throwing.coftype}>{throwing.coftype}</div>
        ))}
       <MenuView menu={menu}/> 
    </div>
  )
}

export default menu