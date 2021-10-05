import React, { useState } from 'react';
import { connect } from 'react-redux';
import { showOneData, buyItem, buyOneRemove, buyAll } from '../actions/custonAction';
import { Link } from 'react-router-dom';
import '../App.css';
import Empty from './Empty';
import NoAddCart from '../style/no-shopping-cart.jpg';

const ShowAddCart = ({ addcart, showOneData, buyItem, buyOneRemove, buyAll, ...props }) => {
    
    const removeData = (card) => {
        const remove = {...card,quantity:0}
        console.log(remove);
        showOneData(remove,"removeItem");
    }

    const purchaseCard = () => {
        return addcart.map((card) => {
            return <div className="purchase-card-section">
                <div className="purchase-card-image"><img src={card.product_image} alt="Not Found" /></div>
                <div className="purchase-card-description">
                    <div className="purchase-card-content">
                        <div className="purchase-card-title">{card.product_name}</div>
                        <div className="purchase-quantity-btn">
                            <button className="quantity-btn" onClick={() => showOneData(card, "removeItem")}>-</button>
                            <div className="purchase-card-quantity"><h3>Quantity</h3><div className="purchase-quantity"><h3 className="quantity-value">{card.quantity}</h3></div></div>
                            <button className="quantity-btn" onClick={() => showOneData(card, "addItem")}>+</button>
                        </div>
                    </div>
                    <div className="purchase-card-btn">
                        <button className="buy-btn" onClick={() => removeData(card)}>Remove<i class="fas fa-trash-alt" style={{color:"blue",marginLeft:"3px"}}></i></button>
                        <Link to="/buy">
                            <button className="buy-btn" onClick={() => {buyItem(card);buyOneRemove(card)}}>
                                Buy <i className="fas fa-shopping-cart" style={{color:"blue",marginLeft:"3px"}}></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        });
    }
    return (
        <>
            <div className="purchase-card-container">
                {addcart.length===0? <Empty emptyImage={NoAddCart} emptyContent="No Item have been added to cart"/> : purchaseCard()}
                {(addcart.length<2) ? null : <Link to="/buy"><div className="buy-all"><button className="buy-all-btn" onClick={()=>{buyItem(addcart);buyAll(addcart)}} >Buy all <i className="fas fa-shopping-cart" style={{color:"blue",marginLeft:"3px"}}></i></button></div></Link>}
            </div>

        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state.cardnumber);
    return {
        addcart: state.addcart,
        cardnumber: state.cardnumber
    }
}

export default connect(mapStateToProps, { showOneData, buyItem, buyOneRemove, buyAll })(ShowAddCart);