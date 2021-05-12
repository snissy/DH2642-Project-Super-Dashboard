import '../css/sidebar.css';

function VisibilitySettingsView(props) {

    return (
            <div className="">
                <div className="visibilitySettings"><span>Display News:</span><button onClick={()=>props.updatePreferences("news")}> x </button> </div>
                <div className="visibilitySettings"><span>Display Weather:</span><button onClick={()=>props.updatePreferences("weather")}> x</button> </div>
                <div className="visibilitySettings"><span>Display To-do list:</span><button onClick={()=>props.updatePreferences("todo")}> x </button> </div>
                <div className="visibilitySettings"><span>Display Character:</span><button onClick={()=>props.updatePreferences("character")}> x </button> </div>
            </div>
    );
}
export default VisibilitySettingsView;