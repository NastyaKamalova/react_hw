import { forwardRef } from "react";
import style from "./scrollNav.module.css";

const NavButton = ({ article, handleScrollNav }) => {
  return (
    <button 
        className={style.button}
        onClick={() => handleScrollNav(article.id)}
    >{article.head}</button>
  )
}

export default NavButton;

    