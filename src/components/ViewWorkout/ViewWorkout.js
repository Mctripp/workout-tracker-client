import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import apiUrl from './../../apiConfig'

const ViewWorkout = (props) => {
  const [workout, setWorkout] = useState([])
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    console.log(props)
    if (props.user) {
      axios({
        headers: {
          'Authorization': `Token token=${props.user.token}`
        },
        url: `${apiUrl}/workouts/${props.match.params.id}`
      })
        .then(res => setWorkout(res.data.workout))
        .catch(console.error)
    }
  }, [])

  if (!props.user) {
    return <Redirect to='/home' />
  }

  if (deleted) {
    return <Redirect to='/workouts' />
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      url: `${apiUrl}/workouts/${props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  const workoutJsx = (
    <div>
      <h3>{workout.name}</h3>
      <ul>
        <li>Completed: {workout.isComplete ? 'Yes' : 'No'}</li>
        <li>Description: {workout.description}</li>
        <li>Date: {workout.date_time}</li>
      </ul>
      <Button onClick={handleSubmit} variant='warning'>Delete</Button>
    </div>
  )

  return (
    <Container fluid>
      {workoutJsx}
    </Container>
  )
}

export default ViewWorkout
