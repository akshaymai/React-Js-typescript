
import './App.css';
import NewTodo from './components/newTodo';
import Todos from './components/todos'; 
import {useState} from 'react'
import Todo from './Models/Todos';
function App() {

  const [todos,setTodos]=useState<Todo[]>([])

   
  const handleTodo=(item:string)=>{
    const newTodoItem=new Todo(item)
       setTodos((prev)=>prev.concat(newTodoItem))
  }
  const handleDelete=(itemsd:String)=>{
    // setTodos(())
    console.log('jjjjj',itemsd)
    const items=todos.filter((item)=>item.id !== itemsd )
    setTodos(items)
  }
  return (
    <div>
      <NewTodo onAddTodo={handleTodo} />
      <Todos items={todos} handleUpDelete={handleDelete}/>
    </div>
  );
}

export default App;
