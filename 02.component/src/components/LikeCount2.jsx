import React, { useState } from 'react';

const LikeCount2 = () => {
  const [num, setNum] = useState(0);

  const handleDecrease = () => {
    if (num > 0) {
      setNum(num - 1); // 0보다 클 때만 감소
    }
    // 아니면 아무것도 안 함
  };

  return (
    <div>
      <p>
        
        <img 
          src={"src/assets/img/스폰.jpg"} 
          alt="스폰 이미지" 
          style={{ border: "1px solid black", width: "200px" }} 
        />
      </p>
      <p>좋아요 {num}</p>
      <button onClick={() => setNum(num + 1)}>😀</button>
      <button onClick={handleDecrease}>😂</button>
    </div>
  );
};

export default LikeCount2;