import 'bootstrap/dist/css/bootstrap.min.css'
import Gicon from "../resources/google-logo.png"

export function Log(props){

    //if the user is not logged the sign in button appears
    if(!props.islogged){

        return ( <div className="login-buttons">
            <button className="login-provider-button btn btn-success" onClick={props.login}>
                <img src={Gicon} alt="google icon"/>
                Sign In
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
           Sign Out
         </button>
     </div>
    )
}