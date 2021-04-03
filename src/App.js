import './App.css';
import Navbar from "react-bootstrap/NavBar"
import { Col, Container, Row } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Viet Bui Websit
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12} md={8}>...</Col>
          <Col xs={12} md={4}>...</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
