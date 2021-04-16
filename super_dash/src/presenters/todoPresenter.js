import TodoView from "../views/todoView";
import React from "react";

function TodoPresenter(props) {

    const [currentTasks, setTasks] = React.useState(props.model.tasks);

    const addByKey = (event) => {
        if(event.code === 'Enter') {
            let t = event.target.value;
            props.model.addTask(t);
            setTasks(props.model.tasks);
        }}

    // we only want to add the listener the first time the component is rendered
    // this is solved with useEffect
    React.useEffect(() => (
        window.addEventListener('keydown', addByKey)
    ), [])

    return (
        <TodoView tasks={currentTasks}
                  addTask={x => {props.model.addTask(x); setTasks(props.model.tasks);} }
                  removeTask={x => {props.model.removeTask(x); setTasks(props.model.tasks);}}/>)
}

export default TodoPresenter;