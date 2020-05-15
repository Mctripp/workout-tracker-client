import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import moment from 'moment'

const ViewWorkouts = ({ user }) => {
  const [workouts, setWorkouts] = useState([])

  if (!user) {
    return <Redirect to='/home' />
  }

  useEffect(() => {
    if (user) {
      axios({
        headers: {
          'Authorization': `Token token=${user.token}`
        },
        url: `${apiUrl}/workouts`
      })
        .then(res => setWorkouts(res.data.workouts))
        .catch(console.error)
    }
  }, [])

  const workoutsJsx = workouts.map(workout => (
    <Card key={workout._id}>
      <Card.Body>
        <Card.Title>
          <Link to={`/workouts/${workout._id}`}>{workout.name}</Link>
        </Card.Title>
        <Card.Text>
          <b>What: </b>{workout.description.substring(0, 30)}...<br></br>
          <b>When: </b>{moment(workout.date_time).format('LLLL')}
        </Card.Text>
      </Card.Body>
    </Card>
  ))

  return (
    // change this to accordion
    <Container fluid>
      <h2>All workouts by date (descending)</h2>
      {workoutsJsx}
    </Container>
  )
}

export default ViewWorkouts
