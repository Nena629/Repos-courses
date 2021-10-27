import { Task } from "./models/task";

const initialState = [
  new Task(1, "task 1"),
  new Task(2, "task 2"),
  new Task(3, "task 3")
]

const TYPE_TODO_ADD="todo/add"

const TodoReducer = (action={},prevState=initialState ) => {

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

//newstate 1 
let newState1 = 
TodoReducer(
  {
    type : TYPE_TODO_ADD,
    payload : {titleTask:"task 4"}
  }
)
console.log(newState1)

let newState2 = 
TodoReducer(
  {
    type : TYPE_TODO_ADD,
    payload : {titleTask:"task 5"}
  },
  newState1
)
console.log(newState2)

let newState3 = 
TodoReducer(
  {
    type : TYPE_TODO_ADD,
    payload : {titleTask:"task 6"}
  },
  newState2
)
console.log(newState3)