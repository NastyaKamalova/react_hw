import React, { useState, useRef } from "react";
import style from "./debounced.module.css"
const DebouncedItem = ({item}) => {
    const [cooking, setCooking] = useState(false)

    const cookRef = useRef(null);

    const cook = () => {
        setCooking(true)
        cookRef.current = setTimeout(() => {
            alert(item.message)
            setCooking(false)
        }, 3000)
    }
    const cancelCook = () => {
        setCooking(false)
        clearTimeout(cookRef.current)
        
    }

    return (
        <div className={style.div}>
            <button onClick={cook} className={style.button}>{item.title}</button>
            {
                cooking && (
                    <>
                        {" "} готовится... {" "}
                        <button onClick={cancelCook}>Oтменить</button>
                    </>

                )
            }
        </div>
    )
}

export default DebouncedItem;