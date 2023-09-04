import React, { useContext } from "react";
import style from "./subHeader.module.css";
import { ThemeContext } from "../../components/Reducer/ThemeSwitcher/themeContext"

const SubHeader = ({children}) => {
    const {theme} = useContext(ThemeContext)
    
    return (
        <h2 className={theme === 'dark' ? style.titleDark : style.title}>{children}</h2>
    )
}

export default SubHeader;