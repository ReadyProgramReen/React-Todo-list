import React, { useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

    const inputRef = useRef();
    const [todoList,setTodoList]=useState([])

    // Add function
    const add =()=>{
        const inputText = inputRef.current.value.trim();

        if(inputText == "") return null;

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete :false,
        }

        setTodoList((prev)=>[...prev,newTodo]);
        inputRef.current.value = "";
    }

    // delete function
    const deleteTodo = (id)=>{
        setTodoList((prvTodo)=>{
            return prvTodo.filter((todo)=>todo.id !== id)
        })
    }


  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex 
    flex-col p-7 min-h-[550px] rounded-xl'>

    {/* title  */}
    <div className="flex items-center mt-7 gap-2">
     <img className ="w-8" src={todo_icon} alt="" />
        <h1 className='text-3xl font-semibold'>Todo List</h1>
    </div>

  
    <div className='flex items-center my-7 bg-gray-400 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
        <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font font-medium'>ADD+</button>
    </div>

    {/* Todo list  */}
    <div>
     {todoList.map((item, index)=>{
        return <TodoItems key ={index} text ={item.text}
        id= {item.id} isComplete={item.isComplete} deleteTodo={deleteTodo}/>
     })}
       

    </div>

    </div>
  )
}

export default Todo