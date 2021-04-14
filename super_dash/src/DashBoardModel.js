class DashBoardModel {

    constructor(tasks = []) {
        this.tasks = tasks;
    }

    addTask(task) {if(task && !this.tasks.includes(task)) {this.tasks = [task, ...this.tasks];}}

    removeTask(task) {if(this.tasks.find(t => t === task)) {this.tasks = this.tasks.filter(t => t !== task);}}
}

export default DashBoardModel;