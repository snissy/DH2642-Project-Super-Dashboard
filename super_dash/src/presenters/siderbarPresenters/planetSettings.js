import promiseNoData from "../functionalPresenters/promiseNoDataPresenter"
import usePromise from "../../customHooks/promiseHook"
import {useState, useEffect} from "react"
import SwapiSource from "../../api/starwarsAPI"
import '../../css/sidebar.css'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

function PlanetSettings(props) {
    const [promisePlanet, setPromisePlanet] = useState();
    
    const [planetId, setPlanetId] = useState(1);

    const [planetName, setPlanetName] = useState(props.model.planet.name);

    useEffect( function(){
    
        // Lifecycle: Add observer on mount, remove it on demount.
        function planetObserver(){
            setPlanetName(props.model.planet.name);
        }

        props.model.addObserver(planetObserver);

        // Initial fetch on component creation
        setPromisePlanet(SwapiSource.getSwapiDetails("planets", 1));

        return function(){
            props.model.removeObserver(planetObserver);
        }

    },[])


    // derived states from promise using promiseHook
    const [data, error] = usePromise(promisePlanet);


    // re-render when data arrives from promise
    useEffect(function(){
        if(data)
            props.model.setPlanet(data)
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
    
    // TODO: CREATE SEPARATE VIEW FOR THIS ACCORDING TO GRADING CRITERIAS?
    return (
        <div className="planetSettings">
            <button onClick={()=>updatePlanet(-1)}> <BiLeftArrow/>  </button>
            {promiseNoData(promisePlanet, data, error, "small") || <span>{planetName}</span> }
            <button onClick={()=>updatePlanet(1)}> <BiRightArrow/> </button>
                
        </div>

    );
}

export default PlanetSettings;