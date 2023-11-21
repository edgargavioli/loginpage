import React, { useEffect } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { LoginContext } from '../../Contexts/LoginContext'
import loginService from '../../services/loginService/loginService'
import './Form.css'
import { useNavigate } from 'react-router-dom'

const Form = ({whatsAbout}) => {
  const { email, senha, updateEmail, updateSenha } = React.useContext(LoginContext);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    loginService.login(email, senha)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token != null){
      navigate('/Home')
    }
  }, [localStorage.getItem('token')])
  
  return (
      <div className='background-form'>
          <form className='form' onSubmit={(e)=>handleSubmit(e)}>
            <h1>{whatsAbout}</h1>
              <Input type="email" labelText="Email" placeHolder="Informe seu e-mail..." value={email} setValue={updateEmail}/>
              <Input type="password" labelText="Senha" placeHolder="Informe sua senha..." value={senha} setValue={updateSenha}/>
              <div className='button-div'>
                <Button color="cyan" fontSize="16px" sizeWidth="45%" text="Login" textColor="black" />
              </div>
              <div className='links'>
                <a href="">Or creat a new account</a>
                <a href="">Forget my password</a>
              </div>
              <footer>
                <p><a href="">Terms of use</a> <strong>|</strong> <a href="">Privacy policy</a></p>
              </footer>
          </form>
      </div>
  )
}

export default Form