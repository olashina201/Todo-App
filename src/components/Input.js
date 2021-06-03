import React from 'react';
import './style.css';


function Input({input, setInput, todos , setTodos}) {
    
    return (
        <div className="card">
            <form>
                <input type="checkbox" name="Add todo" id="addTodo" />
                <input type="text" placeholder="Create a new todo..." className="todo-input" value={input} onChange= { e => setInput(e.target.value)} />
             </form>
        </div>
    )
}

export default Input
