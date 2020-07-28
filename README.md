# h17-Workout-Tracker

<br />
<p align="center">

<img src="https://avatars2.githubusercontent.com/u/59339564?v=4"  alt="profile picture" width="150" height="150">

<h2 align="center">Workout Tracker</h2>

<h3 align="center">
 Node, Express, MongoDB, Mongoose, indexedDB

</h3>
<br />
</p>


## Table of Contents
* [Project Description](#project-description)
* [App URL](#app-url)
* [Usage](#usage)
* [Installation](#installation)
* [Badges](#badges)
* [Contributing](#contributing)
* [License](#license)



## Project Description
This is a simple version of web interface for tracking daily workout.

```
As a user
I want to be able to view create and track daily workouts. 
I want to be able to log multiple exercises in a workout on a given day. 
I should also be able to track the name, type, weight, sets, reps, and duration of exercise. 
If the exercise is a cardio exercise, I should be able to track my distance traveled.
```


## App URL
 Link to website: https://workout-tracker-36.herokuapp.com/
 
## Usage
1. Createing a workout and add exercises for a new day
<img src="https://github.com/mila-mamat/h17-Workout-Tracker/blob/master/gif/create-workout.gif"  width="700" height="400">


2. Continously add exercises to an existing workout
<img src="https://github.com/mila-mamat/h17-Workout-Tracker/blob/master/gif/continue-workout.gif"  width="700" height="400">

3. View graphic summary of daily workouts
<img src="https://github.com/mila-mamat/h17-Workout-Tracker/blob/master/gif/Screen%20Shot%202020-06-08%20at%206.37.43%20PM.png"  width="700" height="400">

4. Save exercise to indexedDB if the app is offline
<img src="https://github.com/mila-mamat/h17-Workout-Tracker/blob/master/gif/indexdb.gif"  width="700" height="400">

## Installation
### Prerequisites
  node.js  
  MongoDB

### Installing and running 
  1. Clone the repo 
  2. Install NPM packages through command-line
 ```
 npm install 
```  
  3. Run the server.js in command-line
 ```
 nodemon server.js
 ```
 
 4. Open http://localhost:3000/ on browser.
 

## Badges
![node](https://img.shields.io/node/v/latest?style=plastic)
![code size](https://img.shields.io/github/languages/code-size/mila-mamat/h17-Workout-Tracker)
![License](https://img.shields.io/github/license/mila-mamat/h17-Workout-Tracker)
![Language count](https://img.shields.io/github/languages/count/mila-mamat/h17-Workout-Tracker)

## Contributing
 Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 
 
 Please make sure to update tests as appropriate.

## License
Distributed under the MIT License. See `LICENSE` for more information.
