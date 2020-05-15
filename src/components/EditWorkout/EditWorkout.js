import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import EditWorkoutModal from './EditWorkoutModal'

const EditWorkout = ({ match, workout, user, onModalHide, editmsgalert }) => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <Fragment>
      <Button variant="primary" onClick={() => {
        setModalShow(true)
      }
      }>
        Edit
      </Button>
      {workout.name && <EditWorkoutModal
        match={match}
        workout={workout}
        user={user}
        show={modalShow}
        editmsgalert={editmsgalert}
        onHide={() => {
          setModalShow(false)
          onModalHide()
        }}
      />}
    </Fragment>
  )
}

export default EditWorkout
