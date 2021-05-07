import CharacterDashView from "../views/characterDashView";
import {useState, useEffect} from 'react';
import { propTypes } from "react-bootstrap/esm/Image";

function CharacterDashPresenter(props) {

   
    const [characterName, setCharacterName] = useState(props.model.character.name);

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
        console.log("hej")
        //<CharacterInfoView model={props.model}/>
    }

    return <CharacterDashView name = {characterName} infoClick={e=>infoClick(e)}/>
}

export default CharacterDashPresenter;