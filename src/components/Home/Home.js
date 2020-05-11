import React, { Fragment } from 'react'

const authenticatedOptions = (
  <Fragment>
    <h2>User is authenticated</h2>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <h2>User is NOT authenticated</h2>
  </Fragment>
)

const Home = ({ user }) => (
  <div>
    { user ? authenticatedOptions : unauthenticatedOptions }
  </div>
)

export default Home
