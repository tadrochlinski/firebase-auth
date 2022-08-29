import React from 'react'
import { Link } from 'react-router-dom'

const Login = () =>{
  return (
    <>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <div>
          <Link to="../register">Create account</Link>
          <button>Log In</button>
        </div>
      </form>
    </>
  )
}

export default Login