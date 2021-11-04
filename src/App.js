import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState()
    const [updatedTask, setUpdatedTask] = useState({})

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos/")
            .then(res => setTodos(res.data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post("https://jsonplaceholder.typicode.com/todos",
                {
                    userId: 1,
                    id: null,
                    title: task,
                    completed: true
                })
            .then(res => alert("Task " + res.data.id + " : added successfully 😄"))
    }

    const deleteTask = (idTask) => {

        axios
            .delete("https://jsonplaceholder.typicode.com/todos/" + idTask)
            .then(res => alert("Task " + idTask + " : deleted 😰"))
    }

    //server comm
    const handleSubmitEdit=(e)=>{
        e.preventDefault()
        axios.put("https://jsonplaceholder.typicode.com/todos/"+updatedTask.id,
        updatedTask)
        .then(res=> alert("task udpated with title : "+res.data.title))
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="p-2 text-center">
                <input type="text" placeholder="title"
                    onChange={
                        (e) => setTask(e.target.value)} />
                <button
                    type="submit">add task for user 1</button>
            </form>

            <form
                onSubmit={handleSubmitEdit}
                className="p-2 text-center">
                <input type="text" placeholder="edit task"
                    onChange={(e) => setUpdatedTask(
                        {...updatedTask,title:e.target.value}
                    )} 
                        value={updatedTask.title}
                />
                <button
                    type="submit">Edit Task </button>
            </form>
            <hr />
            <ul>
                {todos.filter(t=>t.id<10).map(t =>
                    <li>{t.title}
                        <button
                            onClick={() => deleteTask(t.id)}>delete</button>
                        <button
                            onClick={()=> setUpdatedTask(t)}>Edit my Task</button>

                    </li>)}
            </ul>
        </div>
    )
}

export default App