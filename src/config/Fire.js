import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDAD9_ze9D1Tq7GjzosyE9FbqisOhl4lKg",
    authDomain: "fir-authentication-903b0.firebaseapp.com",
    databaseURL: "https://fir-authentication-903b0.firebaseio.com",
    projectId: "fir-authentication-903b0",
    storageBucket: "fir-authentication-903b0.appspot.com",
    messagingSenderId: "553291016443",
    appId: "1:553291016443:web:83316391bef205c99da85e"
};

const fire = firebase.initializeApp(config);
export default fire;