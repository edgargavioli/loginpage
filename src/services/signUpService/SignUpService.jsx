import axios from "axios";

const API_URL = "https://localhost:7109/api/User";

const signUpService = {
    signUp: async (name, email, password) => {
        const userInformation = {
        name: name,
        email: email,
        password: password,
        }
    
        try {
        const response = await axios.post(`${API_URL}`, userInformation)
        } catch (error) {
        throw new Error("Ocorreu um erro ao fazer login")
        }
    },
}

export default signUpService;