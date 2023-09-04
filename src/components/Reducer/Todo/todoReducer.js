let todoId = 3;
const todoReducer = (todos, {type, payload}) => {
    switch(type) {
        case 'added': {
            return [
                ...todos,
                {
                    id: todoId++,
                    title: payload.title,
                    selected: false
                }
            ]
        }
        case 'deleted': {
            return todos.filter(todo => todo.id !== payload.id)
        }
        case 'changed': {
            return todos.map(iterTodo => {
				if (payload.todo.id === iterTodo.id){
					return payload.todo;
				}
				return iterTodo;
			})
        }
        default: {
            throw Error('Неизвестное действие: ' + type);
        };
    }
}

export {todoReducer}
