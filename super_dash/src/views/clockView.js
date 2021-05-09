import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'

function Clock (props) {
   

        //This declared the state of time at the very beginning so it will create a interval for updating the clock 
        //each second 
       
        React.useEffect(() => {
            const interval = setInterval(() => {
              props.updateTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })) 
            }, 1000);
            //if the clock component is finished it will be killed for stop using  memory
            return () => clearInterval(interval);
          }, []);

     
    
        return (
            <Container>
                
                  
                    <h1 className="text-center m-1 display-1"> {props.time}</h1>
               
            </Container>
            )
    
}
export default Clock;