import React, {useState} from "react";
import style from "./toggleImg.module.css";
import SubHeader from "../../../ui/SubHeader";


function ToggleBgImg() {
  const [statusActive, setStatusActive] = useState('img'); 
  return (
    <>
     <SubHeader>Toggle Image</SubHeader>
      <div 
        className={`${style.background} ${statusActive === 'bg' ? style.background__active : ""}`}
        onClick={() => setStatusActive('bg')}
      >
          <img
              className={`${style.picture} ${statusActive === 'img' ? style.picture__active : ""}`}
              alt="Rainbow houses in Kampung Pelangi, Indonesia"
              src="https://i.imgur.com/5qwVYb1.jpeg"
              onClick={(e) => {
                e.stopPropagation()
                setStatusActive('img')
            }}
          />
      </div>
    </>

  );
}

  export default ToggleBgImg;