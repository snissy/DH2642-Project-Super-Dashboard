import {useState} from "react"
import '../css/sidebar.css'


function VisibilitySettings(props) {
    

    // Har förmodligen en state för varje typ av preference?
    const [newsVisibility, setNewsVisibility] = useState(props.model.preferences.showNews);
    const [weatherVisibility, setWeatherVisibility] = useState(props.model.preferences.showWeather);
    const [todoVisibility, setTodoVisibility] = useState(props.model.preferences.showTodo);
    const [characterVisibility, setCharacterVisibility] = useState(props.model.preferences.showCharacter);

    function updatePreferences(component){
        
        if(component === "news")
            setNewsVisibility(!newsVisibility)
        if(component === "weather")
            setWeatherVisibility(!weatherVisibility)
        if(component === "todo")
            setTodoVisibility(!todoVisibility)
        if(component === "character")
            setCharacterVisibility(!characterVisibility)

        props.model.setPreferences(
            {
                showNews: newsVisibility,
                showWeather: weatherVisibility,
                showTodo: todoVisibility,
                showCharacter: characterVisibility
            }
        )
    }

    
    // TODO: CREATE SEPARATE VIEW, EXACTLY LIKE CHARACTER & PLANET SETTINGS
    return (
        <div>
            
            <div>Display News: <button onClick={()=>updatePreferences("news")}> x{newsVisibility} </button> </div>
            <div>Display Weather: <button onClick={()=>updatePreferences("weather")}> x{weatherVisibility} </button> </div>
            <div>Display To-do list: <button onClick={()=>updatePreferences("todo")}> x{todoVisibility} </button> </div>
            <div>Display Character list: <button onClick={()=>updatePreferences("character")}> x{characterVisibility} </button> </div>
        </div>

    );
}

export default VisibilitySettings;