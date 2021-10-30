import React from 'react'
import { Provider } from 'react-redux'
import AddTodo from './components/AddTodo'
import FilterTodo from './components/FilterTodo'
import ListTodo from './components/ListTodo'
import store from "./store"

const App = () => {
    return (
        <Provider store={store}>

            <div className="container text-center p-5">
                Hello I'm Really Here 🐰 !!
                <AddTodo />
                <hr />
                <FilterTodo />
                <ListTodo />
            </div>
        </Provider>
    )
}

export default App