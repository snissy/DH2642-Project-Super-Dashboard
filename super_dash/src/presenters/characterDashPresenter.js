import CharacterDashView from "../views/characterDashView";
import React from 'react';

function CharacterDashPresenter(props) {

    // TODO: Add observer to model so that the data in this component updates when the settings change.

    return <CharacterDashView model={props.model}/>
}

export default CharacterDashPresenter;