import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import CreateWorkoutModal from './CreateWorkoutModal'

const CreateWorkout = ({ user, onModalHide, msgAlert }) => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <Fragment>
      <Button variant="primary" onClick={() => {
        setModalShow(true)
      }
      }>
        New Workout
      </Button>

      <CreateWorkoutModal
        msgAlert={msgAlert}
        user={user}
        show={modalShow}
        onHide={() => {
          setModalShow(false)
          onModalHide()
        }}
      />
    </Fragment>
  )
}

export default CreateWorkout
