import React, { useEffect } from 'react'
import './Form.css'

const Form = ({whatsAbout, onSubmit,children}) => {  
  return (
      <div className='background-form'>
          <form className='form' onSubmit={(e)=>onSubmit(e)}>
            <h1>{whatsAbout}</h1>
              {children}
          </form>
      </div>
  )
}

export default Form