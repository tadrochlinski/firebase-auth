import React from 'react'
import { useRef } from 'react'
import PageWrapper from '../../Components/PageWrapper'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button'

const Register = () =>{
  const emailRef = useRef();
  const passRef = useRef();
  const passConfRef = useRef();

  return (
    <PageWrapper>
      <div>
        <h1>Signup</h1>
        <form>
          <input type="text" placeholder="email" ref={emailRef}/>
          <input type="password" placeholder="password" ref={passRef}/>
          <input type="password" placeholder="password confirmation" ref={passConfRef}/>
          <div>
            <Link to="../login">Already have an account?</Link>
            <Button>Sign up</Button>
          </div>
        </form>
      </div>
    </PageWrapper>
  )
}

export default Register