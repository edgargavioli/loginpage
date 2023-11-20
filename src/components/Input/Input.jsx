import React from 'react'
import './Input.css'

const Input = ({type, labelText, placeHolder}) => {
  return (
    <div className='input-div'>
        <label className='label'>{labelText}</label>
        <input type={type} placeholder={placeHolder}/>
    </div>
  )
}

export default Input