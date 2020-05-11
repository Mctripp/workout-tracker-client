import React from 'react'
import AuthHome from './AuthHome'
import UnauthHome from './UnauthHome'

const authenticatedOptions = (
  <AuthHome />
)

const unauthenticatedOptions = (
  <UnauthHome />
)

const Home = ({ user }) => (
  <div>
    { user ? authenticatedOptions : unauthenticatedOptions }
  </div>
)

export default Home
