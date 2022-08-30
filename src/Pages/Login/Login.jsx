import React from 'react'
import { Link } from 'react-router-dom'
import LoginWrapper from './LoginWrapper'
import Button from '../../Components/Button'

const Login = () =>{
  return (
    <LoginWrapper>
      <div>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <div>
            <Link to="../register">Create new account</Link>
            <Button>Log In</Button>
          </div>
        </form>
      </div>
    </LoginWrapper>
  )
}

export default Login