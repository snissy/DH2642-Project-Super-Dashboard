import  {getuser} from "./firebase";
import firebase from "firebase";
export function persistModel(model) {
    let uid = "";
    if(getuser() != null)  uid = getuser().uid + "";
    let loadingFromFirebase = false;  // boolean flag
    model.addObserver(function () {
        if (loadingFromFirebase) return
        else {
            console.log(getuser())
            console.log(uid);
            console.log(model)
            firebase.database().ref("users/" + uid + "/dashboardModel").set({
                planet: model.planet_selected,
                character: model.character_name,
                tasks: model.tasks,
            });
        }
    });

    firebase.database().ref("users/" + uid  + "/dashboardModel").on("value", function (data) {
        loadingFromFirebase = true;
        try {
            if (data.val()) {
                console.log(data.val());
                //model.setCharacter(data.val().character || null);
                //model.setTasks(data.val().tasks || [])
                //model.setPlanet(data.val().planet || null)
            }
        } catch (e) {
            console.log(e);
        } finally {
            loadingFromFirebase = false;
        }

    });
}