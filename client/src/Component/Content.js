import React,{useEffect, useState} from 'react'
import axios from 'axios';
import './Headerr.css'
import edit from '../Assest/edit.png'
import del from '../Assest/delete.png'
export default function Content() {
  const[todo, setTOdo] = useState([])
  const getTodos = async()=>{
    try{
      const response = await fetch('http://localhost:8001/todoss')
      const data = await response.json()
      setTOdo(data)
    }catch(err){
        console.error(err)
    }
    console.log(todo)
  }
  useEffect(()=>{
    // axios.get('http://localhost:8001/todoss')
    // .then(response => setTOdo(response.todo))
    // .catch(error => console.error('Error fetching data:'.error))
    // console.log(todo)
    getTodos()
  },[])
  
  if (!todo) {
    return <p>Loading...</p>;
  }
  return (
    <>
    <div className="dis">
      <div className="container4 myDiv">
      <ul className='myUL'>
        {todo && todo.map((item)=>(
      <li>
      <input type='checkbox' id='check' className='checkk'/>
      
        <label for='check' className='lab' key={item.id}>{item.title}</label>
      </li>
      ))}
      </ul>
      </div>
         <div className="contain2 myDiv">
      <ul className='myUL'>
      {todo && todo.map((item)=>(
        <li>
      <select name="status" id="sta" className='listt'>
        <option value="In-Progress" key={item.id}>{item.progress}</option>
        {/* <option value="Completed">Completed</option>
        <option value="On Hold">On Hold</option> */}
    </select>
        <img className='imgs' src={edit} height={30} width={30} alt='edit'></img>
    <img src={del} height={30} width={30} alt='delete'></img>
    </li>
     ))}
    </ul>
      </div>
      </div>
    
      </>
  )
}
