import { initializeApp } from "firebase/app";

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
const app = initializeApp(firebaseConfig);

export {app};