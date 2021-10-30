import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TYPE_TODO_ADD } from '../store/types/todo'

const AddTodo = ({addNewTask}) => {
    
    const [titleTask, setTitleTask] = useState("")
    
    //CLICK
    const handleClick = ()=>{
        //valider les donnees 
        if(titleTask==="") alert("shouldnt be empty 😈")
        else {
            addNewTask(titleTask)
            setTitleTask("")
        }
    }
    //CHANGE
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
//NULL ON NE VEUT PAS RECUPERER LES DONNEES MAIS PLUTOT LES ACTIONS 
//UNE FONCTION A DEUX PARAMETRES DONEES ET ACTIONS 
//ADDNEWTASK C EST UNE LIAISON ET C EST UNE PROPRIETE

const AddTodoStore = connect(null,
    (dispatch)=>({
        addNewTask:taskTitle=>dispatch({
            type:TYPE_TODO_ADD,
            payload:{taskTitle}
        })
    })
)
// ADDNEWTASK ON LA RECUPERE DU ADDTODO
// LA PROPRIETE ET LE COMPOSANT = store

export default AddTodoStore(AddTodo)