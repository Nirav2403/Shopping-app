import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showOneData,buyItem,buyOneRemove } from '../actions/custonAction';

const ShowOneProduct = ({ card, setShowProduct, showOneData, buyItem, buyOneRemove, ...props }) => {
    return (
        <>
            <div className="maincontainer">
                <div className="image-section">
                    <div className="image-card"><img src={card.product_image} alt="Not Found" className="product-image" /></div>
                    <div className="description-section">
                        <button className="close-btn" onClick={() => props.history.push("/")} ><i className="fa" style={{color:"black"}}>&#xf00d;</i></button>
                        <div className="content">
                            <div className="card-title"><h4>{card.product_name}</h4></div>
                            <div className="cards-price"><strong>price: </strong><span className="price-value"><i className="fas fa-rupee-sign"  style={{color:"#161616"}}></i> {card.product_price}</span></div>
                            <div className="cards-price"><strong className="price-title">rate: </strong><span className="price-value">{card.product_ratings}<i className='fas fa-star'  style={{color:"#FFA900"}}></i></span></div>
                        </div>
                    </div>
                </div>
                <div className="cards-btn">
                    <button className="card-btn" type="button"><a href={card.info}>Info</a></button>
                    <button className="card-btn" type="button" onClick={() => { showOneData(card, "addItem"); props.history.push("add-cart-list") }}>Add Cart</button>
                    <button className="card-btn" type="button" onClick={()=> {buyItem(card); buyOneRemove(card);props.history.push("/buy")}}>Buy now</button>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    showOneData, buyItem, buyOneRemove
}

const mapStateToProps = (state) => {
    console.log(state.selectedCard);
    return {
        card: state.selectedCard
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowOneProduct)