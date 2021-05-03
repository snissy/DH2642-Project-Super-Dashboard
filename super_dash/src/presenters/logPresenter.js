import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {logOut, signInWithGoogle, user} from "../firebase/firebase";
import {Log} from "../views/logView";

export function LogPresenter(props){


    //Boolean state of the user to know if is logged
    const [islogged,setLog] = React.useState(props.model.islogged);

    //??? Observer added but not sure if it is necessary
    React.useEffect(function () {
        props.model.addObserver(()=> setLog(props.model.islogged))
    }, [])

    //function for login when the button is clicked
    const  handleLoginClick = () => {

        //function from firebase-google which returns a promise
        signInWithGoogle().then((res) => {
            props.model.setUser(user())
            setLog(props.model.islogged);
            console.log(res)
        }).catch((error) => {
            console.log(error.message)
        })

    }

    //function to logout when te button is clicked
    const  handleLogoutClick = () => {
        //method from fireabse to logout
        logOut();
        props.model.setUser(null);
        setLog(props.model.islogged);
    }
    return(

        <Log    islogged ={islogged}
              login={handleLoginClick}
               logout={handleLogoutClick} />
    )

}