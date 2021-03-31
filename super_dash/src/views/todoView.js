import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form} from "react-bootstrap";

function TodoView(props) {

    const addByKey = (event) => {
        if(event.code === 'Enter') {
         props.addTask(event.target.value);
        }}

    // we only want to add the listener the first time the component is rendered
    // this is solved with useEffect
    React.useEffect(() => (
        window.addEventListener('keydown', addByKey)
    ))

    return (
        <div>
            <h3>Todo</h3>
            <Container>
                {[...props.tasks].map(t => {
                    return <Row><Form><Form.Check type={"checkbox"}/></Form><Col>{t}</Col>
                           <Col><Button className={'btn btn-light'} onClick={e => {props.removeTask(t);}}>x</Button></Col></Row>})
                }
            </Container>
            <input type="text" id="myInput" placeholder="new task..." onBlur={e => {props.addTask(e.target.value);}}/>
            </div>
        )
}
export default TodoView;
