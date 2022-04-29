import { Component } from 'react';
import { Nav, Container, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (<>
            <Navbar bg="dark" variant="dark" >
                <img src="assets/img/logo.png" width="135" height="100" />
                <Container>
                    <Nav className="me-auto" style={{ fontSize: 16 }}>
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                        <Nav.Link as={Link} to={"/offers"}>Offers</Nav.Link>
                        <Nav.Link as={Link} to={"/recent"}>Most Recent</Nav.Link>
                        <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                        <Nav.Link as={Link} to={"/cart"}>Cart</Nav.Link>
                        {/* <Nav.Link as={Link} to={"/example"}>Example</Nav.Link> */}



                        {/* <Button variant="success" >+ Submit a Tour</Button> */}


                    </Nav>
                </Container>
            </Navbar>

        </>);
    }
}
export default Header;