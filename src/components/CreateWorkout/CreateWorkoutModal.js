import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import CreateWorkoutForm from './CreateWorkoutForm'
import apiUrl from './../../apiConfig'
import axios from 'axios'

const CreateWorkoutModal = (props) => {
  const [workout, setWorkout] = useState({
    name: '',
    description: '',
    date_time: '',
    isComplete: false,
    user: props.user.email
  })

  // axios(`${apiUrl}/movies/${props.match.params.id}`)
  //   .then(res => setMovie(res.data.movie))
  //   .catch(console.error)

  const handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

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
      .then((res) => console.log(res))
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
        <CreateWorkoutForm
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
