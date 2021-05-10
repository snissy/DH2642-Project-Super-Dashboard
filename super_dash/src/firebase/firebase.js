import dotenv from 'dotenv'
import firebase from "firebase/app";
import "firebase/auth";
dotenv.config()

//attributes needed for starting the connection to firebase, these are .env variables so is more secure to not show them
firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
});
/*important variables from firebase:
    - auth: is the library for authorization from firebase
    - googleprovider: is the library which lets the google login
*/
export const auth = firebase.auth;
const googleProvider = new firebase.auth.GoogleAuthProvider


//function for loginwith Google account
export const signInWithGoogle = () => {
    auth().setPersistence(auth.Auth.Persistence.LOCAL)
        .then(() => {

            // In memory persistence will be applied to the signed in Google user
            // even though the persistence was set to 'none' and a page redirect
            // occurred.
            return firebase.auth().signInWithPopup(googleProvider);

        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Code"+ errorCode +"/n + Message:" + errorMessage)
        });
}

//function to logout from firebase
export const logOut = () => {
    auth().signOut().then(()=> {
        console.log('logged out')
    }).catch((error) => {
        console.log(error.message)
    })
}
//method for getting the user
export const getUser = () =>{
    return auth.currentUser;
}
