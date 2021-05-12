import '../css/sidebar.css';
import promiseNoData from "../presenters/functionalPresenters/promiseNoDataPresenter";
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

function CharacterSettingsView(props) {

    return (
            <div className="characterSettings">
                <button onClick={()=>props.updateCharacter(-1)}> <BiLeftArrow/>  </button>
                {promiseNoData(props.promise, props.data, props.error, "small") || <span>{props.name}</span> }
                <button onClick={()=>props.updateCharacter(1)}> <BiRightArrow/> </button>           
            </div>
    );
}
export default CharacterSettingsView;