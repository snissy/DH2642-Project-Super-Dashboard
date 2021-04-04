import TodoView from "../views/todoView";

function TodoPresenter(props) {
    return <TodoView tasks = {props.tasks}
                     remove = {props.removeTask}
                     add = {props.addTask} />
}

export default TodoPresenter;