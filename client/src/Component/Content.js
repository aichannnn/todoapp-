import React from 'react'
import './Headerr.css'
import edit from '../Assest/edit.png'
import del from '../Assest/delete.png'
export default function Content() {
  return (
    <>
    <div className="dis">
         <div className="container4">
      <input type='checkbox' id='check' className='checkk'/>
      <label for='check' className='lab'>Learn React</label>
      </div>
      <div className="contain2">
      <select name="status" id="sta" className='listt'>
        <option value="In-Progress">In-Progress</option>
        <option value="Completed">Completed</option>
        <option value="On Hold">On Hold</option>
    </select>
        <img className='imgs' src={edit} height={30} width={30} alt='edit'></img>
    <img src={del} height={30} width={30} alt='delete'></img>
    
    
      </div>
    </div>
     
      </>
  )
}
