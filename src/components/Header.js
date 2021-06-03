import React, { useState } from 'react';
import './style.css';
import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg';
import bgdark from '../images/bg-desktop-dark.jpg'
import bglight from '../images/bg-desktop-light.jpg'


function Header({input, setInput, todos , setTodos, editTodo, setEditTodo}) {
    const [mode, setMode] = useState(false)
    const toggle = () => setMode(!mode);


    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, {title: input, completed: false}])
        setInput('');
    }

    return (
        <header className={ mode ? "block header darkmode" : "block header"}>

            <div className="container">

                
                <img src={mode ? bgdark : bglight} alt="" className="bg bg-dark" />

                <h1 className="logo">TODO</h1>

                <button className="btn darkmode-toggle">
                    <img src={moon} onClick={toggle} alt="" />
                </button>

                <button className="btn lightmode-toggle">
                    <img src={sun} alt="" />
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
