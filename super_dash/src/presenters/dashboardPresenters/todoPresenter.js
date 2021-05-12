import TodoView from "../../views/todoView";
import React from "react";

function TodoPresenter(props) {

    const [currentTasks, setTasks] = React.useState(props.model.todoList.tasks);
    const [currentChecked, setChecked] = React.useState(props.model.todoList.checkedTasks);
    const [currentTitle, setTitle] = React.useState(props.model.todoList.todoTitle)

    const addByKey = (event) => {
        if(event.code === 'Enter' && event.target.id === 'taskInput') {
            let t = event.target.value;
            event.target.value = "";
            props.model.addTask(t);
        }
    }

    React.useEffect( function () {
        // props.model.addObserver(() => {setTodo(props.model.todoList);})

        function taskObserver() {
            setTasks(props.model.todoList.tasks);
        }
        function checkedObserver() {
            setChecked(props.model.todoList.checkedTasks);
        }
        function titleObserver() {
            setTitle(props.model.todoList.todoTitle);
        }
        props.model.addObserver(taskObserver);
        props.model.addObserver(checkedObserver);
        props.model.addObserver(titleObserver);
        window.addEventListener('keydown', addByKey);

        return function(){
            props.model.removeObserver(checkedObserver());
            props.model.removeObserver(taskObserver());
            props.model.removeObserver(titleObserver());
        }

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