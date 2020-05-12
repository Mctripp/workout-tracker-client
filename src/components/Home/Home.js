import React from 'react'
import AuthHome from './AuthHome'
import UnauthHome from './UnauthHome'
import Container from 'react-bootstrap/Container'

const authenticatedOptions = (user) => (
  <AuthHome
    user={user}
  />
)

const unauthenticatedOptions = (
  <UnauthHome />
)

const Home = ({ user }) => (
  <Container fluid>
    { user ? authenticatedOptions(user) : unauthenticatedOptions }
  </Container>
)

export default Home
