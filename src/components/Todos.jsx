import React from 'react'
import TodoItem from './TodoItem'

// Menerima function toggleCompleted sebagai sebuah prop
const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div style={styles.container}>
      {/* <h1>This is Todos component</h1> */}
      {
        todos.map((todo) => {
          // load data di todos.js
          {/* return <p key={todo.id}>{ todo.title }</p> */ }

          // Berikan datanya ke TodoItem | data di load di todoitem.js
          // Teruskan function toggleCompleted ke component TodoItem
          return <TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
        })
      }
    </div>
  )
}

const styles = {
  container: {
    width: 'auto',
    margin: 'auto',
  }
}

export default Todos