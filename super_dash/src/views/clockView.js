import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Col,Row} from 'react-bootstrap'

function Clock (props) {
   

        //This declared the state of time at the very beginning
       
        React.useEffect(() => {
            const interval = setInterval(() => {
              props.updateTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })) 
            }, 1000);
            return () => clearInterval(interval);
          }, []);

     
    
        return (
            <Container> 
                
                  
                    <h1 class="text-center m-3"> {props.time}</h1>
               
            </Container>
            )
    
}
export default Clock;