import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form} from "react-bootstrap";

function TodoView(props) {

    return (
        <div className={"container rounded p-2 bg-dark text-white"}>
            <Container className={"ml-1 justify-content-between"}>
                <input type="text" className={"form-control"} id="todoTitle" placeholder="new Todo list..."/>
                {[...props.tasks].map(t => {
                    return <Row key={t} className={"justify-content-lg mb-2"}>
                                <Col sm={10}><input className={"custom-checkbox"} type={"checkbox"}/><label for={"cBox"} id={"task"}>{'  ' + t}</label></Col>
                                <Col sm={1} pb={2}>
                                    <Button className={'btn btn-outline-dark close'} id={'removeButton'}
                                            onClick={e => {props.removeTask(t);}}><span aria-hidden="true">&times;</span></Button></Col>
                          </Row>})
                }
                <Row>
                    <Col sm={8}>
                        <input type="text" className={"form-control"} id="taskInput" placeholder="new task..." autoComplete={'off'}
                               maxLength={17}
                               onFocus={e => {e.target.value = '';}}
                               onBlur={e => {props.addTask(e.target.value);}}/>
                    </Col>
                </Row>
            </Container>
        </div>
        )
}
export default TodoView;
