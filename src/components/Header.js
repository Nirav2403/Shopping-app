import React from 'react';
import { Row } from 'react-bootstrap';
import Navigation from './showAllProduct';

const Header = () => {
    return (
        <>
            <Row style={{height:"100px",backgroundColor:"lightskyblue"}}>
                <h1 className="text-center my-4" style={{color:"darkblue"}}>Custom Api</h1>
            </Row>
            <Row>
                <Navigation/>
            </Row>
        </>
    )
}

export default Header;
