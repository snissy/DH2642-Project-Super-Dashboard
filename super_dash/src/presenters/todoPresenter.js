import TodoView from "../views/todoView";
import React from "react";

function TodoPresenter(props) {

    let Tasks = ['Destroy Deathstar', 'Kill Vader', 'Buy new Lightsaber', 'Save baby Yoda'];
    const [currentTasks, setTasks] = React.useState(Tasks);

    return (
        <TodoView tasks={currentTasks}
                  addTask={function (task)
                  {if(task && !currentTasks.includes(task)) {setTasks([task, ...currentTasks]);}}}
                  removeTask={function (task)
                  {if(currentTasks.find(t => t === task)) {setTasks(currentTasks.filter(t => t !== task));}}}/>)
}

export default TodoPresenter;