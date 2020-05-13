import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import EditWorkoutModal from './EditWorkoutModal'

const EditWorkout = ({ match, workout, user }) => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <Fragment>
      <Button variant="primary" onClick={() => {
        setModalShow(true)
      }
      }>
        Edit
      </Button>

      <EditWorkoutModal
        match={match}
        workout={workout}
        user={user}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Fragment>
  )
}

export default EditWorkout
