import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { showAllData, searchProduct } from '../actions/custonAction';
import { Link } from "react-router-dom";
import '../App.css';
import logo from '../style/logo.jpg';

const Navigation = ({ showAllData, searchProduct, order, addcart, navbar }) => {
    const [term, setTerm] = useState("");
    useEffect(() => {
        showAllData(navbar, "HOME");
    }, [])
    return (
        <>
            <nav id="navBar">
                <div className="nav-logo"><img src={logo} alt="Not Found" /></div>
                <ul id="navUi">
                    <li>
                        <Link to="/" onClick={() => showAllData(navbar, "HOME")}>Home</Link>
                    </li>
                    <li>
                        <Link to="/Moblie" onClick={() => showAllData(navbar, "MOBLIE")}>Moblie</Link>
                    </li>
                    <li>
                        <Link to="/television" onClick={() => showAllData(navbar, "TELEVISION")}>Television</Link>
                    </li>
                    <li>
                        <Link to="/laptop" onClick={() => showAllData(navbar, "LAPTOP")}>Laptop</Link>
                    </li>
                </ul>
                <div className="nav-searchbar">
                    <div className="nav-searchbar-input"><Link to="search"><input type="search" value={term} onChange={(e) => { setTerm(e.target.value); searchProduct(e.target.value, navbar) }} /></Link></div>
                    <button type="button" className="nav-searchbar-btn" onClick={() => searchProduct(term, navbar)}><i className="fa fa-search"></i></button>
                </div>
                <div className="icon-section">
                    <div className="nav-right-sided-btn">
                        <Link to="/add-cart-list"> <button className="right-sided-btn" >Add cart <i className="fas fa-bookmark" ></i><div className="add-to-cart-length">&nbsp;{addcart.length}&nbsp;</div></button></Link>
                        <Link to="/order-list"> <button className="right-sided-btn">My Order <i className="fas fa-shopping-bag" ></i><div className="add-to-cart-length">&nbsp;{order.length}&nbsp;</div></button></Link>
                    </div>
                    <div className="nav-right-sided-icons">
                        <Link to="/add-cart-list"><i className="fas fa-bookmark" style={{ color: "blue" }}></i><div className="add-to-cart-length">&nbsp;{addcart.length}&nbsp;</div></Link>
                        <Link to="/order-list"><i className="fas fa-shopping-bag" style={{ color: "blue" }}></i><div className="add-to-cart-length">&nbsp;{order.length}&nbsp;</div></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        addcart: state.addcart,
        order: state.order,
        navbar: state.jsondata
    }
}

export default connect(mapStateToProps, { showAllData, searchProduct })(Navigation);