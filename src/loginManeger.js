import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";


export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}
export const createUserWithEmailAndPassword = (email, password, first_name, last_name) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = "";
            upDateUserName(first_name, last_name);
            return newUserInfo;
        })
        .catch(error => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            return newUserInfo;
        });
}
const upDateUserName = (first_name, last_name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: first_name + " " + last_name,
    })
        .then(function () {

        })
        .catch(function (error) {
        });
}

//Sign In with Email and Password
export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = "";
            return newUserInfo;
        })
        .catch(error => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            return newUserInfo;
        });
}

// Google Sign In
export const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                name: displayName,
                email: email,
                photo: photoURL,
            };
            return signedInUser;
        })
        .catch(error => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.email = error.email;
            return newUserInfo;
        });
}

// Facebook Sign In
export const facebookSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                name: displayName,
                email: email,
                photo: photoURL,
            };
            return signedInUser;
        })
        .catch(error => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.email = error.email;
            return newUserInfo;
        });
}