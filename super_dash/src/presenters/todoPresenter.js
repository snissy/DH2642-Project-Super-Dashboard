import TodoView from "../views/todoView";
import React from "react";

function TodoPresenter(props) {

    // let Tasks = ['Destroy Deathstar', 'Kill Vader', 'Buy new Lightsaber', 'Save baby Yoda'];
    const [currentTasks, setTasks] = React.useState(props.model.tasks);

    return (
        <TodoView tasks={currentTasks}
                  addTask={x => {props.model.addTask(x); setTasks(props.model.tasks);} }
                  removeTask={x => {props.model.removeTask(x); setTasks(props.model.tasks);}}/>)
}

export default TodoPresenter;