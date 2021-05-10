import  {getUser} from "./firebase.js";
import firebase from "firebase";
export function persistModel(model) {
    let uid= model.user.uid;
    let loadingFromFirebase = false;  // boolean flag
    model.addObserver(function () {
        if (loadingFromFirebase) return
        else {
            console.log(model.user.uid)
            console.log(uid);
            console.log(model)
            firebase.database().ref("users/" + uid + "/dashboardModel").set({
                //planet: model.planet,
                character: model.character,
                tasks: model.tasks,
                coordinates: model.coordinates
            });
        }
    });

    firebase.database().ref("users/" + uid  + "/dashboardModel").on("value", function (data) {
        loadingFromFirebase = true;
        try {
            if (data.val()) {
                console.log(data.val());
                model.setCharacter(data.val().character, data.val().character.id);
                model.setTasks(data.val().tasks || [])
             //   model.setPlanet(data.val().planet )
            }
        } catch (e) {
            console.log(e);
        } finally {
            loadingFromFirebase = false;
        }

    });
}