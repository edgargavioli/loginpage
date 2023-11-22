import axios from 'axios'

const API_URL = 'https://localhost:7109/api/User'

const loginService = {
  login: async (email, password) => {
    const userInformation = {
        "email": email,
        "password": password
    }

    try {
        const response = await axios.post(`${API_URL}/login`, userInformation)  
        const token = response.data.token
        if(token != null){
            localStorage.setItem('token', token)
        }
    }catch(error){
        throw new Error('Ocorreu um erro ao fazer login')
    }
  }
}

export default loginService