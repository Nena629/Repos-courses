import React from 'react'
import { Provider } from 'react-redux'
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'
import store from "./store"

const App = () => {
    return (
        <Provider store={store}>

            Hello I'm Really Here 🐰 !!
            <AddTodo/>
            <hr />
            <ListTodo />
        </Provider>
    )
}

export default App