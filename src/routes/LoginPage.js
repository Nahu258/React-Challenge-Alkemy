import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import loginService from '../services/login'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    if (window.localStorage.getItem('loggedChallengeUser')) {
      navigate('/')
    }
  }, [navigate])
  
  
  const login = async (e) => { 
    e.preventDefault()
    try {
      const user = await loginService.login({
        email,
        password
      })

      window.localStorage.setItem(
        'loggedChallengeUser', JSON.stringify(user)
      )

      setEmail('')
      setPassword('')
      navigate('/')
    } catch(e) {
      console.log('Error')
      setErrorMessage('Wrong Credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return (
    <LoginForm
      errorMessage={errorMessage}
      email={email}
      password={password}
      handleEmailChange={
        ({target}) => setEmail(target.value)
      }
      handlePasswordChange={
        ({target}) => setPassword(target.value)
      }
      login={login}
    />
  )
}
 