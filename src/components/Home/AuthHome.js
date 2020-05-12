import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import { Col, Row, Accordion } from 'react-bootstrap'
import AccordionCard from './../shared/AccordionCard'
import CreateWorkout from './../CreateWorkout/CreateWorkout'

const AuthHome = ({ user }) => {
  const [upcomingWorkouts, setUpcomingWorkouts] = useState([])
  const [pastWorkouts, setPastWorkouts] = useState([])

  useEffect(() => {
    if (user) {
      const today = new Date().toISOString()
      console.log(today)
      axios({
        headers: {
          'Authorization': `Token token=${user.token}`
        },
        url: `${apiUrl}/workouts`
      })
        .then(res => {
          setUpcomingWorkouts(res.data.workouts.filter(workout => {
            return workout.date_time > today
          }))
          setPastWorkouts(res.data.workouts.filter(workout => {
            return workout.date_time < today
          }))
        })
        .catch(console.error)
    }
  }, [])

  const pastWorkoutsJsx = pastWorkouts.map(workout => (
    <AccordionCard
      key={workout._id}
      eventKey={workout._id}
      headerContent={workout.name}
      bodyContent={(
        <div>
          <p>Description: {workout.description}</p>
          <p>When: {workout.date_time}</p>
        </div>
      )}
    />
  ))

  const upcomingWorkoutsJsx = upcomingWorkouts.map(workout => (
    <AccordionCard
      key={workout._id}
      eventKey={workout._id}
      headerContent={workout.name}
      bodyContent={(
        <div>
          <p>Description: {workout.description}</p>
          <p>When: {workout.date_time}</p>
        </div>
      )}
    />
  ))

  return (
    <Fragment>
      The user is signed in!
      <Row>
        <CreateWorkout
          user={user}
        />
      </Row>
      <Row>
        <Col>
          Upcoming workouts will go here
          <Accordion>
            {upcomingWorkoutsJsx}
          </Accordion>
        </Col>
        <Col>
          Completed workouts will go here
          <Accordion>
            {pastWorkoutsJsx}
          </Accordion>
        </Col>
      </Row>
    </Fragment>
  )
}

export default AuthHome
