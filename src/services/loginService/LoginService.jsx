import axios from 'axios'
import React from 'react'

const API_URL = 'https://localhost:7109/api/User'

const loginService = {
  login: async (email, password) => {
    const userInformation = {
        "email": email,
        "password": password
    }

    console.log(userInformation)

    try {
        const response = await axios.post(`${API_URL}/login`, userInformation)
        console.log(response.data.token)
        const token = response.data.token
        if(token != null){
            localStorage.setItem('token', token)
        }else{
            throw new Error('Não foi possível fazer login, confirá suas credenciais')
        }
    }catch(error){
        throw new Error(error.message)
    }
  }
}

export default loginService