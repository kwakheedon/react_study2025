import React from 'react'

const MenuNav = ({onFilter}) => {

  const category = ['All','커피','디저트','에이드','베이커리'];

  return (
    <div className='menu-nav'>
        {category.map((category,index)=>(
          <li onClick= {()=>onFilter(category)}  key={index}> {category}</li>
        ))}


    </div>



  )
}

export default MenuNav