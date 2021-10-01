import React, { useState } from 'react';
import { connect } from 'react-redux';
import { showAllData, searchProduct } from '../actions/custonAction';
import { Link } from "react-router-dom";
import '../App.css';
import logo from '../style/logo.jpg';

const Navigation = ({ showAllData, searchProduct, order, addcart }) => {
    const [term, setTerm] = useState("")
    return (
        <>
            <nav id="navBar">
                <div className="nav-logo"><img src={logo} alt="Not Found" /></div>
                <ul id="navUi">
                    <li>
                        <Link to="/" onClick={() => showAllData(0)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/Moblie" onClick={() => showAllData(1)}>Moblie</Link>
                    </li>
                    <li>
                        <Link to="/television" onClick={() => showAllData(2)}>Television</Link>
                    </li>
                    <li>
                        <Link to="/laptop" onClick={() => showAllData(3)}>Laptop</Link>
                    </li>
                </ul>
                <div className="nav-searchbar">
                <Link to="search"><input type="search" className="nav-searchbar-input" value={term} onChange={(e) => {setTerm(e.target.value);searchProduct(term)}} />
                    <button type="button" className="nav-searchbar-btn" onClick={()=>searchProduct(term)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg><i class="bi bi-search"></i></button></Link>
                </div>
                <div className="nav-right-sided-btn">
                    <Link to="/add-cart-list"> <button className="right-sided-btn" >Add cart <i className="fas fa-bookmark" style={{color:"red"}}></i></button></Link>
                    <div className="add-to-cart-length">&nbsp;{addcart.length}&nbsp;</div>
                    <Link to="/order-list"> <button className="right-sided-btn">My Order</button></Link>
                    <div className="add-to-cart-length">&nbsp;{order.length}&nbsp;</div>
                </div>
            </nav>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        addcart: state.addcart,
        order: state.order
    }
}

export default connect(mapStateToProps, { showAllData, searchProduct })(Navigation);