 import React from 'react'
import Todo from '../Models/Todos'

 const TodoItem: React.FC<{ todo: Todo; onRemove:()=>void }>=(props)=>{
     return <li onClick={props.onRemove}>{props.todo.text}</li>
 }
 export default TodoItem