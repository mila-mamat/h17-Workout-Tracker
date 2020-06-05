const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  date:{ type: Date, default: new Date().setDate(new Date().getDate()-8) }, 
  type: String,
  name: String,
  weight: Number,
  sets: Number,
  reps: Number,
  distance: Number,
  duration: Number
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
