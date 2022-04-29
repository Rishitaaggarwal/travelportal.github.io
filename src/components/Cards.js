import React from 'react'
import { Button } from 'react-bootstrap'
import { Row, Col, Container, Card } from "react-bootstrap"
function Cards(props) {
    return (
        <div className="  col-11 col-md-6 col-lg-4 mb-4 mx-0">

            <Card style={{
                width: '38rem', boxShadow: "   0  5px 20px gray", borderRadius: '0.5rem '
            }}>
                <Card.Img variant="top" style={{ height: '20rem' }} src={props.item.imageurl} />
                <Card.Body>
                    <Card.Title style={{ fontSize: 20 }}> Vacation at {props.item.destination}</Card.Title>


                    <Card.Text style={{ fontSize: 15 }}>
                        <span style={{ color: "grey", fontSize: 15 }}>Starting at</span> <span style={{ fontWeight: "bold" }}>${props.item.price}</span>
                    </Card.Text>
                    <Button style={{ fontSize: 15 }} className="button_book" variant={props.item.clicked ? "success" : "primary"} onClick={() => {

                        return props.handleChange(props.item.price, props.item.id)
                    }} >{props.item.clicked ? "Booked" : "Book Now"}</Button>
                </Card.Body>
            </Card>




        </div >
    )
}
export default Cards
