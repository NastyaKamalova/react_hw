import React, { useState } from "react";
import style from "./packingList.module.css"

const AddItem = ({add}) => {
    const [title, setTitle] = useState("");
    const addHandler = () => {
        if (title) {
            add(title);
            setTitle("")
        }
    }
    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className={style.input}/> 
            <button onClick={addHandler} className={style.button}>Add</button>
        </div>
    )
}
export default AddItem;