import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form} from "react-bootstrap";

function TodoView(props) {

    return (
        <div className={"container rounded p-3 my-3 bg-dark text-white"} style={{border: '1px solid'}}>
            <Container>
                <h3>Todo</h3>
                {[...props.tasks].map(t => {
                    return <Row key={t}>
                                <Col sm={1}><Form.Check className={"checkbox"} type={"checkbox"}/></Col>
                                <Col sm={8}>{t}</Col>
                                <Col sm={2}>
                                    <Button className={'btn btn-outline-dark'}
                                            style={{backgroundColor:"transparent", borderColor:"transparent"}}
                                            onClick={e => {props.removeTask(t);}}>x</Button></Col>
                          </Row>})
                }
                <Row>
                    <Col sm={8}>
                        <input type="text" className={"form-control"} id="myInput" placeholder="new task..."
                               style={{backgroundColor:"transparent",
                                       color:"#F8F8FF",
                                       border: "none"}}
                               maxLength={16}
                               onFocus={e => {e.target.value = '';}}
                               onBlur={e => {props.addTask(e.target.value);}}/>
                    </Col>
                </Row>
            </Container>
        </div>
        )
}
export default TodoView;
