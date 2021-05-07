import '../css/characterDash.css';

function CharacterInfoView(props) {

    return (
            <div className="infoBox">
                <p>{props.model.character.name}</p>
                <p>{props.model.character.height}</p>
                <p>{props.model.character.mass}</p>
                <p>{props.model.character.gender}</p>
                <p>{props.model.character.skin_color}</p>
            </div>
    );
}
export default CharacterInfoView;