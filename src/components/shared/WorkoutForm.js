import React from 'react'
import moment from 'moment'

const WorkoutForm = ({ workout, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      placeholder="Workout name"
      value={workout.name}
      name="name"
      onChange={handleChange}
    />

    <label>Description</label>
    <textarea
      placeholder="Description"
      value={workout.description}
      name="description"
      onChange={handleChange}
    />

    <label>Date</label>
    <input
      type="date"
      value={moment(workout.date_time).format('YYYY-MM-DD')}
      name="date"
      onChange={handleChange}
    />

    <label>Time</label>
    <input
      type="time"
      value={moment(workout.date_time).format('HH:mm')}
      name="time"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
  </form>
)

export default WorkoutForm
