import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const CreateWorkoutModal = (props) => {
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
        <p>
          New workout form goes here.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateWorkoutModal
