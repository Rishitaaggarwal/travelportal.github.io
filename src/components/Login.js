import React from 'react'
import { Form, Button } from 'react-bootstrap'
function Login() {
    return (
        <div>
            {/* <h1 style={{ textAlign: "center", paddingTop: 50, color: "#0066ff", fontWeight: "lighter", fontFamily: "serif", fontSize: 36 }}> Login </h1> */}
            <Form style={{ padding: 50, paddingRight: 400, paddingLeft: 400 }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default Login
