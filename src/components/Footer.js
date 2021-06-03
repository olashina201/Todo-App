import React, { useState } from 'react'
import './style.css'

function Footer({todos, setTodos, setEditTodo, mode, setMode}) {
    const [complete, setComplete] = useState(false)
    // setComplete = (todo) => {
    //     setTodos(
    //         todos.map((item) => {
    //             if (item.title === todo.title) {
    //                 return {...item, completed: !item.completed}
    //             }
    //             return item
    //         })
    //     )
    // }
    const handleComplete = ({todo}) => {
        setComplete(
            todos.map((item) => {
                if (item.title === todo.title) {
                    return {...item, completed: item.completed}
                }
                return item
            })
        )
    }

    const handleDelete = ({title}) => {
        setTodos(todos.filter((todo) => todos.title !== title))
    };
    return (
        <footer id="footer">
            <section className={ mode ? "darkmode main" : "main"}>
                <div className="container">
                    <div className="todos header">
                        {todos.map((todo) => (
                            <form className="card">
                                <i><input type="checkbox" name="Add todo" id="addTodo" className={ complete ? 'checked' : '' } /></i>
                                <input type="text" placeholder="Create a new todo..." className="todo-input" value={todo.title} onChange={e => e.preventDefault()} />
                            </form>
                        ))}
                    </div>

                <div className="card controls">
                    <p className="controls__items-left"></p>
                    <div className="controls__filter card">
                        <button className="btn btn-filter active" data-filter-by="all">All</button>
                        <button className="btn btn-filter" data-filter-by="active">Active</button>
                        <button className="btn btn-filter" data-filter-by="completed">Completed</button>
                    </div>
                    <button className="btn Controls__clear-completed">Clear Completed</button>
                </div>
            </div>
        </section>
    </footer>
    )
}

export default Footer
