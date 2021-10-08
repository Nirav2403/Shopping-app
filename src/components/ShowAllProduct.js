import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';
import { showOneData } from '../actions/custonAction';
import ShowOneProduct from './ShowOneProduct';
import Loader from './Loader';

const Product = ({ cards, showOneData, ...props }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },2000)
        console.log("=====================>",isLoading && cards===null)
        return(()=>setIsLoading(true))
    },[cards])
    const showCard = (show) => { showOneData(show, "showItem"); props.history.push("/showproduct") }
    const showProducts = (cards) => {
        return cards.map((card) => {
            return (
                <div className="cards-section">
                    <div className="cards-image" onClick={()=>showCard(card)}><img src={card.product_image} alt="Not Found" /></div>
                    <div className="cards-title" onClick={()=>showCard(card)}>{card.product_name}</div>
                    <div className="cards-price" onClick={()=>showCard(card)}><strong>price: </strong><span><i className="fas fa-rupee-sign" style={{ color: "#161616" }}></i> {card.product_price}</span></div>
                    <div className="cards-price" onClick={()=>showCard(card)}><strong className="price-title">rate: </strong><span>{card.product_ratings}<i className='fas fa-star' style={{ color: "#FFA900" }}></i></span></div>
                    <div className="cards-btn">
                        <button type="button"><a href={card.info}> Info</a></button>
                        <button  type="button" onClick={() => { showOneData(card, "addItem") }}>add cart</button>
                    </div>
                </div>
            )
        })
    }
    return (
        <>
            <div className="card-container">
                {isLoading ? <Loader /> : showProducts(cards)}
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