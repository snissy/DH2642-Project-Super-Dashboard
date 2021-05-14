class DashBoardModel {

    constructor(char, plan, todo) {

        this.todoList = {
            tasks: [],
            checkedTasks: [],
            todoTitle: todo
        }
        this.character = char;
        this.character.id = 1;   // not used atm. but probably needed to do the correct api call on reload

        this.planet = plan;
        this.planetURL = require('../assets/img/'+ plan.name.replace(/\s/g, '') + '.jpg').default;
        this.planet.id = 1;      // not used atm. but probably needed to do the correct api call on reload


        this.preferences = {
            showWeather: true,
            showNews: true,
            showTodo: true,
            showCharacter: true,
            showQuote: true
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
        this.preferences.showQuote = pref.showQuote;
        this.notifyObservers();
    }

    setCharacter(json_response, id){
        this.character = {};
        this.character.name = json_response.name;
        this.character.height = json_response.height;
        this.character.mass = json_response.mass;
        this.character.hair_color = json_response.hair_color;
        this.character.skin_color = json_response.skin_color;
        this.character.eye_color = json_response.eye_color;
        this.character.birth_year = json_response.birth_year;    // Measured in BBY and ABY, meaning "Years before/after the destruction of the first Death Star".
        this.character.gender = json_response.gender;
        this.character.id = id ;
        this.notifyObservers();
    }

    setPlanet(json_response, id){
        this.planet = {};
        this.planet.name = json_response.name;
        this.planetURL = require('../assets/img/' + json_response.name.replace(/\s/g, '') + '.jpg').default;
        this.planet.id = id;
        this.notifyObservers();
    }

    setTasks(tasks, checkedTasks){this.todoList.tasks = tasks; this.todoList.checkedTasks = checkedTasks; this.notifyObservers();}
    
    addTask(task) { if(task && !this.todoList.tasks.includes(task))
                  { this.todoList.tasks = [...this.todoList.tasks, task];}
        this.notifyObservers();
    }

    setAllCoordinates(coordinates){
        this.coordinates = coordinates; 
        this.notifyObservers();
    }

    removeTask(task) { if(this.todoList.tasks.find(t => t === task))
                     { this.todoList.tasks = this.todoList.tasks.filter(t => t !== task);}
                       this.notifyObservers();}

    clearFinishedTasks() {
        this.todoList.checkedTasks = [];
        this.notifyObservers()
    }

    checkTask(task) {

        if(!this.todoList.checkedTasks.find(t => t === task)) {
            this.removeTask(task)
            this.todoList.checkedTasks = [task, ...this.todoList.checkedTasks]

        }
        else {
            // will instead remove from checked list
            this.todoList.checkedTasks = this.todoList.checkedTasks.filter(t => t !== task);
            // move it back
            this.todoList.tasks = [...this.todoList.tasks, task]

        }
        this.notifyObservers();
    }

    setTodoTitle(title) {

        this.todoList.todoTitle = title;
        this.notifyObservers();

    }

    addObserver(callback) {
        this.observers = [...this.observers, callback]
    }

    removeObserver(callback) {
        this.observers = this.observers.filter(obs => obs !== callback)
    }
    setTodoList(todoList){this.todoList = todoList; this.notifyObservers();}
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