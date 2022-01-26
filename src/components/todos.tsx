import React from 'react'
import todo from '../Models/Todos'
import TodoItem from './todoItem'
const Todos:React.FC<{items:todo[]; handleUpDelete:(item:String)=>void}>=(props)=>{

return(
    <ul>
       {props.items.map((item)=>{
           return(
               <TodoItem todo={item} onRemove={props.handleUpDelete.bind(null,item.id)} /> 
           )
       })}
    </ul>
)
}
export default Todos