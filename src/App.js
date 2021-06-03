import React, { useState } from "react";
import Header from './components/Header'
import Drag from "./components/Drag";
import Footer from './components/Footer'

function App() {
  const [mode, setMode] = useState(false)
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
        mode = {mode}
        setMode = {setMode}
      />
      <Footer 
        todos = {todos}
        setTodos = {setTodos}
        setEditTodo = {setEditTodo}
        mode = {mode}
        setMode = {setMode}
      />
      <Drag 
        mode = {mode}
        setMode = {setMode}
      />
    </React.Fragment>
  );
}

export default App;
