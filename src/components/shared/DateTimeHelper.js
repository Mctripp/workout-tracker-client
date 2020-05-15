import moment from 'moment'

const getWorkoutDate = (dateTime) => {
  return moment(dateTime).format('LL')
}

const getWorkoutTime = (dateTime) => {
  return moment(dateTime).format('LT')
}

module.exports = {
  getWorkoutDate,
  getWorkoutTime
}
