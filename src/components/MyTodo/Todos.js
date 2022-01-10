import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = ({todoHead, todos, onDelete}) => {
    return (
        <div>
            <h4>{todoHead}</h4>
            {todos.map((todo)=>{
                return <TodoItem todo={todo} onDelete={onDelete}/>
            })}
        </div>
    )
}
