import React, { useState } from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link, withRouter } from "react-router-dom"
import "./index.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div>
            <nav className="nav-container">
                <div className="tanntrim-heading">TANN  TRIM</div>
                <label htmlFor="menu-toggle" className="menu-icon" onClick={toggleMenu}>&#9776;</label>

                <ul className={`nav-items-container ${isMenuOpen ? 'show' : ''}`} id='list'>
                    <li><Link to="/tanntrimapp">
                        Bags
                    </Link></li>
                    <li>
                        <Link to="/tanntrimapp/travel" >
                            Travel
                        </Link>
                    </li>

                    <li>
                        <Link to="/tanntrimapp/accessories">
                            Accessories
                        </Link>
                    </li>

                    <li>
                        <Link to="/tanntrimapp/gifting">
                            Gifting
                        </Link>
                    </li>

                    <li>
                        <Link to="/tanntrimapp/jewelry">
                            Jewelry
                        </Link>
                    </li>
                </ul>
                <div className="nav-icons-container">
                    <IoIosSearch className="nav-icons" />
                    <FaRegUser className="nav-icons" />
                    <FaRegBookmark className="nav-icons" />
                    <LiaShoppingBagSolid className="nav-icons" />
                </div>
            </nav>
        </div >
    );
};

export default withRouter(Header);
