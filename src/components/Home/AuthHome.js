import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import { Col, Row, Accordion, Card } from 'react-bootstrap'
import AccordionCard from './../shared/AccordionCard'
import CreateWorkout from './../CreateWorkout/CreateWorkout'
import moment from 'moment'

const AuthHome = ({ user }) => {
  const [upcomingWorkouts, setUpcomingWorkouts] = useState([])
  const [pastWorkouts, setPastWorkouts] = useState([])

  const populateWorkouts = () => {
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

  useEffect(() => {
    if (user) {
      populateWorkouts()
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
          <p>When: {moment(workout.date_time).format('LLLL')}</p>
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
          <p>When: {moment(workout.date_time).format('LLLL')}</p>
        </div>
      )}
    />
  ))

  const h3Style = {
    padding: '10px'
  }

  const rowStyle = {
    marginTop: '5px'
  }

  const rowButtonStyle = {
    marginLeft: '15px'
  }

  return (
    <Fragment>
      <Row style={rowButtonStyle}>
        <CreateWorkout
          user={user}
          onModalHide={populateWorkouts}
        />
      </Row>
      <Row style={rowStyle}>
        <Col>
          <Card>
            <h3 style={h3Style}>Upcoming workouts</h3>
            <Accordion>
              {upcomingWorkoutsJsx}
            </Accordion>
          </Card>
        </Col>
        <Col>
          <Card>
            <h3 style={h3Style}>Past workouts</h3>
            <Accordion>
              {pastWorkoutsJsx}
            </Accordion>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default AuthHome
