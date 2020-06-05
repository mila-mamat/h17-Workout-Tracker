const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
  day:Date,
  totalDuration:Number,
  numExercises: Number,
  exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout
