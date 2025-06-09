import React from 'react'

const MenuView = (menu) => {
    
  return (
   <div>
      {menu.map(item => (
        <div key={item.id}>{item.coftype}</div>
      ))}
    </div>
  )
}

export default MenuView