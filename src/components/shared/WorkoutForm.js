import React from 'react'
import moment from 'moment'
import Button from 'react-bootstrap/Button'

const WorkoutForm = ({ workout, handleSubmit, handleChange, cancelPath }) => {
  const textareaStyle = {
    width: '100%'
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <br></br>
      <input
        required
        placeholder="Workout name"
        value={workout.name}
        name="name"
        onChange={handleChange}
      />
      <br></br>

      <label>Description</label>
      <br></br>
      <textarea
        required
        style={textareaStyle}
        rows='10'
        placeholder="Description"
        value={workout.description}
        name="description"
        onChange={handleChange}
      />
      <br></br>

      <label>Date: </label>
      <input
        required
        type="date"
        value={moment(workout.date_time).format('YYYY-MM-DD')}
        name="date"
        onChange={handleChange}
      />

      <label>Time: </label>
      <input
        required
        type="time"
        value={moment(workout.date_time).format('HH:mm')}
        name="time"
        onChange={handleChange}
      />
      <br></br>
      <Button type="submit" variant='primary'>Submit</Button>
    </form>
  )
}

export default WorkoutForm
