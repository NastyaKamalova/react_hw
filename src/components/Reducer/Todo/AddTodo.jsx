import React, { useContext, useState } from "react";
import style from "./todo.module.css"
import { ThemeContext } from "../ThemeSwitcher/themeContext";

const AddTodo = ({add}) => {
	const [title, setTitle] = useState("");
	const { theme } = useContext(ThemeContext)

	const preAdd = (e) => {
		add(e, title);
		setTitle("");
	}

	const inputStyle = theme === 'dark' ? style.inputDark : style.input;
	const buttonStyle = theme === 'dark' ? style.buttonDark : style.button;
	return(
		<form className={style.form} onSubmit={(e) => preAdd(e)}>
			<input value={title} className={inputStyle} onChange={(e) => setTitle(e.target.value)}/>
			<button className={buttonStyle}>Add</button>
		</form>
	)
}

export default AddTodo;