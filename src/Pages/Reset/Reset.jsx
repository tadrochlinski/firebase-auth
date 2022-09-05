import React from 'react'
import { useRef, useState } from 'react'
import PageWrapper from '../../Components/PageWrapper'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button'
import { UserAuth } from '../../Context/AuthContext'

function Reset() {
  const emailRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { resetPassword } = UserAuth();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError('')

    try{
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setError('email has been sent')
    }
    catch(e){
      setError('user not found')
    }

    setLoading(false)
  }

  return (
    <PageWrapper>
        <div>
            <h1 style={{fontSize: "2rem"}}>Change Password</h1>
            <form onSubmit={handleSubmit}>
                {error && <span>{error}</span>}
                <input type="text" placeholder="email" ref={emailRef}/>
                <div>
                    <Link to="/login">login page</Link>
                    <Button disabled={loading}>Send email</Button>
                </div>
            </form>
        </div>
    </PageWrapper>
  )
}

export default Reset