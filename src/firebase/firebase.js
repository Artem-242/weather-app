
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
   apiKey: "AIzaSyDYVHNFyOvtx9kj5OkrkKQzkI7R8HaogYs",
   authDomain: "weather-app-24c45.firebaseapp.com",
   projectId: "weather-app-24c45",
   storageBucket: "weather-app-24c45.appspot.com",
   messagingSenderId: "1027254892743",
   appId: "1:1027254892743:web:13f248cb244b4dae17a6e2",
   measurementId: "G-TECQGPQXSD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };