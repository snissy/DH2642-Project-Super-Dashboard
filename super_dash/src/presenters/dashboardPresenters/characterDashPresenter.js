import CharacterDashView from "../../views/characterDashView";
import CharacterInfoPresenter from "./characterInfoPresenter";
import Visible from "../functionalPresenters/visibilityPresenter";
import {useState, useEffect} from 'react';
import '../../css/characterDash.css';

function CharacterDashPresenter(props) {

    const [characterName, setCharacterName] = useState(props.model.character.name);
    const [visibleInfoClass, setVisibleInfoClass] = useState("hidden");

    // Lifecycle: Add observer on mount, remove it on demount.
    useEffect( function(){
        function characterObserver(){
            setCharacterName(props.model.character.name);
        }
        
        props.model.addObserver(characterObserver);

        return function(){
            props.model.removeObserver(characterObserver);
        }

    },[])



     // handler for when the information icon is clicked
    function infoClick(event){

        if (visibleInfoClass === "hidden"){
            setVisibleInfoClass("")
        }
        else {
            setVisibleInfoClass("hidden")
        }   
    }

    return (
        <div className="noSelect">
            <CharacterDashView name = {characterName} infoClick={e=>infoClick(e)}/>
            <div className={visibleInfoClass}>
                <CharacterInfoPresenter model={props.model}/>
            </div>
        </div>
    );
}

export default CharacterDashPresenter;