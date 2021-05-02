import promiseNoData from "./promiseNoDataPresenter"
import usePromise from "./promiseHook"
import {useState, useEffect} from "react"
import SwapiSource from "../api/starwarsAPI"
import '../css/sidebar.css'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import {Button} from 'react-bootstrap'

function CharacterSettings(props) {
    const [promiseCharacter, setPromiseCharacter] = useState();
    
    const [characterIndex, setCharacterIndex] = useState(0);

    // Initial fetch on component creation. When persistence is implemented this will not be necessary?
    useEffect(()=>{
        setPromiseCharacter(SwapiSource.getSwapiDetails("people", 1));
    },[])

    // derived states from promise using promiseHook
    const [data, error] = usePromise(promiseCharacter);

    // update the model
    if(data)
        props.model.setCharacter(data);

    // The allowed numbers to call from SWAPI 
    const characters = [1,2,3,4,5]
    function updateCharacter(direction){

        // Update index of character array. Modulo is used to wrap number. 
        setCharacterIndex((characterIndex+direction)%characters.length)

        // API call based on new number
        setPromiseCharacter(SwapiSource.getSwapiDetails("people", characters[characterIndex]))
    }
    
    // TODO: CREATE SEPARATE VIEW FOR THIS ACCORDING TO GRADING CRITERIAS?
    return (
        <div class="characterSettings">
            <button onClick={()=>updateCharacter(-1)}> <BiLeftArrow/> </button>
            {promiseNoData(promiseCharacter, data, error, "small") || <span>{props.model.character.name}</span> }
            <button onClick={()=>updateCharacter(1)}> <BiRightArrow/> </button>
                
        </div>

    );
}

export default CharacterSettings;