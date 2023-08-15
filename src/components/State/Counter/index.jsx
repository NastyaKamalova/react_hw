import React, { useState } from "react";
import SubHeader from "../../../ui/SubHeader";
import style from "./counter.module.css"
function Counter() {
	const [ count, setCount] = useState(0)
	const [plusCount, setPlusCount] = useState(1)
	const [minusCount, setMinusCount] = useState(1)
	
	function plus() {setCount(count + plusCount)}
	function minus() {setCount(count - minusCount)}

	return (
		<div>
			<SubHeader>Counter</SubHeader>
			<div className={style.box}>
				<button className={style.button} onClick={plus}> +{plusCount} </button>
				<input value={count} className={style.inputtext} disabled/>
				<button className={style.button} onClick={minus}> -{minusCount} </button>
			</div>
			<label className={style.label}>  
				Plus counter:
				<input value={plusCount} onChange={(e) => setPlusCount(Number(e.target.value))} className={style.input}/>
			</label>
			
			<label className={style.label}> 
				Minus counter:
				<input value={minusCount} onChange={(e) => setMinusCount(Number(e.target.value))} className={style.input}/>
			</label>
		</div>
	);
}

export default Counter;
