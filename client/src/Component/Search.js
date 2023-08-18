import { useState } from 'react'
import './Headerr.css'
import axios from 'axios'
export default function Search() {
      const[todos, setTodos] = useState([])
      const[newTodo, setNewTodo] = useState('')  
      
      const addToDo = async ()=>{
        if(newTodo.trim()===''){
          return;
        }

        try{
          const response = await axios.post('http://localhost:8001/todos',{title: newTodo})
          const newTodoData = response.data
          const updateTodos = [...todos, newTodoData]
          setTodos(updateTodos)
          setNewTodo('')
        }catch(err){
          console.error(err)
        }

      
      
      setNewTodo('')  
    }
  return (
    <>
    <div className='container1'>
      <h1>What do you want to do today?</h1>
      <input className='textbox' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} id='myinput' type='text' placeholder='Learn coding'/>
      <button onClick={addToDo}><span>+</span></button>
    </div>
  </>
  )
}
