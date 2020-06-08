let db;
// create a new db request for a "workout" database.
const request = indexedDB.open("workout", 1);

request.onupgradeneeded = function (event) {
  // create object store called exercises" and set autoIncrement to true
  const db = event.target.result;
  db.createObjectStore("exercises", { autoIncrement: true });
};

request.onsuccess = function (event) {
  db = event.target.result;

  // check if app is online before reading from db
  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  console.log("Woops! " + event.target.errorCode);
};

function saveExercise(record) {
  // create a transaction on the workout db with readwrite access
  const transaction = db.transaction(["exercises"], "readwrite");

  // access your workout object store
  const store = transaction.objectStore("exercises");

  // add record to your store with add method.
  store.add(record);
}

function checkDatabase() {
  // open a transaction on your exercises db

  const transaction = db.transaction(["exercises"], "readwrite");
  // access your exercises object store

  const store = transaction.objectStore("exercises");
  // get all records from store and set to a variable
  const getAll = store.getAll();

  getAll.onsuccess = async function () {
    if (getAll.result.length > 0) {
      await API.addExerciseBulk(getAll.result);

      // if successful, open a transaction on your exercises db
      const transaction = db.transaction(["exercises"], "readwrite");

      // access your exercises object store
      const store = transaction.objectStore("exercises");

      // clear all items in your store
      store.clear();
    }
  };
}

// listen for app coming back online
window.addEventListener("online", checkDatabase);
