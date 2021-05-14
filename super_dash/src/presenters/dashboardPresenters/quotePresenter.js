import QuoteView from "../../views/quoteView";
import {useState, useEffect} from "react";

function QuotePresenter(props) {
    
    // Would've been nice to implement this with a larger library from an API instead.
    let quotes = {  
        "Luke Skywalker":{
            1:"Your overconfidence is your weakness.",
            2:"You’ll find I’m full of surprises.",
        },
        "C-3PO":{
            1:"Oh, my dear friend. How I’ve missed you."
        },
        "R2-D2":{
            1:"beep boop.", 
        },
        "Darth Vader":{
            1: "No. I am your father.",
            2: "I find your lack of faith disturbing.",
            3: "You don't know the power of the dark side."
        },
        "Leia Organa":{
            1: "Aren’t you a little short for a stormtrooper?",
        },
        "Obi-Wan Kenobi":{
            1:"The Force will be with you. Always.",
        },
        "Chewbacca":{
            1:"GGGWARRRHHWWWW",
            2:"WWWRRRRRRGWWWRRRR",
            3:"RWGWGWARAHHHHWWRGGWRWRW",
        },
        "Han Solo":{
            1:"You know, sometimes I amaze even myself.",
            2:"Let’s keep a little optimism here.",
        },
        "Jabba Desilijic Tiure":{
            1:"You will soon learn to appreciate me.",
        },
        "Yoda":{
            1:"Do. Or do not. There is no try.",
        }
    }

     
    const [quote, setQuote] = useState(quotes[props.model.character.name][1]);
    const [character, setCharacter] = useState(props.model.character.name);

    useEffect( function(){

        function characterObserver(){
            setCharacter(props.model.character.name);
            setQuote(quotes[props.model.character.name][1])
        }
        
        props.model.addObserver(characterObserver);

        return function(){
            props.model.removeObserver(characterObserver);
        }

    },[])

    return (
        <QuoteView  quote={quote}
                    character={character}
        />
    )
}

export default QuotePresenter;