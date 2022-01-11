import React from 'react';
// import { Link } from 'react-router-dom'
import './NavBar.css'
import { Navbar,Nav} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
const NavBar=({ logOut }) =>{
    return(

  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/" style={{color: "#9FFFCB"}}>FoodSaver</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/" className="nav-link">Home</Nav.Link>
      <Nav.Link href="/food" className="nav-link">Add food</Nav.Link>
      <Nav.Link href="/recipepage" className="nav-link">Recipe</Nav.Link>

      <Nav.Link href="/creativity" className="nav-link">Creativity</Nav.Link>
      <Nav.Link href="/login" className="nav-link">Login</Nav.Link>

      <Nav.Link href="/hi"  className="nav-link">अ/A</Nav.Link>
       
    </Nav>
    </Container>
  </Navbar>

    )
}

export default NavBar;
