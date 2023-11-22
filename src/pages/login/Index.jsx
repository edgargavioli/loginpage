import React, {useContext, useState, useEffect} from 'react'
import Form from '../../components/Form/Form'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { LoginContext } from '../../Contexts/LoginContext'
import loginService from '../../services/loginService/loginService'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import './Index.css'


const Login = () => {
  const { email, senha, updateEmail, updateSenha } = useContext(LoginContext) 
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginService.login(email, senha);
      updateEmail('')
      updateSenha('')
      const token = localStorage.getItem('token');
      
      if(token != null){
        navigate('/Home')
      }

      if (token == null && email !== '' && senha !== '') {
        toast.error('Não foi possível fazer login, confira suas credenciais')
        return
      }
      
      if (email === '' || senha === '') {
        toast.warn('Preencha todos os campos')
        return
      }
    } catch (error) {
      console.error(error)
      toast.error('Ocorreu um erro ao fazer login')
    }
  }

  const handleClickNewAccount = () => {
    navigate('/NewAccount')
  }


  return (
      <div className='login-page'>
        <Form whatsAbout="Minha Empresa" onSubmit={(e) => handleSubmit(e)}>
          <Input type="email" labelText="Email" placeHolder="Informe seu e-mail..." value={email} setValue={updateEmail}/>
          <Input type="password" labelText="Senha" placeHolder="Informe sua senha..." value={senha} setValue={updateSenha}/>
          <div className='button-div'>
            <Button color="cyan" fontSize="16px" sizeWidth="45%" text="Login" textColor="black" />
          </div>
          <div className='links'>
            <Button onClick={handleClickNewAccount} color="transparent" fontSize="13px" text="Or creat a new account" textColor="#fff"/>
            <a href="">Forget my password</a>
          </div>
          <footer>
            <p><a href="">Terms of use</a> <strong>|</strong> <a href="">Privacy policy</a></p>
          </footer>
        </Form>
      </div>
  )
}

export default Login