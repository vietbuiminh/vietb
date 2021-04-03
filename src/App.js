import './App.css';
import Navbar from "react-bootstrap/NavBar"
import { CarouselItem, Col, Container, Row, Table } from 'react-bootstrap';
import Card from "react-bootstrap/Card"
import { Carousel } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="my-nav">
        <Navbar.Brand href="#home">
          Viet Bui Websit
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Carousel className="gallery">
          <CarouselItem>
            <img src="https://lh5.googleusercontent.com/WNpwJA1nmeFqN7MoXpEt1SaeXEa6x5xIqe2kr_l3S4_PGBENkY6wahgHEPQFjQvFuPg-_bAqgKZuwpDGCUJYf9mQCwz8vUJjGzg6pc7zsf-NcWQDQBl6YWClgI9a6W-hSQ=w1280" alt="Hello" />
            <Carousel.Caption>
              <h3>Generated ArtWork</h3>
              <p>A project during my Jterm.</p>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img src="https://lh3.googleusercontent.com/ABIpZ5JQN6Kgs49132frLbUGWmFBTD8tWMYuV6Kua9d6DKWaP0PmQYny9UgMiFj3o0RWvpHpLCqGFI4sOBYSO7nR3F5uUtLBj7QbM2MZo86v_hxE6qtM-o16vzuH9WaC1Q=w1280" alt="Hello" />
            <Carousel.Caption>
              <h3>Generated ArtWork</h3>
              <p>A project during my Jterm.</p>
            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
        <Row>
          <Col xs={12} md={8}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Nullam sed maximus eros, id elementum dolor. Phasellus ultrices ante nec elementum placerat. Ut vestibulum feugiat turpis a elementum. Phasellus congue augue sit amet vehicula ultricies. Nulla rutrum tellus sit amet iaculis egestas. Sed id urna scelerisque, tristique odio nec, feugiat lorem. Sed tincidunt, turpis tempus suscipit aliquet, orci elit viverra urna, at cursus justo odio et ligula. Nulla ut lectus eu ligula tempus viverra. Donec bibendum tempor facilisis. Nam in neque molestie justo semper mattis vitae in lorem. Curabitur commodo risus ex, a porttitor arcu luctus non. Nunc luctus, lacus eu dictum lacinia, arcu quam sagittis est, eu blandit ligula ligula et dolor. Pellentesque luctus augue ut nisl cursus faucibus. Vestibulum consequat finibus hendrerit.</p>
            <p>Proin viverra lacinia tellus, in efficitur ante faucibus vitae. Ut accumsan tincidunt diam. Donec suscipit maximus dolor, eu dictum sem sodales a. In maximus, orci eu gravida ullamcorper, augue tortor facilisis neque, non ultricies risus est id augue. Duis placerat convallis justo, et rhoncus tortor tempus a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin interdum tellus nulla, non feugiat urna suscipit in. Etiam dignissim nibh sit amet ligula tincidunt, nec pretium ante efficitur. Nunc quis erat ut orci fermentum dignissim. Donec aliquam, urna nec vulputate vestibulum, elit dolor lacinia urna, vitae molestie magna elit efficitur augue. Integer dolor est, tempus in nulla nec, faucibus lobortis libero. Nullam sodales volutpat risus a maximus. Nulla iaculis est felis, sit amet luctus lorem fringilla ut. Ut in lorem dui. Donec aliquam in massa a luctus.</p>
            <h1>LHDL: Share Top 3 Gilds</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} md={4}>
            <Card className="style-art">
              <Card.Body>
                <Card.Title>Viet Bui</Card.Title>
                <Card.Subtitle className="mb-2">Newbie with React</Card.Subtitle>
                <img src="https://lh6.googleusercontent.com/2yhYAJnKvWNr0I-OfxsWmB57mMQWEewjCTLP3FxJm1VJiTN0oOr6I9LMZCETdtd_wtUepgOs8cW92-b6-aBVXh1Kg7hA-yHPIOQmYHVRtf1WtmCfo2BYy7Sh3Ewydzq_lQ=w1280"/>
                <Card.Text>
                  Viet Bui is a current college student in the US. He originally from Saigon and very new the life over here.
                </Card.Text>
                <Card.Link href="#">Google STuff</Card.Link>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Viet Bui</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Newbie with React</Card.Subtitle>
                <Card.Text>
                  Viet Bui is a current college student in the US. He originally from Saigon and very new the life over here.
                </Card.Text>
                <Card.Link href="#">Google STuff</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
