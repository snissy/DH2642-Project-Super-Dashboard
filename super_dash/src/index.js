import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DashBoardModel from "./models/DashBoardModel";
import {persistModel} from "./firebase/firebaseModel";
import {signInWithGoogle} from "./firebase/firebase";


const model = new DashBoardModel({name:"Luke Skywalker", height: 20},{name: "Tatooine"}, "Todo")

/*signInWithGoogle();
persistModel(model);*/
ReactDOM.render(
  <React.StrictMode>
    <App model={model}/>
  </React.StrictMode>,
  document.getElementById('root')
);