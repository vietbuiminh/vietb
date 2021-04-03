import './App.css';
import Navbar from "react-bootstrap/NavBar"

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Viet Bui Website
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
