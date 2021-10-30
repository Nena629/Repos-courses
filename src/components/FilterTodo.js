import { connect } from 'react-redux'
import { TYPE_TODO_UPDATE_FILTER } from '../store/types/todo'

const FilterTodo = ({ updateFilterTodos }) => {
    
    const handleChange=(e)=>{
        updateFilterTodos(e.target.value)
    }   

    return (
        <div>
            <input onChange={handleChange} 
                    type="text" 
                    placeholder="Filter By Title " />
        </div>
    )
}

const FilterTodoStore = connect(null,

    (dispatch) => ({
        updateFilterTodos: queryTitle => dispatch({
            type: TYPE_TODO_UPDATE_FILTER,
            payload: { queryTitle }
        })
    })
)

export default FilterTodoStore(FilterTodo)