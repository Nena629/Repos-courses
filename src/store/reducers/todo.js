import { Task } from "../../models/task";
import { TYPE_TODO_ADD, TYPE_TODO_DELETE, TYPE_TODO_FILTER, TYPE_TODO_TOGGLE } from "../types/todo";

const initialState = {

    todos: [

        new Task(1, "task 1"),
        new Task(2, "task 2")

    ],
    backup: [

        new Task(1, "task 1"),
        new Task(2, "task 2")

    ]
}



export const ReducerToDo = (prevState = initialState, action) => {

    switch (action.type) {
        case TYPE_TODO_TOGGLE: {

            let list = prevState.todos.map(t => {
                if (t.id === action.payload.taskId) {
                    t.isCompleted = !t.isCompleted
                }
                return t
            })

            return {
                todos: [...list],
                backup: [...list]
            }
        }


        case TYPE_TODO_ADD:
            return {
                todos: [
                    ...prevState.todos, new Task(
                        prevState.todos.length + 1,
                        action.payload.taskTitle
                    )
                ],
                backup: [
                    ...prevState.todos, new Task(
                        prevState.length + 1,
                        action.payload.taskTitle
                    )
                ]

            }
        case TYPE_TODO_DELETE:
            return {
                todos: [
                    ...prevState.todos
                        .filter((t) => t.id !== action.payload.taskId)
                ],
                backup: [
                    ...prevState.todos
                        .filter((t) => t.id !== action.payload.taskId)
                ]

            }
        case TYPE_TODO_FILTER:
            {
                if(action.payload.queryTitle===""){
                    return {
                        ...prevState,
                        todos:[...prevState.backup],
                        
                    }
                }else {
                    
                    return {
                        ...prevState,
                        todos:[
                            ...prevState.backup.filter(
                                t =>
                                    t.title.includes(action.payload.queryTitle)
                            )
                        ]
                    }
                }
            }

        default: return prevState
    }

}