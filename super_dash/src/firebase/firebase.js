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
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
});
/*important variables from firebase:
    - auth: is the library for authorization from firebase
    - googleprovider: is the library which lets the google login
*/
export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()


//function for loginwith Google account
export const signInWithGoogle = () => {
    return auth.signInWithPopup(googleProvider)
}

//function to logout from firebase
export const logOut = () => {
    auth.signOut().then(()=> {
        console.log('logged out')
    }).catch((error) => {
        console.log(error.message)
    })
}
//method for getting the user
export const user = () =>{
    return auth.currentUser;
}