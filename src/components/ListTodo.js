import React from 'react'
import ItemTodo from './ItemTodo'
import { connect } from 'react-redux'
import { TYPE_TODO_DELETE, TYPE_TODO_TOGGLE } from '../store/types/todo'

const ListTodo = ({ todos, DeleteTask,ToggleTask }) => {



    return (
        <ul>
            {todos.map(t =>
                <ItemTodo
                    key={t.id}
                    task={t}
                    onDelete={DeleteTask}
                    onToggle={ToggleTask}
                />)}
        </ul>
    )
}

const list = connect(

    state => ({ todos: state }),
    dispatch => ({
        DeleteTask: taskId => dispatch({
            type: TYPE_TODO_DELETE,
            payload: { taskId }
        }),
        ToggleTask: taskId => dispatch({
            type: TYPE_TODO_TOGGLE,
            payload: { taskId }
        })
    })
)


export default list(ListTodo)

