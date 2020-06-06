init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      //update the url link with the previous workout plan id
      location.search = "?id=" + workout._id;
    } else {
      //hide the continue workout btn isf there is no previous workout plans
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

