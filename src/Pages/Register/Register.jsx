import React from 'react'
import RegisterWrapper from './RegisterWrapper'
import { Link } from 'react-router-dom'

const Register = () =>{
  return (
    <RegisterWrapper>
      <div>
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <div>
            <Link to="../login">Already have an account?</Link>
            <button>Register</button>
          </div>
        </form>
      </div>
    </RegisterWrapper>
  )
}

export default Register