import React, { useState } from 'react'

const LikeCount = () => {
    const [num,setNum]= useState(0);
    const [emoji,setEmoji]= useState("😊");

    const handleClick = () => {
        if(emoji === "😊"){
            setEmoji("❤️");
            setNum(1);
        }else{
            setEmoji("😊");
            setNum(0);
        }

    }
  return (
    <div>
         <img src={"src/assets/img/스폰.jpg"} 
         alt={"스폰지밥"}
         style={{width:180, height:150}}
         />
         <p><span onClick={handleClick}>{emoji}</span> 좋아요{num}</p>

    </div>
  )
}

export default LikeCount