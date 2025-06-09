import React, { useState } from 'react'
import menuData from'../assets/data/coffee_menu.json'
import Menultem from './Menultem';
import MenuNav from './MenuNav';



const MenuBoard = () => {
    const [originalMenus] = useState(menuData); //원본저장  커피 
    const[menus,setMenus] = useState(menuData);

    const menuFilter = (category)=>{
        alert("클릭");
       
        if((category === 'All')){
            setMenus(originalMenus)
        }else{
            setMenus(originalMenus.filter(menu => menu.category === category));
        }  
    }
    
    // 메뉴버튼 클릭시 조건에 맞는 메뉴만 출력되는 기능구현
    // 커피클릭  > 아메리카노만 출력
    // 디처트클릭 > 마카롱만
    // 전체클릭 > 모든메뉴 

  return (
    <div className='menu-board'>
       <h1>메뉴판</h1>
       
       <MenuNav  onFilter={menuFilter }
             />

       <div className='menu-list'>
       {menus.map((menu)=>(

          <Menultem info={menu} /> 

       ))}
        </div>

        
    </div>
  )
}

export default MenuBoard