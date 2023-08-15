import React from "react";
import style from "./packingList.module.css"

const Item = ({packed, title, id, remove, change}) => {
	return (
		<div>
			<input 
				type="checkbox" 
				checked={packed} 
				onChange={(e) => change({id,title,packed:e.target.checked})} 
			/>
			<label>{title}</label>
			<button className={style.button} onClick={() => remove(id)}>Delete</button>
		</div>
	)
}
export default Item;