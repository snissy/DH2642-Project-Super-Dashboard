import '../css/characterDash.css';

function CharacterDashView(props) {

    let fileNames = {   "Luke Skywalker":"luke-skywalker",
                        "C-3PO":"c3po", 
                        "R2-D2":"r2-d2", 
                        "Darth Vader": "darth-vader",
                    }
    
    return (
            <div className="relative-wrapper">
                <div className="characterAbsolute">
                    <div className="characterBackground">
                        <img src={require('../assets/svg/characterIcons/'+fileNames[props.name]+".svg").default} alt=""/>
                    </div>
                </div>
                <div className="frameAbsolute">
                <img src={require('../assets/svg/characterIcons/characterFrame.png').default} alt=""/>
                </div>
            </div>
      

    );
}
export default CharacterDashView;