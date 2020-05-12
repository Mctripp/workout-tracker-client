import React from 'react'

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
    <input
      placeholder="Description"
      value={workout.description}
      name="description"
      onChange={handleChange}
    />

    <label>Date & Time</label>
    <input
      type="date"
      placeholder="YYYY-MM-DDTHH:mm:ss"
      value={workout.date_time}
      name="date_time"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
  </form>
)

export default WorkoutForm
