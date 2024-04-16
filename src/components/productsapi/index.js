import React from "react"
import Header from "../Header";
import Products from "../Products"
import { BsBoxArrowUp } from "react-icons/bs";
import "./index.css"

const products = [{
    id: 1,
    image: "https://res.cloudinary.com/dyq2jhzds/image/upload/v1713120782/SIPR04018_01_1_2_gdmumt.png",
    title: "The Brown Metro Movers",
    price: 8999,
    discountedprice: 4899,
},

{
    id: 2,
    image: "https://res.cloudinary.com/dyq2jhzds/image/upload/v1713120797/SIPR04031_01_1_1_tqkhts.png",
    title: "The Metro Movers Black",
    price: 8999,
    discountedprice: 4899,
},
{
    id: 3,
    image: "https://res.cloudinary.com/dyq2jhzds/image/upload/v1713120817/SIPR04085_01_1_1_jwq5z3.png",
    title: "The Metro Movers Black",
    price: 8999,
    discountedprice: 4899,
},
{
    id: 4,
    image: "https://res.cloudinary.com/dyq2jhzds/image/upload/v1713120833/SIPR04086_01_1_1_qgjdj5.png",
    title: "The Metro Movers Black",
    price: 8999,
    discountedprice: 4899,
},
{
    id: 5,
    image: "https://res.cloudinary.com/dyq2jhzds/image/upload/v1713120782/SIPR04018_01_1_2_gdmumt.png",
    title: "The Brown Metro Movers",
    price: 8999,
    discountedprice: 4899,
},

{
    id: 6,
    image: "https://res.cloudinary.com/dyq2jhzds/image/upload/v1713120797/SIPR04031_01_1_1_tqkhts.png",
    title: "The Metro Movers Black",
    price: 8999,
    discountedprice: 4899,
},
{
    id: 7,
    image: "https://res.cloudinary.com/dyq2jhzds/image/upload/v1713120817/SIPR04085_01_1_1_jwq5z3.png",
    title: "The Metro Movers Black",
    price: 8999,
    discountedprice: 4899,
},
{
    id: 8,
    image: "https://res.cloudinary.com/dyq2jhzds/image/upload/v1713120833/SIPR04086_01_1_1_qgjdj5.png",
    title: "The Metro Movers Black",
    price: 8999,
    discountedprice: 4899,
},


]


class Productsapi extends React.Component {
    state = { initiaproducts: products }

    render() {
        const { initiaproducts } = this.state
        return (

            <div className="app-container">
                <Header />
                <div>
                    <div className="svg-icons">
                        <div>
                            <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1713118258/Frame_461_nqty1m.png" alt="Bagimage icons" className="Bags-icons" />

                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1713118278/Frame_50_srqtjl.png" alt="Bagimage icons" className="Bags-icons" />

                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1713118300/Frame_49_fqs3lo.png" alt="Bagimage icons" className="Bags-icons" />
                            <p style={{ color: "white" }}>All Bags</p>
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1713118349/Frame_13_rxquty.png" alt="Bagimage icons" className="Bags-icons" />
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1713121842/Frame_49_6_uksnsn.png" alt="Bagimage icons" className="Bags-icons" />
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1713118663/Frame_49_5_ffr1vn.png" alt="Bagimage icons" className="Bags-icons" />
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1713118674/Frame_22_1_xbjpw4.png" alt="Bagimage icons" className="Bags-icons" />
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1713118687/Frame_20_1_tc4bu2.png" alt="Bagimage icons" className="Bags-icons" />
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1713118699/Frame_46_1_yanvan.png" alt="Bagsimage icons" className="Bags1-icons" />
                        </div>

                    </div>
                    <div className="Bags-count">

                        <p style={{ color: "white" }}>Bags.Backpacks</p>
                        <div className="arrow-container">
                            <p style={{ color: "white" }}>13 Products</p>
                            <BsBoxArrowUp style={{ color: "white" }} />
                        </div>

                    </div>
                </div>


                <ul className="list-items-container">{initiaproducts.map(eachitem => (<Products ProductDetails={eachitem} key={eachitem.id} />))}</ul>
            </div >)
    }

}


export default Productsapi