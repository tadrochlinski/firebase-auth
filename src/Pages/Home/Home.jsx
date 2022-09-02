import React from 'react'
import Button from '../../Components/Button'
import PageWrapper from '../../Components/PageWrapper'

const Home = () =>{
  return (
    <PageWrapper>
      <div>
        <h1>Home</h1>
        <form>
          <Button>Log out</Button>
        </form>
      </div>
    </PageWrapper>
  )
}

export default Home