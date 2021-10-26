import { Task } from "./models/task";

const state = [
  new Task(1, "task 1"),
  new Task(2, "task 2"),
  new Task(3, "task 3")
]

const TodoReducer = (typeAction, inputAction) => {
  // if (typeAction == "todo/add") {
  //   return [
  //     ...state.todos,
  //     new Task(
  //       state.todos.length + 1,
  //       inputAction.titleTask
  //     )
  //   ]

  // }
  // else if (typeAction == "todo/delete") {

  // }
  // else if (typeAction == "todo/toggle") {

  // } else {
  //   return state;
  // }
  switch (typeAction) {
    case "todo/add":
      return [
        ...state,
        new Task(
          state.length + 1,
          inputAction.titleTask
        )
      ]
    case "todo/delete":
      return {}
    case "todo/toggle":
      return {}
    default:
      return state
  }
}

let newState = TodoReducer("todo/add",{titleTask:"task 4"})

console.log(newState)