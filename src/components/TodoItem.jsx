import React from "react"

const TodoItem = ({ todo }) => {
    return (
        // <div style={style}>
        <div style={styles.todoItem}>
            <p>{ todo.title }</p>
        </div>
    )
}

// const style = {
const styles = {
    todoItem: {
        border: '2px solid #f4f4f4',
        fontSize: '24px',
    }
}

export default TodoItem