import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export function EmailView(props){


    //if the user is not logged the sign in button appears
    if(!props.islogged){

        return ( <div className="mt-4 mb-4">
            <strong >Anonymous User</strong>
        </div>)
    }
    //if the user is logged then the log out button will appear
    return(

        <div className="mt-4 mb-4">
            <strong >User</strong>
            <p>{props.model.user.email}</p>
        </div>
    )
}