import  {getUser} from "./firebase.js";
import firebase from "firebase";
export function persistModel(model) {
    if (model.islogged) {
        let uid = model.user.uid;
        let loadingFromFirebase = false;  // boolean flag
        let newSession = true;
        model.addObserver(function () {
            if (loadingFromFirebase) return
            if(!model.islogged) return
            else {
                console.log("Firebase observer: Coordinates persisted")
                firebase.database().ref("users/" + uid + "/dashboardModel").set({
                    character: model.character,
                    tasks: model.tasks ,
                    checkedTasks: model.checkedTasks,
                    coordinates: model.coordinates,
                    planet: model.planet
                });
            }
        });

        firebase.database().ref("users/" + uid + "/dashboardModel").on("value", function (data) {
            loadingFromFirebase = true;
            try {
                if (data.val() && newSession) {
                    console.log(data.val());
                    model.setCharacter(data.val().character, data.val().character.id);
                    model.setTasks(data.val().tasks || [], data.val().checkedTasks  || [])
                    model.setPlanet(data.val().planet, data.val().planet.id)
                    model.setAllCoordinates(data.val().coordinates)
                    // We only want to load from firebase once.
                    newSession = false;
                }
            } catch (e) {
                console.log(e);
            } finally {
                loadingFromFirebase = false;
            }

        });
    }
}