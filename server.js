const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

// Assign Express global middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});


// const campusLibrary = new db.Workout({'day':Date.now(),'exercises':[] })
// const out = new db.Exercise({
//   day: new Date().setDate(new Date().getDate()-10),

//       type: "resistance",
//       name: "Bicep Curl",
//       duration: 30,
//       weight: 90,
//       reps: 10,
//       sets: 4
// })
// out.save()

//   const out2 = new db.Exercise({
//     day: new Date().setDate(new Date().getDate()-10),

//         type: "resistance",
//         name: "Bicep Curl",
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4

//   })
//   out2.save()
//   .then(async () => {

//       campusLibrary.exercises.push(out._id, out2._id)
//       campusLibrary
//       .save()
//     })

//     campusLibrary
//   .save()
//   .then(dbLibrary => console.log(dbLibrary))
//   .catch(({ message }) => console.log(message))




// routes
app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
