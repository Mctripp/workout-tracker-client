import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import EditWorkoutModal from './EditWorkoutModal'

const EditWorkout = (props) => {
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
        match={props.match}
        workout={props.workout}
        user={props.user}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Fragment>
  )
}

export default EditWorkout
