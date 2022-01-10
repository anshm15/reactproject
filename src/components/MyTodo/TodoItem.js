import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
            <h4 className='mb-1'>{todo.title}</h4>
            <button className="btn btn-danger btn-sm mb-3" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
