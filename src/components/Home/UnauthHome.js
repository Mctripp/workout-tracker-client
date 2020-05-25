import React, { Fragment } from 'react'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'

const UnauthHome = () => (
  <Fragment>
    <Jumbotron>
      <h1>Track your progress and stay on schedule.</h1>
      <p>This app is under development with many improvements on the way.
        <br></br>
      Currently, user can sign in to create new workouts and edit their existing ones.
        <br></br>
      I am working on setting up a virtual interactive calendar for an easier interface.
        <br></br>
      Further improvements include:<br></br>
      - Reminders for workouts<br></br>
      - Repeat workouts<br></br>
      - Progress visualization<br></br>
      </p>
    </Jumbotron>
  </Fragment>
)

export default UnauthHome
