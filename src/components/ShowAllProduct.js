import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';
import { showOneData } from '../actions/custonAction';
import ShowOneProduct from './ShowOneProduct';
import Loader from './Loader';

const Product = ({ cards, showOneData }) => {
    const [showProduct, setShowProduct] = useState(false);

    const showProducts = (cards) => {
        return cards.map((card) => {
            return (
                <div className="cards-section">
                    <Link to="/showproduct" onClick={()=>showOneData(card,"showItem")}><div clasName="cards-proflie">
                        <div className="cards-image"><img src={card.product_image} alt="Not Found" /></div>
                        <div className="cards-title"><div className="cards-title-name">{card.product_name}</div></div>
                        <div className="card-content">
                            <div className="cards-price"><strong>price: </strong><span className="price-value"><i className="fas fa-rupee-sign"  style={{color:"#161616"}}></i> {card.product_price}</span></div>
                            <div className="cards-price"><strong className="price-title">rate: </strong><span className="price-value">{card.product_ratings}<i className='fas fa-star'  style={{color:"#FFA900"}}></i></span></div>
                        </div>
                    </div>
                    </Link>
                    <div className="cards-btn">
                        <button className="card-btn" type="button"><a href={card.info}> Info</a></button>
                        <button className="card-btn" type="button" onClick={() => { showOneData(card, "addItem") }}>add cart</button>
                    </div>
                </div>
            )
        })
    }
    return (
        <>
            <div className="card-container">
                {cards===null?<Loader/>:showProducts(cards)}
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state.toggle);
    return {
        cards: state.navbar,
        addcart: state.addcart
    }
}

export default connect(mapStateToProps, { showOneData })(Product);