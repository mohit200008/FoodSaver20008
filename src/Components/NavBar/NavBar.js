import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'
import { Navbar,Nav} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
const NavBar=({ logOut }) =>{
    return(

  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/" className="brand" style={{color: "#9FFFCB"}}>FoodSaver</Navbar.Brand>
    <Nav className="mr-auto nav-container-large">
      <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
      <Nav.Link as={Link} to="/food" className="nav-link">Add food</Nav.Link>
      <Nav.Link as={Link} to="/recipepage" className="nav-link">Recipe</Nav.Link>

      <Nav.Link as={Link} to="/creativity" className="nav-link">Creativity</Nav.Link>
      <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>

      <Nav.Link as={Link} to="/hi"  className="nav-link">अ/A</Nav.Link>
       
    </Nav>

    {/* <Nav className="mr-auto nav-container-small">
      <select name="links" id="links">
        <option value="home"><Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link></option>
        <option value="add-food"><Nav.Link as={Link} to="/food" className="nav-link">Add food</Nav.Link></option>
        <option value="recipe"><Nav.Link as={Link} to="/recipepage" className="nav-link">Recipe</Nav.Link></option>
        <option value="creativity"><Nav.Link as={Link} to="/creativity" className="nav-link">Creativity</Nav.Link></option>
        <option value="login"><Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link></option>
        <option value="अ/A"><Nav.Link as={Link} to="/hi"  className="nav-link">अ/A</Nav.Link></option>
      </select>
      <div className="dropdown-menu"></div>
    </Nav> */}

    </Container>
  </Navbar>

    )
}

export default NavBar;
