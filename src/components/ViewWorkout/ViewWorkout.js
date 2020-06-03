import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import EditWorkout from './../EditWorkout/EditWorkout'
import moment from 'moment'
import messages from './../AutoDismissAlert/messages'

const ViewWorkout = (props) => {
  const [workout, setWorkout] = useState([])
  const [deleted, setDeleted] = useState(false)
  const [workoutLoaded, setWorkoutLoaded] = useState(false)

  const populateWorkout = () => {
    axios({
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      url: `${apiUrl}/workouts/${props.match.params.id}`
    })
      .then(res => setWorkout(res.data.workout))
      .then(() => setWorkoutLoaded(true))
      .catch(console.error)
  }

  useEffect(() => {
    if (props.user) {
      populateWorkout()
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
      .then(() => props.msgAlert({
        heading: 'Delete Workout Success',
        message: messages.deleteWorkoutSuccess,
        variant: 'success'
      }))
      .catch(console.error)
  }

  const editSubmitMsg = () => {
    props.msgAlert({
      heading: 'Edit Workout Success',
      message: messages.editWorkoutSuccess,
      variant: 'success'
    })
  }

  const cardStyle = {
    padding: '10px'
  }

  const rowStyle = {
    marginLeft: '15px'
  }

  const workoutJsx = (
    <Card style={cardStyle}>
      <Card.Header><h2>{workout.name}</h2></Card.Header>
      <Card.Text>
        <b>Description: </b>{workout.description}<br></br>
        <b>Date: </b>{moment(workout.date_time).format('LLLL')}<br></br>
        <b>Completed: </b>{workout.isComplete ? 'Yes' : 'No'}
      </Card.Text>
      <Row style={rowStyle}>
        <EditWorkout editmsgalert={editSubmitMsg} workout={workout} user={props.user} match={props.match} variant="primary" onModalHide={populateWorkout}>
          Edit
        </EditWorkout>
        <Button onClick={handleSubmit} variant='warning'>Delete</Button>
      </Row>
    </Card>
  )
  if (workoutLoaded) {
    return (
      <Container fluid>
        {workoutJsx}
      </Container>
    )
  } else {
    return (
      <h3>Loading...</h3>
    )
  }
}

export default ViewWorkout
