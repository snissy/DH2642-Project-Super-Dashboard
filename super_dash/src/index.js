import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DashBoardModel from "./DashBoardModel";


const model = new DashBoardModel(['Destroy Deathstar', 'Kill Vader', 'Buy new Lightsaber', 'Save baby Yoda'])

ReactDOM.render(
  <React.StrictMode>
    <App model={model}/>
  </React.StrictMode>,
  document.getElementById('root')
);