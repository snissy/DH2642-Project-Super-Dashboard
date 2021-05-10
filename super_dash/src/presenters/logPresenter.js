import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {logOut, signInWithGoogle, user, auth, getuser} from "../firebase/firebase";
import {Log} from "../views/logView";
import {persistModel} from "../firebase/firebaseModel";
import DashBoardModel from "../DashBoardModel";

export function LogPresenter(props){


    //Boolean state of the user to know if is logged
    const [islogged,setLog] = React.useState(props.model.islogged);
    const [pending, setPending] =  React.useState(true);
    //??? Observer added but not sure if it is necessary
    React.useEffect(function () {
        auth().onAuthStateChanged((user) => {

            console.log( user )
            props.model.setUser(user)
            setLog(props.model.islogged)
            setPending(false)
            if(user) persistModel(props.model);
        });
        props.model.addObserver(()=> setLog(props.model.islogged))
        return props.model.removeObserver(()=> setLog(props.model.islogged))
    }, [])

    //function for login when the button is clicked
    const  handleLoginClick = () => {

        //function from firebase-google
        signInWithGoogle();

    }

    //function to logout when te button is clicked
    const  handleLogoutClick = () => {
        //method from fireabse to logout
        logOut();
    }
    if (pending) return <> Loading...</>
    return(

        <Log    islogged ={islogged}
              login={handleLoginClick}
               logout={handleLogoutClick} />
    )

}