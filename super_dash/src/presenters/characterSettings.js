import promiseNoData from "./promiseNoDataPresenter"
import usePromise from "./promiseHook"
import {useState, useEffect} from "react"
import SwapiSource from "../api/starwarsAPI"
import '../css/sidebar.css'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

function CharacterSettings(props) {
    const [promiseCharacter, setPromiseCharacter] = useState();
    
    const [characterId, setCharacterId] = useState(1);

    const [characterName, setCharacterName] = useState(props.model.character.name);

    useEffect( function(){
    
        // Lifecycle: Add observer on mount, remove it on demount.
        function characterObserver(){
            setCharacterName(props.model.character.name);
        }


        /* 
            The only other place where the character can be updated is when
            the model does the initial fetch when booting up. Since this component
            is always created after the model is created, maybe this observer is redundant? 

        */
        props.model.addObserver(characterObserver);

        // Initial fetch on component creation
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

    /*
        1. Luke Skywalker
        2. C-3PO
        3. R2-D2
        4. Darth Vader
        5. Leia Organa
    */
    
    function updateCharacter(direction){

        // if character id is valid, fetch new promise
        if (characterId + direction < 1 || characterId + direction > 4){
            console.log("Invalid character ID")
        }
        else {
            setCharacterId(characterId+direction)
            setPromiseCharacter(SwapiSource.getSwapiDetails("people", characterId+direction))
        }        
    }
    
    // TODO: CREATE SEPARATE VIEW FOR THIS ACCORDING TO GRADING CRITERIAS?
    return (
        <div className="characterSettings">
            <button onClick={()=>updateCharacter(-1)}> <BiLeftArrow/>  </button>
            {promiseNoData(promiseCharacter, data, error, "small") || <span>{characterName}</span> }
            <button onClick={()=>updateCharacter(1)}> <BiRightArrow/> </button>
                
        </div>

    );
}

export default CharacterSettings;