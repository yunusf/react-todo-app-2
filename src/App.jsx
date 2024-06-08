import React, { useState, createContext } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

export const TodoContext = createContext()

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  const toggleCompleted = (todoId) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updateTodos)
  }

  const deleteTodo = (todoId) => {   
    const newTodos = todos.filter((todo) => todo.id !== todoId)

    setTodos(newTodos)
  }

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updateTodos = todos.concat(newTodo)
    setTodos(updateTodos)
  }

  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo}}>
      <div style={ styles.container }>
        <h1 style={styles.title}>My Todo List</h1>

        <TodoForm addTodo={addTodo} /> {/* Teruskan function addTodo sebagai props */}
        
        {/* Teruskan function toggleCompleted ke component Todos */}
        <Todos
          todos={todos}
          /* old way
            toggleCompleted={toggleCompleted} tidak diperlukan lagi 
            deleteTodo={deleteTodo} tidak diperlukan lagi
          */
        />
      </div>
    </TodoContext.Provider>
  )
}

const styles = {
  container: {
    padding: '12px',
    width: '500px',

    margin: '10px 450px',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: '36px',
  }
}

export default App