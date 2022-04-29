import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Offers from "./Offers"
export class BootstrapCarousel extends Component {
    render() {

        return (
            <div>
                <div className='' >
                    <Carousel>
                        <Carousel.Item style={{ 'height': "600px" }} >
                            <img style={{ 'height': "600px" }} className="d-block w-100"
                                src={'../../assets/img/img1.jpg'} />
                            <Carousel.Caption>
                                <p style={{ align: "center", fontSize: 50 }}>It feels good to be lost in the right direction</p>
                            </Carousel.Caption>
                        </Carousel.Item  >
                        <Carousel.Item style={{ 'height': "600px" }}>
                            <img style={{ 'height': "600px" }} className="d-block w-100"
                                src={'assets/img/img2.jpg'} />
                            <Carousel.Caption>
                                <p style={{ align: "center", fontSize: 50 }}>Life is a journey, not a destination</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{ 'height': "600px" }}
                        >
                            <img style={{ 'height': "600px" }} className="d-block w-100"
                                src={'assets/img/img3.jpg'} />
                            <Carousel.Caption>
                                <p style={{ align: "center", fontSize: 50 }}>Travel is the only thing you buy that makes you richer</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
        )
    }
}

export default BootstrapCarousel