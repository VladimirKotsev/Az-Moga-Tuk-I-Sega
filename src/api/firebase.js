const firebaseConfig = {
  apiKey: "AIzaSyC8ihU8oXvFx85Yt8eoM9ZYEiWlXoa2juQ",
  authDomain: "az-moga-tuk-i-sega-e929e.firebaseapp.com",
  databaseURL: "https://az-moga-tuk-i-sega-e929e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "az-moga-tuk-i-sega-e929e",
  storageBucket: "az-moga-tuk-i-sega-e929e.appspot.com",
  messagingSenderId: "480810352077",
  appId: "1:480810352077:web:82dea1f8e47a1691f11884"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var ref = database.ref("Scores");
//functions to read and write data into the database


getTopScores();

export async function getTopScores() {

  let data;

  await ref.once("value").then((snapshot) => {
      data = snapshot.val();
  });

  return data;
}


export async function checkForNewBestScore(score) {
  let scores = await getTopScores();

  const scoresArray = [...Object.entries(scores)];

  let index = scoresArray.findIndex(x => x[1].score < score);

  if (index != -1) {
      //we found new best score
      return true;
  }

  return false;
}

export async function setNewBestRecord(name, score) {

  //logic for removing the worst score
  let scores = await getTopScores();
  const scoresArray = [...Object.entries(scores)];

  let indexOfMinScore = -1;
  let minScore = 8000;

  let count = 0;
  for (const current of scoresArray) {
      if (current[1].score <= minScore) {
          minScore = current[1].score;
          indexOfMinScore = count;
      }
      count++;
  }

  database.ref(`/gameScores/${scoresArray[indexOfMinScore][0]}`).remove();

  var data = {
      name,
      score
  }

  var newData = ref.push();
  newData.set(data);
}


export async function doesNameExist(name) {
  let scores = await getTopScores();

  const scoresArray = [...Object.entries(scores)];

  for (const current of scoresArray) {
      if (current[1].name == name) {
          return true;
      }
  }

  return false;
}
