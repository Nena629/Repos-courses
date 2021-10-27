import {TYPE_TODO_ADD, TYPE_TODO_DELETE} from "../types/todo"
import { Task } from "../../models/task"

const initialState = [
    new Task(1, "task 1"),
    new Task(2, "task 2"),
    new Task(3, "task 3")
  ]
  
 
  export const TodoReducer = (prevState=initialState,action={}) => {
  
    switch (action.type) {
      //TO ADD 
      case TYPE_TODO_ADD:
        return [
          ...prevState,
          new Task(
            //POUR GENERER L'ID
            prevState.length + 1,
            action.payload.titleTask
          )
        ]

      //TO DELETE
      case TYPE_TODO_DELETE: 
      return[...prevState.filter(t=>t.id !== action.payload.taskId)
      ]
      //OR DON'T DO NOTHING
      default:
        return prevState
    }
  }
  
  