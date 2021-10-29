import React from 'react'
import { connect } from 'react-redux'
import { TYPE_TODO_DELETE } from '../store/types/todo'
import ItemTodo from './ItemTodo'


//TODOS EST UNE PROPRIETE
const ListTodo = ({todos,deleteTaskById}) => {
    return (
        <ul>
            {todos.map(t=>
            <ItemTodo 
            key={t.id} 
            task={t}
            onDeleteTask={deleteTaskById}
            />)}


        </ul>
    )
}
//SYNTAX SIMPLIFIEE POUR RETOURNER UN OBJET
//UTILISATION GLOBALE FIRST THING IS TO USE STATE

const ListTodoStore =connect(
    // IL FAUT DIRE A CONNECT DU STATE A QUEL COMPOSANT
    //LE STATE QUI CONTIENT LA LISTE
    state =>({todos:state}), 
    dispatch => ({
    //DELETETASKBYID OU ON A UNE VALEUR  ET RAJOUTE UNE FONCTION FLECHEE ET ON RAJOUTE TASKID ET ON MET DISPATCH ON VA RAJOUTER L4ACTION QUI EST UN OBJET QUI EST TYPE ET PAYLOAD
    // TASKID C EST UNE PROPRIETE
    //THE SECOND DISPATCH ITS AN ACTION QUI CONTIENT UN OBJET 
    //liaison 
        deleteTaskById: taskId => dispatch({
          type: TYPE_TODO_DELETE ,
          payload: {taskId}
        
        })
    })

)
export default ListTodoStore(ListTodo)
