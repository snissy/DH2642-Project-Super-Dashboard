import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Gicon from "../resources/google-logo.png"
import '../css/sidebar.css';

export function Log(props){


    //if the user is not logged the sign in button appears
    if(!props.islogged){

        return ( <div className="login-buttons">
            <button id={"log-button"} className="login-provider-button btn btn-info" onClick={props.login}>
                <img src={Gicon} alt="google icon"/>
                <span style={{color: "black"}}> Sign In</span>                
            </button>
        </div>)
    }
    //if the user is logged then the log out button will appear
    return(

     <div className="logout-buttons">

         <button className="logout-provider-button btn btn-warning" onClick={props.logout}>
            <img
                src={Gicon}
                alt="google icon"
            />
           Log Out
         </button>
     </div>
    )
}