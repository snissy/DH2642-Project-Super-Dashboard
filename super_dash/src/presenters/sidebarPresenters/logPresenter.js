import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Log} from "../../views/logView";
import {logOut, signInWithGoogle} from "../../firebase/firebase";

export function LogPresenter(props){

    //Boolean state of the user to know if is logged
    const [islogged,setLog] = React.useState(props.model.islogged);
    
    //??? Observer added but not sure if it is necessary
    React.useEffect(function () {

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
    //if (pending) return <> Loading...</>
    return( 
        <div  className={'mt-3'}>
            <Log islogged ={islogged} login={handleLoginClick} logout={handleLogoutClick} />
        </div>
    )
}