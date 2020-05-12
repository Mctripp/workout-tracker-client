import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import CreateWorkoutModal from './CreateWorkoutModal'

const CreateNewWorkout = () => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <Fragment>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        New Workout
      </Button>

      <CreateWorkoutModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Fragment>
  )
}

export default CreateNewWorkout
