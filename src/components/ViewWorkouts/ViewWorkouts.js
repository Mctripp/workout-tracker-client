import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import apiUrl from './../../apiConfig'

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
    <li key={workout._id}>
      <Link to={`/workouts/${workout._id}`}>{workout.name}: {workout.date_time}</Link>
    </li>
  ))

  return (
    // change this to accordion
    <Container fluid>
      <h1>All workouts by date (descending)</h1>
      <ul>
        {workoutsJsx}
      </ul>
    </Container>
  )
}

export default ViewWorkouts
