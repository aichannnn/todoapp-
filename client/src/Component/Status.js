import React from 'react'
import'./Headerr.css'
export default function Status() {
  return (
    <div className='container2'>
      <input type='checkbox' id='check' className='checkk'/>
      <label for='check' className='lab'>Select All</label>
    <select name="status" id="sta" className='list'>
        <option value="Completed">Completed</option>
        <option value="In-Progress">In-Progress</option>
        <option value="On Hold">On Hold</option>
    </select>
    <div className='contain'>
    <input type="radio" id="all" name="pro" value="all"/>
          <label for="all">ALL</label>
          <input type="radio" id="Completed" name="pro" value="Completed"/>
          <label for="Completed">Completed</label>
          <input type="radio" id="onhold" name="pro" value="onhold"/>
          <label for="onhjold">ONHOLD</label>
    </div>
    </div>
  )
}
