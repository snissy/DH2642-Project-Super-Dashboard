import {useState} from "react"
import '../css/sidebar.css'


function VisibilitySettings(props) {
    
    const [newsVisibility, setNewsVisibility] = useState(props.model.preferences.showNews);
    const [weatherVisibility, setWeatherVisibility] = useState(props.model.preferences.showWeather);
    const [todoVisibility, setTodoVisibility] = useState(props.model.preferences.showTodo);
    const [characterVisibility, setCharacterVisibility] = useState(props.model.preferences.showCharacter);

    function updatePreferences(component){
        
        // These are used since the setters updates after the re-render.
        let news = newsVisibility;
        let weather = weatherVisibility;
        let todo = todoVisibility;
        let character = characterVisibility;

        if(component === "news"){
            setNewsVisibility(!newsVisibility);
            news = !newsVisibility;
        }
        if(component === "weather"){
            setWeatherVisibility(!weatherVisibility);
            weather = !weatherVisibility;
        }
        if(component === "todo"){
            setTodoVisibility(!todoVisibility);
            todo = !todoVisibility;
        }
        if(component === "character"){
            setCharacterVisibility(!characterVisibility);
            character = !characterVisibility;
        }
        // Update the model with the new preferences causing observing visibility components to be notified.
        props.model.setPreferences(
            {
                showNews: news,
                showWeather: weather,
                showTodo: todo,
                showCharacter: character
            }
        )
    }

    // TODO: CREATE SEPARATE VIEW, EXACTLY LIKE CHARACTER & PLANET SETTINGS
    // TODO2: In the view we can make the buttons prettier, perhaps update text based on current setting. 
    return (
        <div>
            <div>Display News: <button onClick={()=>updatePreferences("news")}> x </button> </div>
            <div>Display Weather: <button onClick={()=>updatePreferences("weather")}> x</button> </div>
            <div>Display To-do list: <button onClick={()=>updatePreferences("todo")}> x </button> </div>
            <div>Display Character: <button onClick={()=>updatePreferences("character")}> x </button> </div>
        </div>

    );
}

export default VisibilitySettings;