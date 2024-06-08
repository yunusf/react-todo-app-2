import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({ todos }) => {
  return (
    <div style={styles.container}>
      {
        todos.map((todo) => {
          // Berikan datanya ke TodoItem | data di load di todoitem.js
          return <TodoItem
            key={todo.id}
            todo={todo}
          />
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