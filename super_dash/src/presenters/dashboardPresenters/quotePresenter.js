import QuoteView from "../../views/quoteView";
import {useState, useEffect} from "react";
import QuoteSource from "../../api/quotesAPI";
import usePromise from "../../customHooks/promiseHook";
import promiseNoData from "../functionalPresenters/promiseNoDataPresenter";

function QuotePresenter(props) {
    
    const [quote, setQuote] = useState("");
    const [character, setCharacter] = useState(props.model.character.name);

    const [promise, setPromise] = useState();
    const [data, error] = usePromise(promise);

    // Set up observer so when the character is update the quote is also updated down in the effect hook.
    useEffect( function(){

        function characterObserver(){
            setCharacter(props.model.character.name);
        }
        
        props.model.addObserver(characterObserver);

        setPromise(QuoteSource.getRandomQuote(character,props.model.planet.name))

        return function(){
            props.model.removeObserver(characterObserver);
        }
    },[])

    // New character means fetching a new quote from the API
    useEffect( function(){
        setPromise(QuoteSource.getRandomQuote(character,props.model.planet.name))
    },[character])

    // When data arrives from the API
    useEffect( function(){
        if(data){
            setQuote(data.quote);
        }
    },[data])
    
    return (promiseNoData(promise, data , error) ||
        <QuoteView  quote={quote}
                    character={character}
        />
    )
}

export default QuotePresenter;