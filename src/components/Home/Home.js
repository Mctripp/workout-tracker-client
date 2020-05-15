import React from 'react'
import AuthHome from './AuthHome'
import UnauthHome from './UnauthHome'
import Container from 'react-bootstrap/Container'

const authenticatedOptions = (user, msgAlert) => (
  <AuthHome
    user={user}
    msgAlert={msgAlert}
  />
)

const unauthenticatedOptions = (
  <UnauthHome />
)

const Home = ({ user, msgAlert }) => (
  <Container fluid>
    { user ? authenticatedOptions(user, msgAlert) : unauthenticatedOptions }
  </Container>
)

export default Home
