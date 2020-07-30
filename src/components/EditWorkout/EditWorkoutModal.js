import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import WorkoutForm from './../shared/WorkoutForm'
import apiUrl from './../../apiConfig'
import axios from 'axios'

const EditWorkoutModal = (props) => {
  const [workout, setWorkout] = useState({
    name: props.workout.name,
    description: props.workout.description,
    date_time: props.workout.date_time,
    isComplete: props.workout.isComplete,
    user: props.workout.user
  })

  const handleChange = event => {
    let updatedField = { [event.target.name]: event.target.value }
    if (event.target.name === 'date') {
      let updateValue = workout.date_time
      updateValue = event.target.value + updateValue.substring(10)
      updatedField = { date_time: updateValue }
    }
    if (event.target.name === 'time') {
      let updateValue = workout.date_time
      updateValue = updateValue.substring(0, 11) + event.target.value
      updatedField = { date_time: updateValue }
    }

    const editedWorkout = Object.assign({}, workout, updatedField)

    setWorkout(editedWorkout)
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      url: `${apiUrl}/workouts/${props.match.params.id}`,
      method: 'PATCH',
      data: { workout }
    })
      .then(() => props.onHide())
      .then(() => props.editmsgalert())
      .catch(console.error)
  }
  return (
    <Modal
      onHide={props.onHide}
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit workout
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <WorkoutForm
          workout={workout}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath='/'
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditWorkoutModal
