import React, { useState } from 'react'
import Todos from './components/Todos'

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

  console.log(todos)

  // Definisikan toggleCompleted di sini
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
    // old way
    /*
      console.log('delete todo');
      const del = delete todos[todoId-1]
      console.log(`todoId$:${todoId}`);
      console.log(todos);
      console.log(`delete: ${del}`);
    */
    
    // try with array filter
    const newTodos = todos.filter((todo) => todo.id !== todoId)

    setTodos(newTodos)
  }

  return (
    <div style={ styles.container }>
      <h1 style={styles.title}>My Todo List</h1>
      
      {/* Teruskan function toggleCompleted ke component Todos */}
      <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />

      {/* Gunakan method map di sini */}
      {/* <p>todo di app.js</p>
      {todos.map((todo) => <p key={todo.id}>id: {todo.id} | {todo.title}</p>)} */}
    </div>
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