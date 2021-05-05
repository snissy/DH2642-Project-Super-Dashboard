import promiseNoData from "./promiseNoDataPresenter"
import usePromise from "./promiseHook"
import {useState, useEffect} from "react"
import SwapiSource from "../api/starwarsAPI"
import '../css/sidebar.css'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import {Button} from 'react-bootstrap'

function CharacterSettings(props) {
    const [promiseCharacter, setPromiseCharacter] = useState();
    
    const [characterId, setCharacterId] = useState(1);

    const [characterName, setCharacterName] = useState(props.model.character.name);

    useEffect( function(){
    
        // Lifecycle: Add observer on mount, remove it on demount.
        function characterObserver(){
            setCharacterName(props.model.character.name);
        }

        props.model.addObserver(characterObserver);

        // Initial fetch on component creation. When persistence is implemented this will not be necessary?
        setPromiseCharacter(SwapiSource.getSwapiDetails("people", 1));

        return function(){
            props.model.removeObserver(characterObserver);
        }

    },[])


    // derived states from promise using promiseHook
    const [data, error] = usePromise(promiseCharacter);


    // re-render when data arrives from promise
    useEffect(function(){
        if(data)
            props.model.setCharacter(data)
    },[data])

    
    
    function updateCharacter(direction){

        if (characterId + direction < 1 || characterId + direction > 5){
            console.log("Invalid character ID")
        }
        else {
            setCharacterId(characterId+direction)
            setPromiseCharacter(SwapiSource.getSwapiDetails("people", characterId))
        }
        
        // Update index of character array. Modulo is used to wrap number. 
        // const characters = [1,2,3,4,5]
        //setCharacterIndex((characterIndex+direction)%characters.length)
        
    }
    
    // TODO: CREATE SEPARATE VIEW FOR THIS ACCORDING TO GRADING CRITERIAS?
    return (
        <div className="characterSettings">
            {characterId}
            <button onClick={()=>updateCharacter(-1)}> <BiLeftArrow/>  </button>
            {promiseNoData(promiseCharacter, data, error, "small") || <span>{characterName}</span> }
            <button onClick={()=>updateCharacter(1)}> <BiRightArrow/> </button>
                
        </div>

    );
}

export default CharacterSettings;