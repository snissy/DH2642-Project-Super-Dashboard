import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Col,Row} from 'react-bootstrap'

class Clock extends Component {
    constructor(props){
        super(props);
        //This declared the state of time at the very beginning
        this.state ={
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    }

    //This happens when the component mount and the setInterval function get called with a call back function updateClock()
    componentDidMount() {
        this.intervalID = setInterval(() =>
            this.updateClock(),
            1000
        );
    }

    //This section clears setInterval by calling intervalID so as to optimise memory
    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    //This function set the state of the time to a new time
    updateClock(){
        this.setState({
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
    }
    render() {
        return (
            <Container> 
                
                  
                    <h1 class="text-center m-3"> {this.state.time}</h1>
               
            </Container>
    );}
}
export default Clock;