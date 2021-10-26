import { Task } from "./models/task";

const initialState = [
  new Task(1, "task 1"),
  new Task(2, "task 2"),
  new Task(3, "task 3")
]

const TodoReducer = (prevState,typeAction, inputAction) => {
  switch (typeAction) {
    case "todo/add":
      return [
        ...prevState,
        new Task(
          prevState.length + 1,
          inputAction.titleTask
        )
      ]
    default:
      return prevState
  }
}

let newState = 
TodoReducer(initialState,"todo/add",{titleTask:"task 4"})
console.log(newState)

newState = 
TodoReducer(newState,"todo/add",{titleTask:"task 5"})
console.log(newState)