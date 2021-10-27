import React from 'react'
import { Task } from '../models/task'

const ItemTodo = ({task= new Task(), onDeleteTask}) => {

   const handleClick =()=>{
   if (window.confirm("Are you sure ?") === false) return
    onDeleteTask(task.id)
   }

    return (
        <li>
            <input
             type="checkbox"
             value={task}
            />
            <span> {task.title} </span>
            <button
            
             onClick={handleClick}
            >DEL</button>
        
        </li>
    )
}

export default ItemTodo
