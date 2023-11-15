import React from 'react';
import { Container , Nav,Navbar,Card ,CardGroup} from 'react-bootstrap';

function App() {
  
  return (
    <>
    <div className='APP'>
      {/* navbar */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* heading */}
      <h1> USER : </h1>
      
      {/* card */}
      <CardGroup>
      <Card>
        <Card.Img variant="top" src = {require('./user1.png')} alt="logo" />
        <Card.Body>
          <Card.Title>User 1</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src = {require('./user2.png')} />
        <Card.Body>
          <Card.Title>USER 2</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src = {require('./user3.png')} />
        {/* <img src = {require('./pngegg1.png')}/> */}
        <Card.Body>
          <Card.Title>USER 3</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>




    </div>
    </>
  );
}

export default App;