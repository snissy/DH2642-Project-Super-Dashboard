import promiseNoData from "./promiseNoDataPresenter"
import usePromise from "./promiseHook"
import {useState} from "react"
import SwapiSource from "../api/starwarsAPI"

function CharacterSettings(props) {
    const [promiseCharacter, setPromiseCharacter] = useState();
    const [data, error] = usePromise(promiseCharacter);

    const [characterIndex, setCharacterIndex] = useState(0);

    // The allowed numbers to call from SWAPI 
    const characters = [1,2,3,4,5]
    function next(direction){

        // Update index of character array
        setCharacterIndex((characterIndex+direction)%characters.length)

        // API call based on new number
        setPromiseCharacter(SwapiSource.getSwapiDetails("people", characters[characterIndex]))

    }
    

    return (
        <div >
            <button onClick={()=>next(-1)}> - </button>
            {promiseNoData(promiseCharacter, data, error) || <p>{props.model.character.name}</p> }
            <button onClick={()=>next(1)}> + </button>
                
        </div>

    );
}

export default CharacterSettings;