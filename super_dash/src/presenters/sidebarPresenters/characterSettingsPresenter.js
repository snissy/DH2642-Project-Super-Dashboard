import usePromise from "../../customHooks/promiseHook";
import {useState, useEffect} from "react";
import SwapiSource from "../../api/starwarsAPI";
import CharacterSettingsView from "../../views/characterSettingsView";

function CharacterSettings(props) {
    const [promiseCharacter, setPromiseCharacter] = useState();
    
    const [characterId, setCharacterId] = useState(props.model.character.id);

    const [characterName, setCharacterName] = useState(props.model.character.name);

    useEffect( function(){
    
        // When character in model is updated, update characterSettings name in sidebar
        function characterObserver(){
            setCharacterName(props.model.character.name);
        }

        props.model.addObserver(characterObserver);

        return function(){
            props.model.removeObserver(characterObserver);
        }

    },[])

    // derived states from promise using promiseHook
    const [data, error] = usePromise(promiseCharacter);

    // re-render when data arrives from promise
    useEffect(function(){
        if(data)
            props.model.setCharacter(data,characterId);
    },[data])

    /*
        1. Luke Skywalker
        2. C-3PO
        3. R2-D2
        4. Darth Vader
        5. Leia Organa
        10. Obi-Wan Kenobi
        13. Chewbacca
        14. Han Solo
        16. Jabba Desilijic Tiure (aka Jabba the Hutt)
        20. Yoda
    */
    
    let characters = [1,2,3,4,5,10,13,14,16,20]

    function updateCharacter(direction){

        let newId = characterId + direction;

        // If new id is out of bounds, don't update id
        if (newId < 1 || newId > 20){
            // pass
        }
        // If the new number is not in the character array, continue until next valid id
        else if (!characters.includes(newId)){
            while(!characters.includes(newId)){
                newId = newId + direction;
            }
            setCharacterId(newId);
            setPromiseCharacter(SwapiSource.getSwapiDetails("people", newId));
        }
        // If new id is valid, fetch new promise
        else {
            setCharacterId(newId);
            setPromiseCharacter(SwapiSource.getSwapiDetails("people", newId));
        }        
    }
    
    return (
        <div>
            <CharacterSettingsView 
                promise={promiseCharacter}
                data={data}
                error={error}
                updateCharacter={updateCharacter}
                name={characterName}
            />
        </div>
    );
}

export default CharacterSettings;