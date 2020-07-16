import firebase from 'react-native-firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDrEggooc3j88WYsa9lUUFD3mkY73p9w9o",
    authDomain: "srdevops-corona-tracker.firebaseapp.com",
    databaseURL: "https://srdevops-corona-tracker.firebaseio.com",
    projectId: "srdevops-corona-tracker",
    storageBucket: "srdevops-corona-tracker.appspot.com",
    messagingSenderId: "1071012521733",
    appId: "1:1071012521733:web:a68bedc269810a848db96c",
    measurementId: "G-XBT3SG1LPF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;