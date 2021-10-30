import { Task } from "../../models/task";
import { TYPE_TODO_ADD, TYPE_TODO_DELETE,TYPE_TODO_TOGGLE, TYPE_TODO_UPDATE_FILTER } from "../types/todo";

const initialState = {

    todos: [

        new Task(1, "task 1"),
        new Task(2, "task 2")

    ],
    filterTodosValue: ""

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
                ...prevState,
                todos: [...list],
            }
        }


        case TYPE_TODO_ADD:
            return {
                ...prevState,
                todos: [
                    ...prevState.todos, new Task(
                        prevState.todos.length + 1,
                        action.payload.taskTitle
                    )
                ],


            }
        case TYPE_TODO_DELETE:
            return {
                ...prevState,
                todos: [
                    ...prevState.todos
                        .filter((t) => t.id !== action.payload.taskId)
                ]

            }
        case TYPE_TODO_UPDATE_FILTER:
            return {
                ...prevState,
                filterTodosValue:action.payload.queryTitle
            }


        default: return prevState
    }

}