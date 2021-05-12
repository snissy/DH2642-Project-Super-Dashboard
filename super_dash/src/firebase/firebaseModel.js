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
                    todoList: model.todoList,
                    coordinates: model.coordinates,
                    planet: model.planet,
                    preferences:model.preferences
                });
            }
        });

            firebase.database().ref("users/" + uid + "/dashboardModel").on("value", function (data) {
                loadingFromFirebase = true;
                try {
                    if (data.val() && newSession) {
                        console.log(data.val());
                        model.setCharacter(data.val().character, data.val().character.id);
                        model.setTasks(data.val().todoList.tasks || [], data.val().todoList.checkedTasks || [])
                        model.setTodoTitle(data.val().todoList.todoTitle || "todo")
                        model.setPlanet(data.val().planet, data.val().planet.id)
                        model.setAllCoordinates(data.val().coordinates)
                        model.setPreferences(data.val().preferences)
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