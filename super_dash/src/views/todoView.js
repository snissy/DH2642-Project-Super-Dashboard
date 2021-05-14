import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from "react-bootstrap";

function TodoView(props) {

    return (
        <div className={"container rounded p-2 bg-dark text-white"} id={"main-div"}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <h3 id="todoTitle" contentEditable={true} onBlur={event => {props.setTitle(document.getElementById("todoTitle").innerText)}}>{props.title}</h3>
                    </Col>
                </Row>
                {[...props.tasks].map(t => {
                    return <Row key={t} className={"mb-2"}>
                                <Col sm={1}>
                                    <input type={"checkbox"} className={"checkBoxInline"} onClick={e => {props.check(t);}}/>
                                </Col>
                                <Col xs={9}>
                                    <text id={"task"}>{t}</text>
                                </Col>
                                <Col sm={1}>
                                    <Button className={'btn btn-outline-dark btn-sm close mr-0'} id={'removeButton'}
                                            onClick={e => {props.removeTask(t);}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="transparent" className="bi bi-trash" viewBox="0 0 16 16" id="trash">
                                            <path
                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fillRule="evenodd"
                                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </Button>
                                </Col>
                          </Row>})
                }
                <Row>
                    <Col sm={11}>
                        <input type="text" className={"form-control"} id="taskInput" placeholder="new task..." autoComplete={'off'}
                               maxLength={100}
                               onFocus={e => {e.target.value = '';}}
                               onBlur={e => {props.addTask(e.target.value);}}/>
                    </Col>
                </Row>
                <Row>
                    <div className={"h-divider"}/>
                </Row>
                <Row>
                    <Col sm={8}>
                        <p>{props.checkedTasks.length + "   Finished tasks"}</p>
                    </Col>
                    <Col sm={3}>
                        <Button className={"btn btn-outline-secondary"} id={"clearButton"} onClick={x => {props.clear()}}>clear</Button>
                    </Col>
                </Row>
                {[...props.checkedTasks].map(t => {
                    return <Row key={t} className={"mb-2"}>
                        <Col sm={1}>
                            <input type={"checkbox"} checked={true} onClick={e => {props.check(t);}}/>
                        </Col>
                        <Col sm={9}>
                            <text id={"checkedTask"}>{'  ' + t}</text>
                        </Col>
                    </Row>})
                }
            </Container>
        </div>
        )
}
export default TodoView;
