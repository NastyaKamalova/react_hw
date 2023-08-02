import React from "react";
import style from "./subHeader.module.css";

const SubHeader = ({children}) => {
    return (
        <h2 className={style.title}>{children}</h2>
    )
}

export default SubHeader;