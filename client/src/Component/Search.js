import React from 'react'
import './Headerr.css'
export default function Search() {
  return (
    <div className='container1'>
      <h1>What do you want to do today?</h1>
      <input className='textbox' type='text' placeholder='Learn coding'/>
      <button><span>+</span></button>
    </div>
  )
}
