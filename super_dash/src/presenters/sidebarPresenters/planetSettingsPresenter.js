import usePromise from "../../customHooks/promiseHook"
import {useState, useEffect} from "react"
import SwapiSource from "../../api/starwarsAPI"
import CharacterSettingsView from "../../views/characterSettingsView";


function PlanetSettings(props) {
    const [promisePlanet, setPromisePlanet] = useState();
    
    const [planetId, setPlanetId] = useState(props.model.planet.id);

    const [planetName, setPlanetName] = useState(props.model.planet.name);

    useEffect( function(){
    
        // Lifecycle: Add observer on mount, remove it on demount.
        function planetObserver(){
            setPlanetName(props.model.planet.name);
        }

        props.model.addObserver(planetObserver);

        // Initial fetch on component creation
        setPromisePlanet(SwapiSource.getSwapiDetails("planets", planetId));

        return function(){
            props.model.removeObserver(planetObserver);
        }

    },[])


    // derived states from promise using promiseHook
    const [data, error] = usePromise(promisePlanet);


    // re-render when data arrives from promise
    useEffect(function(){
        if(data)
            props.model.setPlanet(data,planetId)
    },[data])

    /*
        1. Tatooine
        2. Alderaan
        3. Yavin IV
        4. Hoth
        5. Dagobah
    */
    
    function updatePlanet(direction){

        // if planet id is valid, fetch new promise
        if (planetId + direction < 1 || planetId + direction > 4){
            console.log("Invalid planet ID")
        }
        else {
            setPlanetId(planetId+direction)
            setPromisePlanet(SwapiSource.getSwapiDetails("planets", planetId+direction))
        }        
    }
    
    // Reusing the CharacterSettingsView since they have same functionalities.
    return (
        <div>
            <CharacterSettingsView 
                promise={promisePlanet}
                data={data}
                error={error}
                updateCharacter={updatePlanet()}
                name={planetName}
            />
        </div>

    );
}

export default PlanetSettings;