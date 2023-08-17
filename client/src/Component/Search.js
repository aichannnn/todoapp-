import { useState } from 'react'
import './Headerr.css'
export default function Search() {
  
  return (
    <div className='container1'>
      <h1>What do you want to do today?</h1>
      <input className='textbox' id='myinput' type='text' placeholder='Learn coding'/>
      <button><span>+</span></button>
    </div>
  
  )
}
