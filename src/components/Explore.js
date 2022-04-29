import React from "react";
import { Button, Row, Col, Container } from 'react-bootstrap'
import Cards from './Cards'
import Offerdata from './Offerdata'
import CartNav from "./CartNav";
class Explore extends React.Component {
    constructor() {
        super()
        this.state = {
            offers: Offerdata,
            item: 0,
            total: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.empty = this.empty.bind(this)
    }
    handleChange(price, id) {
        this.setState(prevState => {
            /*const updatedTodos = Offerdata.map(todo => {
                if (todo.id === id) {
                    todo.clicked = !todo.clicked
                }
                return todo
            })*/
            if (Offerdata[id - 1].clicked === true) { return }
            Offerdata[id - 1].clicked = !(Offerdata[id - 1].clicked)
            return (Offerdata,
            {
                item: prevState.item + 1,
                total: prevState.total + price

            })
        })
    }

    empty() {
        this.setState(prevState => {
            Offerdata.map(todo => {
                if (todo.clicked === true) {
                    Offerdata[todo.id - 1].clicked = !Offerdata[todo.id - 1].clicked
                }

            })
            return (Offerdata, {

                item: 0,
                total: 0,
                button_title: "Book Now",
                button_variant: "primary"
            })
        })
    }
    render() {
        return (
            <div  >
                <CartNav item={this.state.item} price={this.state.total} handleChange={this.empty} />

                <section className='py-1 container'>
                    <div className="row justify-content-around">
                        {
                            Offerdata.map((item, index) => {
                                return (<Cards key={item.id} item={item} handleChange={this.handleChange} button_info={this.state} />)
                            }

                            )
                        }
                    </div>
                </section>
            </div >
        )
    }

}
export default Explore