import {useState} from "react"
import '../css/sidebar.css'


function VisibilitySettings(props) {
    

    // Har förmodligen en state för varje typ av preference?
    const [newsVisibility, setNewsVisibility] = useState(true);
    const [weatherVisibility, setWeatherVisibility] = useState(true);
    const [todoVisibility, setTodoVisibility] = useState(true);

    function updatePreferences(component){
        console.log("In updatePreferences(component), component = " + component)
        if(component === "news")
            setNewsVisibility(!newsVisibility)
        if(component === "weather")
            setWeatherVisibility(!weatherVisibility)
        if(component === "todo")
            setTodoVisibility(!todoVisibility)

        props.model.setPreferences(
            {
                showNews: !newsVisibility,
                showWeather: !weatherVisibility,
                showTodo: !todoVisibility
            }
        )
    }

    

    
    // TODO: CREATE SEPARATE VIEW, EXACTLY LIKE CHARACTER & PLANET SETTINGS
    return (
        <div>
            
            <div>Display news: <button onClick={()=>updatePreferences("news")}> x{newsVisibility} </button> </div>
            <div>Display weather: <button onClick={()=>updatePreferences("weather")}> x{weatherVisibility} </button> </div>
            <div>Display to-do list: <button onClick={()=>updatePreferences("todo")}> x{todoVisibility} </button> </div>

        </div>

    );
}

export default VisibilitySettings;