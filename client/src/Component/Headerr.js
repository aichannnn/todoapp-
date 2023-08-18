import React from 'react'
import todologo from '../Assest/todologo.png'
import './Headerr.css'
export default function Headerr() {
  return (
    <div className='container'>
      
      <img src={todologo} height={80} width={80} alt='imgg'></img>
      <h1>TODOER</h1>
    </div>
  )
}
