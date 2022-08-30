import React from 'react'
import Button from '../../Components/Button'
import HomeWrapper from './HomeWrapper'

const Home = () =>{
  return (
    <HomeWrapper>
      <div>
        <h1>Home</h1>
        <form>
          <Button>Log out</Button>
        </form>
      </div>
    </HomeWrapper>
  )
}

export default Home