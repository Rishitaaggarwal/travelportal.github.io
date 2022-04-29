import React from "react"
import Datashopping from "./Datashopping"
import Shop from "./Shop"
function Recent() {
    const shopcomponents = Datashopping.map(shopie => <Shop key={shopie.id} product={shopie} />)
    return (
        <div style={{ paddingTop: 50 }}>
            {/* <h1 style={{ textAlign: "center", paddingTop: 50, color: "#0066ff", fontWeight: "lighter", fontFamily: "serif", fontSize: 36 }}>Most Recent</h1> */}

            {shopcomponents}

        </div>
    )
}
export default Recent