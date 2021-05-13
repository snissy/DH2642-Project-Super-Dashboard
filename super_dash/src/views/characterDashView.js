import '../css/characterDash.css';
import {BsInfoCircleFill} from 'react-icons/bs';

function CharacterDashView(props) {

    let fileNames = {   "Luke Skywalker":"luke-skywalker",
                        "C-3PO":"c3po", 
                        "R2-D2":"r2-d2", 
                        "Darth Vader":"darth-vader",
                        "Leia Organa":"leia",
                        "Obi-Wan Kenobi":"obi-wan",
                        "Chewbacca":"chewbacca",
                        "Han Solo":"han-solo",
                        "Jabba Desilijic Tiure":"jabba",
                        "Yoda":"yoda"
                    }
    
    return (
            <div>
                    <div className="characterAbsolute">
                        <div className="characterBackground">
                            <img src={require('../assets/svg/characterIcons/'+fileNames[props.name]+".svg").default} alt=""/>
                        </div>
                        
                    </div>
                    <div className="frameAbsolute">
                        <img src={require('../assets/svg/characterIcons/characterFrame.png').default} alt="" draggable="false"/>
                        
                    </div>
                    <span className="infoIcon" onClick={e=>props.infoClick(e)}>
                            <BsInfoCircleFill size="2em"/>
                    </span>
            </div>
      

    );
}
export default CharacterDashView;