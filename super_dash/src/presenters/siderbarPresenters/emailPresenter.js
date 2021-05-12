import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {EmailView} from "../../views/emailView.js";
export function EmailPresenter(props){
        const [islogged,setLog] = React.useState(props.model.islogged);
     React.useEffect(function () {

        props.model.addObserver(()=> setLog(props.model.islogged))
        return props.model.removeObserver(()=> setLog(props.model.islogged))
    }, [])

    return(

        <EmailView model = {props.model}
                      islogged = {islogged}/>
    )
}