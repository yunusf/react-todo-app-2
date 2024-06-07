import React, { useState } from "react"

// Menerima function addTodo sebagai props
const TodoForm = ({ addTodo }) => {
    // Definisikan state "title"
    const [title, setTitle] = useState('')

    // Definisikan function handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(title) // Teruskan "title" sebagai argument
        setTitle('') // Reset title-nya
    }

    // Definisikan function "handleChangeTitle"
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    // Periksa apakah function "handleChangeTitle" berfungsi
    // console.log(title);

    return (
        <div style={styles.container}>
            <form
                // Panggil function handleSubmit dengan argument "event"
                onSubmit={(event) => handleSubmit(event)}
            >
                <input
                    type="text"
                    placeholder="Add your Todo"
                    style={styles.formInput}
                    value={title}
                    onChange={(event) => handleChangeTitle(event)}
                />
                <button style={styles.button}>Add Todo</button>
            </form>
        </div>
    )
}

const styles = {
    container: {
        marginBottom: '32px',
    },
    formInput: {
        height: '66px',
        width: '70%',
        fontSize: '16px',
        padding: '0 16px',
    },
    button: {
        height: '72px',
        fontSize: '16px',
    },
}

export default TodoForm