import React from 'react'
import { useRef, useState } from 'react'
import PageWrapper from '../../Components/PageWrapper'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../Components/Button'
import { UserAuth } from '../../Context/AuthContext'

const Register = () =>{
  const emailRef = useRef();
  const passRef = useRef();
  const passConfRef = useRef();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const { createUser } = UserAuth()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(passRef.current.value === passConfRef.current.value){
      try{
        setLoading(true);
        await createUser(emailRef.current.value, passRef.current.value)
        navigate('/');
      } 
      catch(e){
        console.log(e)
        if(passRef.current.value.length<6) setError('password must be at least 6 char long')
        if(!emailRef.current.value.match(emailPattern)) setError('invalid email')
      }
    }
    else setError('passwords are not the same');
    setLoading(false);
  }

  return (
    <PageWrapper>
      <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          {error && <span>{error}</span>}
          <input type="text" placeholder="email" ref={emailRef}/>
          <input type="password" placeholder="password" ref={passRef}/>
          <input type="password" placeholder="password confirmation" ref={passConfRef}/>
          <div>
            <Link to="../login">Already have an account?</Link>
            <Button disabled={loading}>Sign up</Button>
          </div>
        </form>
      </div>
    </PageWrapper>
  )
}

export default Register