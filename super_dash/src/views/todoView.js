import React, { Component } from 'react'; // this will not be needed later
// tasks and props will later belong to the model, this is just for testing
let tasks = ['städa', 'Träna', 'Tvätta', 'Handla'];
const props = {
    tasks: tasks,
    removeTask: function (task) { if(tasks.find(t => t === task)) { tasks = tasks.filter(t => t !== task); }},
    addTask: function (task) {tasks = [task, ...tasks];}
}

// This is the component we will keep
// This implementation of state will change later since we get the props from the model. Its used here for testing only
class TodoView extends Component {

    state = {
        currentTasks: tasks
    }

    stateChange = () => {
        this.setState({
            currentTasks: tasks
        })
    }

    render()
    {
        return (
            <div>
                <h3>TODO-list</h3>
                <input type="text" id="myInput" placeholder="new task..."/>
                <button onClick={x => {props.addTask(document.getElementById('myInput').value); this.stateChange();}}>Add</button>
                <table>
                    {[...tasks].map(t => {return <tr>
                        <td>{t}</td>
                        <td><button onClick={e => {props.removeTask(t); this.stateChange();}}>x</button></td>
                    </tr> })
                    }
                </table>
            </div>
        )};
}
export default TodoView;
