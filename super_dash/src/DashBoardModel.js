class DashBoardModel {

    constructor(tasks = [], char) {
        this.tasks = tasks;
        this.character = char;
        this.character.id = 1;
        // JSON response from Star Wars API 
        /* example: 
        {"name":"Biggs Darklighter","height":"183","mass":"84","hair_color":"black","skin_color":"light",
        "eye_color":"brown","birth_year":"24BBY","gender":"male","homeworld":"http://swapi.dev/api/planets/1/",
        "films":["http://swapi.dev/api/films/1/"],"species":[],"vehicles":[],"starships":["http://swapi.dev/api/starships/12/"],
        "created":"2014-12-10T15:59:50.509000Z","edited":"2014-12-20T21:17:50.323000Z","url":"http://swapi.dev/api/people/9/"}
        */

        this.observers = [];

    }

    setCharacter(json_response){

        // TODO: Make sure it only updates the model if there's an actual character change

        this.character = {};
        this.character.json = json_response;
        this.character.name = json_response.name;
        this.character.height = json_response.height;
        this.notifyObservers();
    }

    addTask(task) { if(task && !this.tasks.includes(task))
                  { this.tasks = [task, ...this.tasks]; }
                    this.notifyObservers();
    }

    removeTask(task) { if(this.tasks.find(t => t === task))
                     { this.tasks = this.tasks.filter(t => t !== task);}
                       this.notifyObservers();}

    addObserver(callback) {
        this.observers = [...this.observers, callback]
    }

    removeObserver(callback) {
        this.observers = this.observers.filter(obs => obs !== callback)
    }

    notifyObservers() {
        this.observers.forEach(callback => {
                try {
                    callback()
                } catch (err) {
                    console.error("Error", err, callback);
                }
            }
        )
    }
}

export default DashBoardModel;