async function initWorkout() {
  // retrive workout plans from database
  const lastWorkout = await API.getLastWorkout();
  console.log("Last workout:", lastWorkout);

  //if there are workout plans created before:
  if (lastWorkout) {
    //update the href link of continue workout btn to the latest workout
    document
      .querySelector("a[href='/exercise?']")
      .setAttribute("href", `/exercise?id=${lastWorkout._id}`);

    // retrieve data from last workout plan to render summary
    const workoutSummary = {
      date: formatDate(lastWorkout.day),
      numExercises: lastWorkout.exercises.length,
      ...tallyExercises(lastWorkout.exercises),
    };
    //render summary
    renderWorkoutSummary(workoutSummary);
  }
  // if not previous workout plans: 
  else {
    renderNoWorkoutText();
  }
}

function tallyExercises(exercises) {
  //summaries exercise data inside the last workout plan 
  const tallied = exercises.reduce((acc, curr) => {
    acc.totalDuration = (acc.totalDuration || 0) + curr.duration;
    if (curr.type === "resistance") {
      acc.totalWeight = (acc.totalWeight || 0) + curr.weight;
      acc.totalSets = (acc.totalSets || 0) + curr.sets;
      acc.totalReps = (acc.totalReps || 0) + curr.reps;
    } else if (curr.type === "cardio") {
      acc.totalDistance = (acc.totalDistance || 0) + curr.distance;
    }
    return acc;
  }, {});
  return tallied;
}

function formatDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(options);
}

function renderWorkoutSummary(summary) {
  const container = document.querySelector(".workout-stats");
// create label for each exercise summary
  const workoutKeyMap = {
    date: "Date Started",
    numExercises: "Exercises Performed",
    totalDuration: "Total Workout Duration",
    totalWeight: "Total Weight Lifted",
    totalSets: "Total Sets Performed",
    totalReps: "Total Reps Performed",
    totalDistance: "Total Distance Covered",
  };

  // match and render the label with data
  Object.keys(summary).forEach((key) => {
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    //label
    strong.textContent = workoutKeyMap[key];
    //data
    const textNode = document.createTextNode(`: ${summary[key]}`);

    p.appendChild(strong);
    p.appendChild(textNode);

    container.appendChild(p);
  });
}

//if not previous workout plans in database 
function renderNoWorkoutText() {
  const container = document.querySelector(".workout-stats");
  const p = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = "You have not created a workout yet!";

  p.appendChild(strong);
  container.appendChild(p);
}

initWorkout();
