import React from 'react'
import Button from '../../Components/Button'
import PageWrapper from '../../Components/PageWrapper'
import { UserAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Home = () =>{
  const {user, logout} = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () =>{
    try{
      await logout()
      navigate('/login')
    }
    catch(e){
      console.log(e.message)
    }
  }

  return (
    <PageWrapper>
      <div>
        <h1>Home</h1>
        <form>
          <p>{user && user.email}</p>
          <Button onClick={handleLogout}>Log out</Button>
        </form>
      </div>
    </PageWrapper>
  )
}

export default Home