import '../css/characterDash.css';

function CharacterInfoView(props) {

    return (
            <div className="infoBox">
                <p>Name: {props.model.character.name}</p>
                <p>Height: {props.model.character.height} cm</p>
                <p>Weight: {props.model.character.mass} kg</p>
                <p>Birth Year: {props.model.character.birth_year}</p>
                <p>Gender: {props.model.character.gender}</p>
                <p>Skin Color: {props.model.character.skin_color}</p>
            </div>
    );
}
export default CharacterInfoView;