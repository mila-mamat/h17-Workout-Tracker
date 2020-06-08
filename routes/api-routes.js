const router = require("express").Router();
const db = require("../models");

//find and return the list of all workouts created
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .sort({
      date: -1,
    })
    .populate("exercises")
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//create a new workout
router.post("/api/workouts", (req, res) => {
  const workout = new db.Workout({
    day: Date.now(),
    exercises: [],
  });
  workout
    .save()
    .then((dbWorkout) => res.status(201).json(dbWorkout))
    .catch((err) => {
      res.status(400).json(err);
    });
});

//add new exercise to a specific workout plan
router.put("/api/workouts/:id", (req, res) => {
  const exercise = new db.Exercise(req.body);
  exercise.save();

  db.Workout.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $push: {
        exercises: exercise._id,
      },
    }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//add indexeddb saved exercise to a specific workout plan
router.put("/api/workouts/bulk/:id", (req, res) => {
  const data = req.body;
  let exerciseID = [];

  data.forEach((exercises) => {
    exercise = new db.Exercise(exercises);
    exercise.save();
    exerciseID.push(exercise._id);
  });

  db.Workout.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $push: {
        exercises: [...exerciseID],
      },
    }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


//get workouts in a range ???
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .sort({
      date: -1,
    })
    .populate("exercises")
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
