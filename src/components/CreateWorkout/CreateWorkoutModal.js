import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import WorkoutForm from './../shared/WorkoutForm'
import apiUrl from './../../apiConfig'
import axios from 'axios'
import moment from 'moment'
// import messages from '../AutoDismissAlert/messages'

const CreateWorkoutModal = (props) => {
  const [workout, setWorkout] = useState({
    name: '',
    description: '',
    date_time: moment(Date()).format('YYYY-MM-DDTHH:mm'),
    isComplete: false,
    user: props.user.email
  })

  // const { msgAlert } = props

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

    console.log('user: ' + props.user.email)

    axios({
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      url: `${apiUrl}/workouts`,
      method: 'POST',
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
          Create new workout
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

export default CreateWorkoutModal
