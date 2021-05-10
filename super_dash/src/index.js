import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DashBoardModel from "./models/DashBoardModel";


const model = new DashBoardModel(['Destroy Deathstar', 'Kill Vader', 'Buy new Lightsaber', 'Save baby Yoda'],{name:"Luke Skywalker", height: 177, mass: 77, gender: "male"},{name: "Tatooine"})

ReactDOM.render(
  <React.StrictMode>
    <App model={model}/>
  </React.StrictMode>,
  document.getElementById('root')
);