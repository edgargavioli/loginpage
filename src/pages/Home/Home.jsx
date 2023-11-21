import React, { useEffect } from 'react'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if(token == null){
      navigate('/')
    }
  }, [token])

  const handleClick = () => {
    console.log('logout')
    console.log(localStorage.getItem('token')) 
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <div>Home
      <br />
      <Button onClick={handleClick} text="Logout" textColor="black"/>
    </div>
  )
}

export default Home