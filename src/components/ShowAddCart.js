import React from 'react';
import { connect } from 'react-redux';
import { showOneData, buyItem, buyOneRemove, buyAll } from '../actions/custonAction';
import '../App.css';
import Empty from './Empty';
import NoAddCart from '../style/no-shopping-cart.jpg';

const ShowAddCart = ({ addcart, showOneData, buyItem, buyOneRemove, buyAll, ...props }) => {

    const removeData = (card) => {
        const remove = { ...card, quantity: 0 }
        console.log(remove);
        showOneData(remove, "removeItem");
    }

    const purchaseCard = () => {
        return addcart.map((card) => {
            return <div className="purchase-card-section" key={card.id}>
                <div className="purchase-card-image"><img src={card.product_image} alt="Not Found" /></div>
                <div className="purchase-card-title">{card.product_name}</div>
                <div className="purchase-card-value">
                    <div className="purchase-quantity-btn">
                        <button className="minus-btn" onClick={() => showOneData(card, "removeItem")}><i class="fa fa-minus"></i></button>
                        <div className="purchase-card-quantity"><h3>Quantity</h3><div className="purchase-quantity"><h3 className="quantity-value">{card.quantity}</h3></div></div>
                        <button className="plus-btn" onClick={() => showOneData(card, "addItem")}><i class="fa fa-plus"></i></button>
                    </div>
                    <div className="purchase-card-cost" ><h4>Total Price: </h4><span><i className="fas fa-rupee-sign"></i> {card.product_price}</span></div>
                </div>
                <div className="purchase-card-btn">
                    <button className="remove-btn" onClick={() => removeData(card)}>Remove<i class="fas fa-trash-alt"></i></button>
                    <button className="buy-btn" onClick={() => { buyItem(card); props.history.push("/buy") }}>
                        Buy <i className="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        });
    }
    return (
        <>
            <div className="purchase-card-container">
                {addcart.length === 0 ? <Empty emptyImage={NoAddCart} emptyContent="No Item have been added to cart" /> : purchaseCard()}
                {(addcart.length < 2) ? null : <div className="buy-all"><button className="buy-all-btn" onClick={() => { buyItem(addcart); props.history.push("/buy") }} >Checkout all <i className="fas fa-shopping-cart" style={{ color: "blue", marginLeft: "3px" }}></i></button></div>}
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