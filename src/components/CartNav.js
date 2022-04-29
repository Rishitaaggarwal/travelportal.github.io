import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
function CartNav(props) {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ fontSize: 16 }}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Total Items :{props.item}</Nav.Link>
                            <Nav.Link href="#">Total Price :${props.price}</Nav.Link>
                        </Nav>
                        <Nav> <Button onClick={props.handleChange}>Empty Cart</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h2 style={{ textAlign: "center", paddingTop: 50, paddingBottom: 30, color: "#0066ff", fontWeight: "lighter", fontFamily: "serif", fontSize: 36 }}>MUST VISIT PLACES</h2>
        </div>
    )
}

export default CartNav
