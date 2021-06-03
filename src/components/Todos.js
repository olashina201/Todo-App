import React from 'react'
import './style.css'

const Todos = ({todos, setTodos}) => {
    return (
        <div>
            {/* {todos.map((todo) => (
                <form className="card">
                    <input type="checkbox" name="Add todo" id="addTodo" />
                    <input type="text" placeholder="Create a new todo..." className="todo-input" value={todo.title} onChange={e => e.preventDefault()} />
                </form>
            ))} */}
        </div>
    )
}

export default Todos
