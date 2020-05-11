import React from 'react'
import AuthHome from './AuthHome'
import UnauthHome from './UnauthHome'
import Container from 'react-bootstrap/Container'

const authenticatedOptions = (
  <AuthHome />
)

const unauthenticatedOptions = (
  <UnauthHome />
)

const Home = ({ user }) => (
  <Container fluid>
    { user ? authenticatedOptions : unauthenticatedOptions }
  </Container>
)

export default Home
