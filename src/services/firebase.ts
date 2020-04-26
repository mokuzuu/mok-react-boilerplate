import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC05hesCtb3KW4DGfB0pXFQI2HA_tO8H8Q",
  authDomain: "autoscale-chat-app.firebaseapp.com",
  databaseURL: "https://autoscale-chat-app.firebaseio.com",
  projectId: "autoscale-chat-app",
  storageBucket: "autoscale-chat-app.appspot.com",
  messagingSenderId: "720075058782",
  appId: "1:720075058782:web:3ee2b462a2d57ac1014ecf",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
