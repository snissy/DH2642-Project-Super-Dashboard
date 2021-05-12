import promiseNoData from "../functionalPresenters/promiseNoDataPresenter"
import usePromise from "../../customHooks/promiseHook"
import {useState, useEffect} from "react"
import SwapiSource from "../../api/starwarsAPI"
import '../../css/sidebar.css'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

function CharacterSettings(props) {
    const [promiseCharacter, setPromiseCharacter] = useState();
    
    const [characterId, setCharacterId] = useState(props.model.character.id);

    const [characterName, setCharacterName] = useState(props.model.character.name);

    useEffect( function(){
    
        // Lifecycle: Add observer on mount, remove it on demount.
        function characterObserver(){
            setCharacterName(props.model.character.name);
        }


        /* 
            The only other place where the character can be updated is when
            the models does the initial fetch when booting up. Since this component
            is always created after the models is created, maybe this observer is redundant?

        */
        props.model.addObserver(characterObserver);

        // Initial fetch on component creation
        setPromiseCharacter(SwapiSource.getSwapiDetails("people", characterId));

        return function(){
            props.model.removeObserver(characterObserver);
        }

    },[])


    // derived states from promise using promiseHook
    const [data, error] = usePromise(promiseCharacter);


    // re-render when data arrives from promise
    useEffect(function(){
        if(data)
            props.model.setCharacter(data,characterId)
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
            console.log("Invalid character ID")
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