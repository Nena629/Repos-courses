import { Task } from "./models/task";

const initialState = [
  new Task(1, "task 1"),
  new Task(2, "task 2"),
  new Task(3, "task 3")
]

const TYPE_TODO_ADD="todo/add"

const TodoReducer = (action={},prevState=initialState ) => {

  switch (action.type) {
   
    case TYPE_TODO_ADD:
      return [
        ...prevState,
        new Task(
          prevState.length + 1,
          action.payload.titleTask
        )
      ]
    default:
      return prevState
  }
}

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