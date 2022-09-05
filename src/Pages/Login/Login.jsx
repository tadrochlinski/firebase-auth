import React from 'react'
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageWrapper from '../../Components/PageWrapper'
import Button from '../../Components/Button'
import { UserAuth } from '../../Context/AuthContext'

const Login = () =>{
  const { login } = UserAuth()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError('');

    try{
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    }
    catch(e){
      setError('wrong email or password')
    }

    setLoading(false)
  }

  return (
    <PageWrapper>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          {error && <div style={{flexDirection: "column", marginBottom: "10px"}}>
            <span style={{marginBottom:"0px"}}>{error}</span>
            <Link to="/changepassword">Forgot password?</Link>
          </div>}
          <input type="text" placeholder="email" ref={emailRef}/>
          <input type="password" placeholder="password" ref={passwordRef}/>
          <div>
            <Link to="../signup">Create new account</Link>
            <Button disabled={loading}>Log In</Button>
          </div>
        </form>
      </div>
    </PageWrapper>
  )
}

export default Login