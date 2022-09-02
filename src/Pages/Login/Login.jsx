import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../../Components/PageWrapper'
import Button from '../../Components/Button'

const Login = () =>{
  return (
    <PageWrapper>
      <div>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <div>
            <Link to="../signup">Create new account</Link>
            <Button>Log In</Button>
          </div>
        </form>
      </div>
    </PageWrapper>
  )
}

export default Login