import TodoView from "../../views/todoView";
import React from "react";

function TodoPresenter(props) {

    const [currentTasks, setTasks] = React.useState(props.model.tasks);
    const [currentChecked, setChecked] = React.useState(props.model.checkedTasks);
    const [currentTitle, setTitle] = React.useState(props.model.todoTitle)

    const addByKey = (event) => {
        if(event.code === 'Enter' && event.target.id === 'taskInput') {
            let t = event.target.value;
            event.target.value = "";
            props.model.addTask(t);
            setTasks(props.model.tasks);

        }
    }

    React.useEffect( function () {
        props.model.addObserver(() => {setTasks(props.model.tasks);})
        props.model.addObserver(() => {setChecked(props.model.checkedTasks);})
        props.model.addObserver(() => {setTitle(props.model.todoTitle);})
        window.addEventListener('keydown', addByKey)
        }, [])

    return (
        <TodoView tasks={currentTasks}
                  checkedTasks = {currentChecked}
                  title = {currentTitle}
                  setTitle = {x => {props.model.setTodoTitle(x)}}
                  addTask={x => {props.model.addTask(x);}}
                  removeTask={x => {props.model.removeTask(x);}}
                  check={x => {props.model.checkTask(x);}}
                  clear={x => {props.model.clearFinishedTasks();}}/>)
}

export default TodoPresenter;