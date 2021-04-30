import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, FormControl, Button} from 'react-bootstrap'

function CharacterDashView(props) {
    
    return (
        <div>
            <span>{props.model.character.name}</span>
        </div>

    );
}
export default CharacterDashView;