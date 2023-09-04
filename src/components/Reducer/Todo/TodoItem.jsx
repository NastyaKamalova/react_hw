import React, { useState, useContext } from "react";
import style from "./todo.module.css";
import { ThemeContext } from "../ThemeSwitcher/themeContext";

function TodoItem({todo, deleteTodo, changeTodo}) { 
	const [isEdit, setIsEdit] = useState(false);
	const [title, setTitle] = useState(todo.title);
	const { theme } = useContext(ThemeContext)

	const selectChangeTodo = (e) => {
		changeTodo(
			{
				id:todo.id,
				title:todo.title,
				selected: e.target.checked
			}
		)
	}

	const save = () => {
		changeTodo(
			{
				id: todo.id,
				title,
				selected: todo.selected
			}
		)
		setIsEdit(false)
	}

	const cancel = () => {
		setTitle(todo.title);
		setIsEdit(false)
	}

	const InputTodoStyle = theme === 'dark' ? style.inputTodoDark : style.inputTodo;
	const todoStyle = (todo.selected && !isEdit) 
											? `${InputTodoStyle} ${style.inputChecked}` 
											: InputTodoStyle;

	const buttonStyle = theme === 'dark' ? style.buttonDark : style.button;


	return (
		<div  className={style.div}>
			<input checked={todo.selected} onChange={(e) => selectChangeTodo(e)} type="checkbox"/>
			<label>
				<input 
					value={title} 
					className={todoStyle}
					disabled={!isEdit} 
					onChange={(e) => setTitle(e.target.value)} 
				/>
			</label>
			{
				isEdit 
					? (
						<>
							<button onClick={save} className={buttonStyle}>save</button>
							<button onClick={cancel} className={buttonStyle}>cancel</button>
						</>
					)
					: <button onClick={() => setIsEdit(true)} className={buttonStyle}>edit</button>
			}
			
			<button onClick={() => deleteTodo(todo.id)} className={buttonStyle}>delete</button>

		</div>
	)

	
}

export default TodoItem