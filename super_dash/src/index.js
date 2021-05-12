import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DashBoardModel from "./models/DashBoardModel";
import {persistModel} from "./firebase/firebaseModel";
import {auth, signInWithGoogle} from "./firebase/firebase";


const model = new DashBoardModel(['Destroy Deathstar', 'Kill Vader', 'Buy new Lightsaber', 'Save baby Yoda'],{name:"Luke Skywalker", height: 20},{name: "Tatooine"})


auth().onAuthStateChanged((user) => {

            console.log( user )
            model.setUser(user)
            console.log(model.islogged)
            if(user) persistModel(model);
});



ReactDOM.render(
  <React.StrictMode>
    <App model={model}/>
  </React.StrictMode>,
  document.getElementById('root')
);