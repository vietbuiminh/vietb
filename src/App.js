import './App.css';
import Navbar from "react-bootstrap/NavBar"
import { Col, Container, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card"

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="my-nav">
        <Navbar.Brand href="#home">
          Viet Bui Websit
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Nullam sed maximus eros, id elementum dolor. Phasellus ultrices ante nec elementum placerat. Ut vestibulum feugiat turpis a elementum. Phasellus congue augue sit amet vehicula ultricies. Nulla rutrum tellus sit amet iaculis egestas. Sed id urna scelerisque, tristique odio nec, feugiat lorem. Sed tincidunt, turpis tempus suscipit aliquet, orci elit viverra urna, at cursus justo odio et ligula. Nulla ut lectus eu ligula tempus viverra. Donec bibendum tempor facilisis. Nam in neque molestie justo semper mattis vitae in lorem. Curabitur commodo risus ex, a porttitor arcu luctus non. Nunc luctus, lacus eu dictum lacinia, arcu quam sagittis est, eu blandit ligula ligula et dolor. Pellentesque luctus augue ut nisl cursus faucibus. Vestibulum consequat finibus hendrerit.</p>
            <p>Proin viverra lacinia tellus, in efficitur ante faucibus vitae. Ut accumsan tincidunt diam. Donec suscipit maximus dolor, eu dictum sem sodales a. In maximus, orci eu gravida ullamcorper, augue tortor facilisis neque, non ultricies risus est id augue. Duis placerat convallis justo, et rhoncus tortor tempus a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin interdum tellus nulla, non feugiat urna suscipit in. Etiam dignissim nibh sit amet ligula tincidunt, nec pretium ante efficitur. Nunc quis erat ut orci fermentum dignissim. Donec aliquam, urna nec vulputate vestibulum, elit dolor lacinia urna, vitae molestie magna elit efficitur augue. Integer dolor est, tempus in nulla nec, faucibus lobortis libero. Nullam sodales volutpat risus a maximus. Nulla iaculis est felis, sit amet luctus lorem fringilla ut. Ut in lorem dui. Donec aliquam in massa a luctus.</p>
            <p>Nulla sed ultricies nunc. Curabitur bibendum diam ac volutpat ultrices. Quisque varius placerat nisi, sit amet blandit enim rutrum luctus. Aliquam sed vehicula dolor, quis blandit lectus. Nam tincidunt, risus at finibus eleifend, nisl ex dictum ex, eget viverra elit ex a leo. Mauris faucibus elit nisi, id scelerisque enim scelerisque vel. Vivamus finibus vitae velit id aliquet. Ut ut lectus ultricies, feugiat purus gravida, blandit augue. Aenean nec tortor ullamcorper, facilisis odio ut, semper metus. Integer tincidunt eros id mi mattis, non rhoncus metus facilisis. Donec imperdiet sodales hendrerit. Etiam ut lacinia massa, nec pellentesque lorem. Suspendisse egestas auctor lobortis. Morbi convallis ullamcorper aliquet. In quam nulla, sagittis et posuere ac, pretium in odio. Duis molestie diam nisi, id malesuada turpis auctor sed.</p>
            <p>Maecenas id risus ut nibh congue cursus non quis risus. Mauris sollicitudin mi sed mauris imperdiet sollicitudin. Duis vitae auctor velit, non consequat erat. Sed facilisis id sem ac ultrices. Duis nulla urna, condimentum sit amet erat vehicula, tempor tempor nibh. Nunc rhoncus leo et risus finibus tempor. Nam blandit orci in nibh tincidunt vehicula. Maecenas nec arcu tincidunt, hendrerit ipsum eget, dignissim felis.</p>
          </Col>
          <Col xs={12} md={4}>
            <Card className="style-art">
              <Card.Body>
                <Card.Title>Viet Bui</Card.Title>
                <Card.Subtitle className="mb-2">Newbie with React</Card.Subtitle>
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
