//creat a react component name todoList
import React from 'react';
//Type for functional component
const TodoList: React.FC = () => {
    const todos = [{ id: 't1', text: 'Learn react, redux' }, { id: 't2', text: 'Do project' }, { id: 't3', text: 'do certification' }];
    return (
        //return a userlist
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    )
}

export default TodoList;