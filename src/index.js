import { createStore } from "redux";
import { Task } from "./models/task";
// PREMIER STATE
const initialState = [
  new Task(1, "task 1"),
  new Task(2, "task 2"),
  new Task(3, "task 3")
]

const TYPE_TODO_ADD="todo/add"

const TodoReducer = (prevState=initialState,action={}) => {

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
    //OR DON'T DO NOTHING
    default:
      return prevState
  }
}

//UTILISATION DE REDUX

const store = createStore(TodoReducer)
//console.log(store.getState())

//SUBSCRIBE TO STORE AND WE DELETE CONSOLELOG avec ce principe pour qu'il le fasse automatiquement 
store.subscribe(()=> console.log(store.getState()))

//ADD NEW TASK 4
store.dispatch({
  type:TYPE_TODO_ADD,
  payload:{titleTask:"task4"}
})

//console.log(store.getState())

//ADD NEW TASK 5
store.dispatch({
  type:TYPE_TODO_ADD,
  payload:{titleTask:"task5"}
})
//console.log(store.getState())


//ADD NEW TASK 6
store.dispatch({
  type:TYPE_TODO_ADD,
  payload:{titleTask:"task6"}
})
//console.log(store.getState())
