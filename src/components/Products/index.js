import { CiBookmark } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";


import "./index.css"

const Products = (props) => {

    const { ProductDetails } = props
    const { image, title, price, discountedprice } = ProductDetails

    const myStyle = {
        backgroundImage:
            `url(${image})`,
        height: "420px",
        margin: "10px",
        width: "320px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderradious: "10px",
        textaline: "right",
    };

    const discount = ((price - discountedprice) / price) * 100;

    return (
        <li className="list-items">
            <div className="image-container">
                <div style={myStyle} >
                    <CiBookmark className="bookmark" />

                </div>
                <p className="product-title">{title}</p>
                <div className="price-details">
                    <div className="price-container">
                        <FaRupeeSign className="rupee-icon" />
                        <p className="discounted-price">{discountedprice}</p>
                        <p className="price">{price}</p>
                        <span className="discount">({Math.ceil(discount, 3)}% off)</span>
                    </div>
                    <div>
                        <TbShoppingBagPlus className="shopping-bag" />
                    </div>
                </div>

            </div>
        </li >
    )

}


export default Products