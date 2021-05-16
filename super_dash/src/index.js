import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DashBoardModel from "./models/DashBoardModel";
import {persistModel} from "./firebase/firebaseModel";
import {auth} from "firebase/app";
import {loadBackgrounds} from "./helpFunctions/loadBackgrounds";


const model = new DashBoardModel({name:"Luke Skywalker", height: 20, mass:77,hair_color:"blond",skin_color:"fair",eye_color:"blue",birth_year: "19BBY",gender: "male"},{name: "Tatooine"}, "Todo")

auth().onAuthStateChanged((user) => {
            
            //console.log( user )
            model.setUser(user)
            //console.log(model.islogged)
            if(user) persistModel(model);
});


// preload backroundImages
loadBackgrounds();

ReactDOM.render(
  <React.StrictMode>
    <App model={model}/>
  </React.StrictMode>,
  document.getElementById('root')
);