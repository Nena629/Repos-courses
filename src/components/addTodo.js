import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TYPE_TODO_ADD } from '../store/types/todo'

const AddTodo = ({addNewTask}) => {
    
    const [titleTask, setTitleTask] = useState("")
    
    //click
    const handleClick = ()=>{
        //valider les donnees 
        if(titleTask==="") alert("shouldnt be empty 😈")
        else {
            addNewTask(titleTask)
            setTitleTask("")
        }
    }
    //change
    const handleChange = (e)=>{
        setTitleTask(e.target.value)
    }
    return (
        <div>
            <input value={titleTask} onChange={handleChange} type="text" placeholder="add task " />
            <button onClick={handleClick}>Save</button>
        </div>
    )
}

const AddTodoStore = connect(null,
    (dispatch)=>({
        addNewTask:taskTitle=>dispatch({
            type:TYPE_TODO_ADD,
            payload:{taskTitle}
        })
    })
)

export default AddTodoStore(AddTodo)