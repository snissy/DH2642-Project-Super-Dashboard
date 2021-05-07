import CharacterDashView from "../views/characterDashView";
import {useState, useEffect} from 'react';

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

    function infoClick(event){
        console.log(event.target)
    }

    return <CharacterDashView name = {characterName} infoClick={e=>infoClick(e)}/>
}

export default CharacterDashPresenter;