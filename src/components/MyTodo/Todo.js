import React, {useState} from 'react'
import { AddTodo } from './AddTodo';
import { Todos } from './Todos';

export default function App() {
    const onDelete = (todo)=>{
        console.log("I am onDelete")
        setTodos(todos.filter((e)=>{
            return e!==todo;
        }))
    }
    const addTodo = (title)=>{
        console.log("added", title)
        let sno;
        if(todos.length===0){
            sno = 0;
        }
        else{
            sno = todos[todos.length-1].sno + 1;
        }
        const myTodo = {
            sno: sno,
            title: title
        }
        setTodos([...todos, myTodo]);
        console.log(myTodo)
    }
    const [todos, setTodos] = useState([
        {
            sno: 1,
            title: "Fruits - Apple and Grapes"
          },
          {
            sno: 2,
            title: "Apple",
          }
    ])
    return (
        <div>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} todoHead="Todos List" />
        </div>
    )
}
