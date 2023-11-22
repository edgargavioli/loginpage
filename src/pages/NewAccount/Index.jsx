
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form  from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import SignUpService from '../../services/signUpService/SignUpService';
import { toast } from "react-toastify";
import './Index.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        if (username === '' || password === '' || email === '' ) {
            toast.warn('Preencha todos os campos')
            return
        }

        if (username !== '' && password !== '' && email !== '' ) {
            await SignUpService.signUp(username, email, password);
            setUsername('');
            setPassword('');
            setEmail('');
            toast.success('Cadastro realizado com sucesso',{autoClose: 2000})
            setTimeout(() => {
                navigate("/")
            }, 2000)
        }
    } catch (error) {
        console.error(error)
        toast.error('Ocorreu um erro ao fazer login')
    }
  };

  return (
    <div className='signup-page'>
        <Form whatsAbout="Sign Up" onSubmit={(e) => handleSubmit(e)}>
            <Input type="text" labelText="Name" placeHolder="Enter your name..." value={username} setValue={setUsername}/>
            <Input type="password" labelText="Password" placeHolder="Enter your password..." value={password} setValue={setPassword}/>
            <Input type="email" labelText="Email" placeHolder="Enter your email..." value={email} setValue={setEmail}/>
            <Button color={"cyan"} fontSize={"16px"} textColor={"black"} text={"Sign Up"} sizeWidth={"45%"}/>
        </Form>
    </div>
  );
};

export default SignUp;
