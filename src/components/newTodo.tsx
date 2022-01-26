import React,{useRef} from 'react'

const NewTodo: React.FC<{onAddTodo:(text:string)=>void}>=(props)=>{
   const todoTextInputRef=useRef<HTMLInputElement>(null)
    const handleSubmit=(e:React.FormEvent)=>{
          e.preventDefault();

          const enterText=todoTextInputRef.current!.value
          if(enterText?.trim().length === 0){
              return
          }else{
              props.onAddTodo(enterText)
               todoTextInputRef.current!.value=""
          }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='text'>Todo Text</label>
            <input type="text" id='text' ref={todoTextInputRef}/>
            <button>Submit</button>
        </form>
        </>
    )
}
export default NewTodo;