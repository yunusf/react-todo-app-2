import React, { useContext } from "react"
import { TodoContext } from "../App"

const TodoItem = ({ todo }) => {
    const getTodoTitleStyle = () => {
        if (todo.completed === true) {
            return { textDecoration: 'line-through' }
        } else {
            return { textDecoration: 'none'}
        }
    }

    const { toggleCompleted, deleteTodo } = useContext(TodoContext)

    return (
        <div style={styles.todoItem}>
            {/* Menambahkan checkbox */}
            <input
                type="checkbox"
                style={styles.checkbox}
                // Jalankan function toggleCompleted ketika checkbox di-klik
                onChange={() => toggleCompleted(todo.id)} //  Memberikan id dari todo sebagai argument
            />
            
            {/* Panggil function getTodoTitleStyle */}
            <p style={ getTodoTitleStyle() }>{ todo.title }</p>

            {/* Tambahkan sebuah button di sini */}
            <button
                onClick={()=>deleteTodo(todo.id)}
                style={styles.button}
            >x</button>
        </div>
    )
}

const styles = {
    todoItem: {
        border: '2px solid #f4f4f4',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
    },
    checkbox: {
        // marginRight: '10px',
        height: '18px',
        width: '18px',
    },
    button: {
        backgroundColor: '#BB0000',
        color: '#fff',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '10px',
    }
}

export default TodoItem