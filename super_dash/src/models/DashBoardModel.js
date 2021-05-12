class DashBoardModel {

    constructor(tasks = [], char, plan) {
        this.tasks = tasks;
        this.checkedTasks = []
        this.character = char;
        this.character.id = 1;   // not used atm. but probably needed to do the correct api call on reload

        this.planet = plan;
        this.planetURL = require('../assets/img/'+ plan.name.replace(/\s/g, '') + '.png').default;
        this.planet.id = 1;      // not used atm. but probably needed to do the correct api call on reload


        this.preferences = {
            showWeather: true,
            showNews: true,
            showTodo: true,
            showCharacter: true
        }

        this.observers = [];
        this.coordinates = {
            todo: {
                x:0,
                y:0
            },
            weather: {
                x:0,
                y:0
            },
            news:{
                x:0,
                y:0
            }
        }
        this.user = null;
        this.islogged = false;
        this.userPosition = {latitude: null, longitude: null, geoName: null };
    }

    setUserPosition(lat, long, geoName){

        this.userPosition= {latitude: lat, longitude: long, geoName: geoName};

        this.notifyObservers();
    }
  
    setUser (currentUser){
        this.user = currentUser;
        if(currentUser == null) this.islogged = false;
        else this.islogged = true;
        this.notifyObservers();
    }

    setPreferences(pref){
        this.preferences.showCharacter = pref.showCharacter;
        this.preferences.showNews = pref.showNews;
        this.preferences.showWeather = pref.showWeather;
        this.preferences.showTodo = pref.showTodo;
        this.notifyObservers();
    }

    setCharacter(json_response, id){
        // TODO: Make sure it only updates the models if there's an actual character change

        this.character = {};
        this.character.name = json_response.name;
        this.character.height = json_response.height;
        this.character.mass = json_response.mass;
        this.character.hair_color = json_response.hair_color;
        this.character.skin_color = json_response.skin_color;
        this.character.eye_color = json_response.eye_color;
        // Measured in BBY and ABY, meaning "Years before/after the destruction of the first Death Star".
        this.character.birth_year = json_response.birth_year;
        this.character.gender = json_response.gender;
        this.character.id = id ;
        // JSON response from Star Wars API
        /* example:
        {"name":"Biggs Darklighter","height":"183","mass":"84","hair_color":"black","skin_color":"light",
        "eye_color":"brown","birth_year":"24BBY","gender":"male","homeworld":"http://swapi.dev/api/planets/1/",
        "films":["http://swapi.dev/api/films/1/"],"species":[],"vehicles":[],"starships":["http://swapi.dev/api/starships/12/"],
        "created":"2014-12-10T15:59:50.509000Z","edited":"2014-12-20T21:17:50.323000Z","url":"http://swapi.dev/api/people/9/"}
        */
        this.notifyObservers();
    }

    setPlanet(json_response, id){

        // TODO: Make sure it only updates the models if there's an actual planet change

        this.planet = {};
        this.planet.name = json_response.name;
        this.planetURL = require('../assets/img/' + json_response.name.replace(/\s/g, '') + '.png').default;
        this.planet.id = id;
        this.notifyObservers();
    }
    setCoordinates(comp, deltaX, deltaY) {
        // delatX and deltaY are change in offset, thus we increase the amount of offset
        console.log("Adding deltaX=" + deltaX)
        console.log("Adding deltaY=" + deltaY)

        this.coordinates[comp].x = this.coordinates[comp].x + deltaX;
        this.coordinates[comp].y = this.coordinates[comp].y + deltaY;

        // We call observers to update
        this.notifyObservers();
        return this.coordinates;
    }
    setAllCoordinates(coordinates) {this.coordinates = coordinates; this.notifyObservers();}

    setTasks(tasks, checkedTasks){this.tasks = tasks; this.checkedTasks = checkedTasks; this.notifyObservers();}
    addTask(task) { if(task && !this.tasks.includes(task))
                  { this.tasks = [...this.tasks, task];}
                    this.notifyObservers();
    }

    removeTask(task) { if(this.tasks.find(t => t === task))
                     { this.tasks = this.tasks.filter(t => t !== task);}
                       this.notifyObservers();}

    clearFinishedTasks() {
        this.checkedTasks = [];
        this.notifyObservers()
    }

    checkTask(task) {

        if(!this.checkedTasks.find(t => t === task)) {
            this.removeTask(task)
            this.checkedTasks = [task, ...this.checkedTasks]

        }
        else {
            // will instead remove from checked list
            this.checkedTasks = this.checkedTasks.filter(t => t !== task);
            // move it back
            this.tasks = [...this.tasks, task]

        }
        this.notifyObservers();
    }

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