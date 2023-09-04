import React, { useContext, useReducer, useState } from "react";
import SubHeader from "../../../ui/SubHeader";
import initData from "./initData";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { todoReducer } from "./todoReducer";
import { ThemeContext } from "../ThemeSwitcher/themeContext";
import style from "./todo.module.css"

function Todo() {
	const {theme} = useContext(ThemeContext)
	
	const [todos, dispatch] = useReducer(todoReducer, initData)

	const addTodo = (e, title) => {
		e.preventDefault()
		if (title) {
			dispatch({type: 'added', payload: {title}})
		}
	}

	const deleteTodo = (id) => {
		dispatch({type: 'deleted', payload: {id}})
	}

	const changeTodo = (todo) => {
		dispatch({type: 'changed', payload: {todo}})
	}

	return (
		<div className={theme === 'dark' ? style.darkWrapper : style.lightWrapper}>
			<SubHeader>Todo + reducer</SubHeader>
			<AddTodo add={addTodo}/>
			{
				todos.map(todo => (
					<TodoItem changeTodo={changeTodo} deleteTodo={deleteTodo} todo={todo} key={todo.id}/>
				)) 
			}	
		</div>
	);
  }
  
  export default Todo;



















