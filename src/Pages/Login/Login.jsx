import React from 'react'
import { Link } from 'react-router-dom'
import LoginWrapper from './LoginWrapper'

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
            <button>Log In</button>
          </div>
        </form>
      </div>
    </LoginWrapper>
  )
}

export default Login