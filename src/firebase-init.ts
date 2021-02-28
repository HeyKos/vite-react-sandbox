import firebase from "firebase/app";
import firebaseConfig from "firebase-config";
import "firebase/firestore";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.firestore().settings({ experimentalForceLongPolling: true });
} else {
    console.log("firebase apps already running...");
}

export default firebase;
