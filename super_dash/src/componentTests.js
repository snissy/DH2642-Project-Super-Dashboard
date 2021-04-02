import React from "react";
import TodoView from "./views/todoView";
import BootstrapExampleView from "./views/bootstrap_example";

// Use this component to test TodoView
function TopLevelTodo() {

    let Tasks = ['städa', 'Träna', 'Tvätta', 'Handla'];
    const [currentTasks, setTasks] = React.useState(Tasks);

    return (
        <TodoView tasks={currentTasks}
                  addTask={function (task)
                  {if(task && !currentTasks.includes(task)) {setTasks([task, ...currentTasks]);}}}
                  removeTask={function (task)
                  { if(currentTasks.find(t => t === task)) {setTasks(currentTasks.filter(t => t !== task));}}}/>)
}

// Create new components below and export them to test them.

export default TopLevelTodo;


// T
export function TopLevelBootstrapExample(){
    return (
        <BootstrapExampleView />
    )
}

