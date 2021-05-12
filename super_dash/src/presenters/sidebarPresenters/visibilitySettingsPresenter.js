import {useState} from "react";
import VisibilitySettingsView from "../../views/visibilitySettingsView";


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
        // Update the models with the new preferences causing observing visibility components to be notified.
        props.model.setPreferences(
            {
                showNews: news,
                showWeather: weather,
                showTodo: todo,
                showCharacter: character
            }
        )
    }

    let newsButtonState = "Hide";
    let weatherButtonState = "Hide";
    let todoButtonState = "Hide";
    let characterButtonState = "Hide";
    if (!newsVisibility)
        newsButtonState = "Show";
    if (!weatherVisibility)
        weatherButtonState = "Show";
    if (!todoVisibility)
        todoButtonState = "Show";
    if (!characterVisibility)
        characterButtonState = "Show";

    return (
        <div>
            <VisibilitySettingsView 
                updatePreferences={updatePreferences}
                news={newsButtonState}
                weather={weatherButtonState}
                todo={todoButtonState}
                character={characterButtonState}
            />
        </div>

    );
}

export default VisibilitySettings;