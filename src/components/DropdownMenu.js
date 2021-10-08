import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showAllData } from '../actions/custonAction';
import '../App.css';

const DropdownMenu = ({showAllData, navbar, dropdown, setDropdown}) => {
    return (
        <div className="dropdown-container">
            <ul id="dropdown-ul">
                    <li>
                        <Link to="/" onClick={() => {showAllData(navbar, "HOME");setDropdown(!dropdown)}}>Home</Link>
                    </li>
                    <li>
                        <Link to="/Moblie" onClick={() => {showAllData(navbar, "MOBLIE");setDropdown(!dropdown)}}>Moblie</Link>
                    </li>
                    <li>
                        <Link to="/television" onClick={() => {showAllData(navbar, "TELEVISION");setDropdown(!dropdown)}}>Television</Link>
                    </li>
                    <li>
                        <Link to="/laptop" onClick={() => {showAllData(navbar, "LAPTOP");setDropdown(!dropdown)}}>Laptop</Link>
                    </li>
                </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        navbar: state.jsondata
    }
}

export default connect(mapStateToProps,{showAllData}) (DropdownMenu);