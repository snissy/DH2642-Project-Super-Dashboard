import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DashBoardModel from "./DashBoardModel";
import {persistModel} from "./firebase/firebaseModel";
import {signInWithGoogle} from "./firebase/firebase";


const model = new DashBoardModel(['Destroy Deathstar', 'Kill Vader', 'Buy new Lightsaber', 'Save baby Yoda'],{name:"Luke Skywalker", height: 20},{name: "Tatooine"})

/*signInWithGoogle();
persistModel(model);*/
ReactDOM.render(
  <React.StrictMode>
    <App model={model}/>
  </React.StrictMode>,
  document.getElementById('root')
);