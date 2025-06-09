import React, { useRef, useState } from 'react'

const ImgChangExam = () => {
  const poref = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const images = {
    "스펀지": "https://www.google.com/imgres?q=%EC%8A%A4%ED%8F%B0%EC%A7%80%EB%B0%A5%20&imgurl=https%3A%2F%2Fi.namu.wiki%2Fi%2F5dbYIx9wSf1tIJGRb5NO8-fgK5YWOCMJA2Q-cEpsOOOFPlxhyqAUhhV5Cm87Pnanhb5-TpoXKFs9P2AZDGjFUQ.webp&imgrefurl=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EB%2584%25A4%25EB%25AA%25A8%25EB%25B0%2594%25EC%25A7%2580%2520%25EC%258A%25A4%25ED%258F%25B0%25EC%25A7%2580%25EB%25B0%25A5(%25EB%2584%25A4%25EB%25AA%25A8%25EB%25B0%2594%25EC%25A7%2580%2520%25EC%258A%25A4%25ED%258F%25B0%25EC%25A7%2580%25EB%25B0%25A5)&docid=DPLlUExAJ2mDiM&tbnid=Ognfbb-PW4wAZM&vet=12ahUKEwiSkJ-G6eONAxVslFYBHb0iK_wQM3oECG8QAA..i&w=740&h=461&hcb=2&ved=2ahUKEwiSkJ-G6eONAxVslFYBHb0iK_wQM3oECG8QAA",
    "플랑크": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.turbosquid.com%2Fko%2F3d-models%2Fcharacter-plankton-3d-model-1201018&psig=AOvVaw1giSwhbJ6kLnc0k0C8p69n&ust=1749540931896000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiAh4Hq440DFQAAAAAdAAAAABAE",
  };

  const chang = (e) => {
    e.preventDefault();
    const inputValue = poref.current.value.trim();

    if (images[inputValue]) {
      setImgSrc(images[inputValue]);
    } else {
      alert("일치하는 항목이 없습니다");
      setImgSrc(null);
    }
  };

  // 입력창의 내용을 초기화하고 해당 요소를 선택(focus하는기능)
    keywordRef.current.value= '';
    keywordRef.current.focus();

  return (
    <div>
      <h4>희망하는 사진이 있으신가요?</h4>
      <div>
        <p><input type="text" ref={poref} /></p>
        <p><input type="submit" value="변경" onClick={chang} /></p>
        {imgSrc && (
          <img src={imgSrc} alt="선택한 이미지" style={{ width: '300px', marginTop: '20px' }} />
        )}
      </div>
    </div>
  );
};

export default ImgChangExam;