import React from 'react'
import Form from '../../components/Form/Form'
import { LoginProvider } from '../../Contexts/LoginContext'
import './Index.css'


const Login = () => {

  return (
    <LoginProvider>
      <div className='login-page'>
        <Form whatsAbout="Minha Empresa" />
      </div>
    </LoginProvider>
  )
}

export default Login