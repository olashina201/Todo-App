import React, { useState } from 'react';
import './style.css';
import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg';
import bgdark from '../images/bg-desktop-dark.jpg'
import bglight from '../images/bg-desktop-light.jpg'


function Header({input, setInput, todos , setTodos, editTodo, setEditTodo, mode, setMode}) {
    
    const toggle = () => setMode(!mode);

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, {title: input, completed: false}])
        setInput('');
    }

    return (
        <header className={ mode ? "darkmode block header" : "block header"}>
            <div className= "container">
                <img src={mode ? bgdark : bglight} alt="" className="bg bg-dark" />

                <h1 className={ mode ? "darkmode logo" : "logo"}>TODO</h1>

                <button className="btn darkmode-toggle">
                    <img src={mode? sun : moon} onClick={toggle} alt="" />
                </button>
                
                <form  onSubmit={handleSubmit} className="card">
                    <input type="checkbox" name="Add todo" id="addTodo" />
                    <input type="text" placeholder="Create a new todo..." className="todo-input" value={input} onChange= { e => setInput(e.target.value)}  />
                </form>
    
            </div>

        </header>
    )
}

export default Header
