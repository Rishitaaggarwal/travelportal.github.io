import React from "react";
import { Button } from "react-bootstrap";
/*function Shop(props) {
    return (
        <div style={{ paddingLeft: 100, paddingRight: 500 }}>

            <h5>{props.product.text}</h5>
            <img style={{ height: 200 }} src={props.product.img} />
            <p>{props.product.discription}</p>
            <p style={{ fontWeight: "bold" }}>₹{props.product.price}</p>
            <hr />
        </div>
    )

}*/

class Shop extends React.Component {
    render() {
        return (
            <div style={{ paddingLeft: 100, paddingRight: 500 }}>

                <h1>{this.props.product.text}</h1>
                <img style={{ height: 200 }} src={this.props.product.img} />
                <p style={{ fontSize: 16 }}>{this.props.product.discription}</p>
                <p style={{ fontWeight: "bold", fontSize: 16 }}>₹{this.props.product.price}</p>
                <Button style={{ fontSize: 16 }}>Read more</Button>
                <hr />
            </div>

        )
    }
}
export default Shop