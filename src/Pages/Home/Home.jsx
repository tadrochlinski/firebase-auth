import React from 'react'
import Button from '../../Components/Button'
import PageWrapper from '../../Components/PageWrapper'
import { UserAuth } from '../../Context/AuthContext'

const Home = () =>{
  const {user, logout} = UserAuth()

  return (
    <PageWrapper>
      <div>
        <h1>Home</h1>
        <form>
          <p>{user && user.email}</p>
          <Button>Log out</Button>
        </form>
      </div>
    </PageWrapper>
  )
}

export default Home