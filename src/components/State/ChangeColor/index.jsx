import React, {useState} from "react";
import SubHeader from "../../../ui/SubHeader";
import style from "./changeColor.module.css"

function ChangeColor () {
  const [color, setColor] = useState('');
	return (
			<>
				<SubHeader>Change color</SubHeader>
				<label className={style.label}>Change color:
				<input className={style.input} value={color} onChange={(e) => setColor(e.target.value)}/>
				</label>
      	<p className={style.text} style={ {color: color} }>text</p>
			</>
	)
}
export default ChangeColor;

