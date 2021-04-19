import TodoView from "../views/todoView";
import React from "react";

function TodoPresenter(props) {

    const [currentTasks, setTasks] = React.useState(props.model.tasks);

    const addByKey = (event) => {
        if(event.code === 'Enter' && event.target.id === 'task') {
            let t = event.target.value;
            event.target.value = "";
            props.model.addTask(t);
            setTasks(props.model.tasks);

        }}

    React.useEffect( function () {
        props.model.addObserver(() => {setTasks(props.model.tasks);})
        window.addEventListener('keydown', addByKey)
        }, [])

    return (
        <TodoView tasks={currentTasks}
                  addTask={x => {props.model.addTask(x); setTasks(props.model.tasks);}}
                  removeTask={x => {props.model.removeTask(x); setTasks(props.model.tasks);}}/>)
}

export default TodoPresenter;