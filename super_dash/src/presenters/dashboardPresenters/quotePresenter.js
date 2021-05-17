import QuoteView from "../../views/quoteView";
import {useState, useEffect} from "react";
import {quotes} from "../../../server/quotes";

function QuotePresenter(props) {
    
    // Code partially borrowed from user "Fransisc" at https://stackoverflow.com/questions/4959975
    function randomQuoteInt() { // min and max included 
        
        // Count number of quotes for the given character.
        let c = 0;
        Object.keys(quotes[props.model.character.name]).forEach(function(key) {

            // Don't count easter egg quotes.
            if (key < 10){
                c += 1;
            }
        });
        
        return Math.floor(Math.random() * (c - 1 + 1) + 1);
    }

    function pickQuote(){

        // Easter eggs: A list of boolean conditions leading to a special quote.

        // Cold robot
        if(props.model.character.name === "C-3PO" && props.model.planet.name === "Hoth")
            return 10;

        // Cold Han
        if(props.model.character.name === "Han Solo" && props.model.planet.name === "Hoth")
            return 10;
            
        // Luke about his home planet
        if(props.model.character.name === "Luke Skywalker" && props.model.planet.name === "Tatooine")
            return 10;

        return randomQuoteInt();
    }
    

    const [quote, setQuote] = useState(quotes[props.model.character.name][pickQuote()]);
    const [character, setCharacter] = useState(props.model.character.name);

    
    useEffect( function(){

        function characterObserver(){
            setCharacter(props.model.character.name);
        }
        
        props.model.addObserver(characterObserver);

        return function(){
            props.model.removeObserver(characterObserver);
        }
    },[])

    useEffect( function(){
        setQuote(quotes[character][pickQuote()]);
    },[character])


    return (
        <QuoteView  quote={quote}
                    character={character}
        />
    )
}

export default QuotePresenter;