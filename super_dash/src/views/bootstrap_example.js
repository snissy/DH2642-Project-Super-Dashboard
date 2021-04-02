import 'bootstrap/dist/css/bootstrap.min.css'

import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'

function BootstrapExampleView() {
  return (
    <div>
      <header>
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label> Email Adress </Form.Label>
                  <Form.Control type="email" placeholder="Example@gmail.com" />
                  <Form.Text className="text-muted">
                    We'll never share your email.
                  </Form.Text>  
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label> Password </Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  <Form.Text>
                    We'll never share your email.
                  </Form.Text>  
                </Form.Group>
              </Col>
            </Row>  
            <Button className="mb-3" variant="secondary" type="submit">Login</Button>
          </Form>




          <Card className="mb-3" style={{color: "#000"}}>
            <Card.Img src ="https://picsum.photos/200/100"/>
            <Card.Body>
              <Card.Title>
                Card Example Title
              </Card.Title>
              <Card.Text>
                This is the example card text.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>


          <Breadcrumb>
            <Breadcrumb.Item> Test </Breadcrumb.Item>
            <Breadcrumb.Item> Test2 </Breadcrumb.Item>
            <Breadcrumb.Item active> Test3 </Breadcrumb.Item>
          </Breadcrumb>

          <Alert variant="success">This is a button</Alert>
          <Button> Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default BootstrapExampleView;