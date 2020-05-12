import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import CreateWorkoutModal from './CreateWorkoutModal'

const CreateWorkout = ({ user }) => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <Fragment>
      <Button variant="primary" onClick={() => {
        console.log(user)
        setModalShow(true)
      }
      }>
        New Workout
      </Button>

      <CreateWorkoutModal
        user={user}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Fragment>
  )
}

export default CreateWorkout