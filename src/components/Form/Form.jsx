import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './Form.css'


const Form = ({whatsAbout}) => {
  return (
      <div className='background-form'>
          <form className='form'>
            <h1>{whatsAbout}</h1>
              <Input type="email" labelText="Email" placeHolder="Informe seu e-mail..." />
              <Input type="password" labelText="Senha" placeHolder="Informe sua senha..." />
              <div className='button-div'>
                <Button color="cyan" fontSize="16px" sizeWidth="45%" text="Login" textColor="black" />
              </div>
              <a href="">Forget my password</a>
              <footer>
                <p><a href="">Terms of use</a> <strong>|</strong> <a href="">Privacy policy</a></p>
              </footer>
          </form>
      </div>
  )
}

export default Form