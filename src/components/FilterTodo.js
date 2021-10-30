import { connect } from 'react-redux'
import { TYPE_TODO_FILTER } from '../store/types/todo'

const FilterTodo = ({ filterTaskByTitle }) => {
    
    const handleChange=(e)=>{
        filterTaskByTitle(e.target.value)
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
        filterTaskByTitle: queryTitle => dispatch({
            type: TYPE_TODO_FILTER,
            payload: { queryTitle }
        })
    })
)

export default FilterTodoStore(FilterTodo)