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
      {workout.name && <EditWorkoutModal
        match={match}
        workout={workout}
        user={user}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />}
      <Button onClick={() => { console.log(workout) }}>Print workout</Button>
    </Fragment>
  )
}

export default EditWorkout
