import React from 'react';
// import { Link } from 'react-router-dom'
import './NavBar_in_hindi.css'
import { Navbar,Nav} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
const NavBar=({ logOut }) =>{
    return(

  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/" style={{color: "#9FFFCB"}}>फूडसेवर</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/" className="nav-link">होम</Nav.Link>
      <Nav.Link href="/food" className="nav-link">भोजन जोड़ें</Nav.Link>
      <Nav.Link href="/recipepage" className="nav-link">विधि</Nav.Link>

      <Nav.Link href="/creativity" className="nav-link">रचनात्मकता</Nav.Link>
      <Nav.Link href="/login" className="nav-link">लॉग इन करें</Nav.Link>

      <Nav.Link href="/hi"  className="nav-link">अ/A</Nav.Link>
       
    </Nav>
    </Container>
  </Navbar>

    )
}

export default NavBar;
