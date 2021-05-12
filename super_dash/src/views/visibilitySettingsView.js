import '../css/sidebar.css';

function VisibilitySettingsView(props) {

    return (
            <div>
                <div className="visibilitySettings"><span>Display News:</span><button onClick={()=>props.updatePreferences("news")}> {props.news} </button> </div>
                <div className="visibilitySettings"><span>Display Weather:</span><button onClick={()=>props.updatePreferences("weather")}> {props.weather} </button> </div>
                <div className="visibilitySettings"><span>Display To-do list:</span><button onClick={()=>props.updatePreferences("todo")}> {props.todo} </button> </div>
                <div className="visibilitySettings"><span>Display Character:</span><button onClick={()=>props.updatePreferences("character")}> {props.character} </button> </div>
            </div>
    );
}
export default VisibilitySettingsView;