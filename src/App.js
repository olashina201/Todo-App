import React, { useState } from "react";
import Header from './components/Header'
import Todos from './components/Todos'
import Footer from './components/Footer'

function App() {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)
  
  return (
    <React.Fragment>
      <Header 
        input = {input}
        setInput = {setInput}
        todos = {todos}
        setTodos = {setTodos}
        editTodo = {editTodo}
        setEditTodo = {setEditTodo}
      />
      <Footer 
        todos = {todos}
        setTodos = {setTodos}
        setEditTodo = {setEditTodo}
      />
    </React.Fragment>
  );
}

export default App;
