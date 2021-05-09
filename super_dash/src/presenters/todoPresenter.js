import TodoView from "../views/todoView";
import React from "react";

function TodoPresenter(props) {

    const [currentTasks, setTasks] = React.useState(props.model.tasks);
    const [currentChecked, setChecked] = React.useState(props.model.checkedTasks);

    const addByKey = (event) => {
        if(event.code === 'Enter' && event.target.id === 'taskInput') {
            let t = event.target.value;
            event.target.value = "";
            props.model.addTask(t);
            setTasks(props.model.tasks);

        }}

    React.useEffect( function () {
        props.model.addObserver(() => {setTasks(props.model.tasks);})
        props.model.addObserver(() => {setChecked(props.model.checkedTasks);})
        window.addEventListener('keydown', addByKey)
        }, [])

    return (
        <TodoView tasks={currentTasks}
                  checkedTasks = {currentChecked}
                  addTask={x => {props.model.addTask(x); setTasks(props.model.tasks);}}
                  removeTask={x => {props.model.removeTask(x); setTasks(props.model.tasks);}}
                  check={x => {props.model.checkTask(x); setChecked(props.model.checkedTasks);}}
                  clear={x => {props.model.clearFinishedTasks(); setChecked(props.model.checkedTasks);}}/>)
}

export default TodoPresenter;