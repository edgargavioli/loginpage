import React from 'react'
import './Input.css'

const Input = ({type, labelText, placeHolder, value, setValue}) => {


  return (
    <div className='input-div'>
        <label className='label'>{labelText}</label>
        <input 
        type={type} 
        placeholder={placeHolder}
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
    </div>
  )
}

export default Input