import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import WorkoutForm from './../shared/WorkoutForm'
import apiUrl from './../../apiConfig'
import axios from 'axios'
// import messages from '../AutoDismissAlert/messages'

const EditWorkoutModal = (props) => {
  const [workout, setWorkout] = useState({
    name: '',
    description: '',
    date_time: '',
    isComplete: false,
    user: ''
  })

  const handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

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
      .catch(console.error)
  }
  return (
    <Modal
      {...props}
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
          workout={props.workout}
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
