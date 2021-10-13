import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { orderItem, buyAll } from '../actions/custonAction';
import '../App.css';

const OrderProduct = ({ buy, customer, orderItem, ...props }) => {
    const quantityArray = buy.map((item) => item.quantity * item.product_price)
    const totalCost = quantityArray.reduce((sum, cur) => sum + cur, 0);
    const orderList = (Product) => {
        return Product.map((buy) => {
            return (
                <div className="product-section">
                    <img src={buy.product_image} alt="" />
                    <div className="order-item-content">
                        <h5>{buy.product_name}</h5>
                        <div className="order-item-rate"><strong>Rate: </strong><span>{buy.product_ratings}<i className='fas fa-star' style={{ color: "#FFA900" }}></i></span></div>
                    </div>
                </div>
                // <div className="product-section">
                //     <div className="order-item-image"><img src={buy.product_image} alt="" /></div>
                //     <div className="order-item-content">
                //         <div className="order-item-title">{buy.product_name}</div>
                //         <div className="order-item-rate"><strong>Rate: </strong><span className="price-value">{buy.product_ratings}<i className='fas fa-star' style={{ color: "#FFA900" }}></i></span></div>
                //     </div>
                // </div>
            )
        })
    }

    const priceTable = (Product) => {
        return Product.map((buy) => {
            return (
                <div className="order-price-table-body-section">
                    <div className="order-product-name-body">{buy.product_name}</div>
                    <div className="order-product-price-body">{buy.product_price}<i className="fas fa-times"></i></div>
                    <div className="order-product-quantity-body">{buy.quantity}</div>
                </div>
                // <div className="order-price-table-body-section">
                //     <div className="order-product-name-body">{buy.product_name}</div>
                //     <div className="order-product-price-body">{buy.product_price}</div>
                //     <div className="product-quantity-multiple"><i className="fas fa-times"></i></div>
                //     <div className="order-product-quantity-body">{buy.quantity}</div>
                // </div>
            )
        })
    }
    return (
        <>
            <div className="placeholder-display">
                <div className="placeholder-container">
                    <h3 className="placeholder-main-title">Place Order</h3>
                    <div className="order-placeholder-container">
                        <div className="order-product-container">
                            {orderList(buy)}
                        </div>
                        <div className="order-placeholder-section">
                            <div className="order-customer-container">
                                <h3>Customer Details</h3>
                                <div className="order-customer-info"><h6>Customer Name :</h6><p>{customer.name}</p>
                                    <h6>Customer Email :</h6><p>{customer.email}</p>
                                    <h6>Customer Moblie No. :</h6><p>{customer.moblieNumber}</p>
                                    <h6>State :</h6><p>{customer.state}</p>
                                    <h6>City :</h6><p>{customer.city}</p>
                                    <h6>Area :</h6><p>{customer.area}</p>
                                </div>
                                {/* <div className="order-customer-info"><div className="order-customer-title-heading"><h6>Customer Name :</h6></div><div className="order-customer-title-body">{customer.name}</div></div>
                            <div className="order-customer-info"><div className="order-customer-title-heading"><h6>Customer Email :</h6></div><div className="order-customer-title-body">{customer.email}</div></div>
                            <div className="order-customer-info"><div className="order-customer-title-heading"><h6>Customer Moblie No. :</h6></div><div className="order-customer-title-body">{customer.moblieNumber}</div></div>
                            <div className="order-customer-info"><div className="order-customer-title-heading"><h6>State :</h6></div><div className="order-customer-title-body">{customer.state}</div></div>
                            <div className="order-customer-info"><div className="order-customer-title-heading"><h6>City :</h6></div><div className="order-customer-title-body">{customer.city}</div></div>
                            <div className="order-customer-info"><div className="order-customer-title-heading"><h6>Area :</h6></div><div className="order-customer-title-body">{customer.area}</div></div> */}
                            </div>
                            <div className="order-bill-container">
                                <h3>Order Details</h3>
                                <div className="order-price-table-header">
                                    <div className="order-product-name-head">Product Name</div>
                                    <div className="order-product-price-head">Price</div>
                                    <div className="order-product-quantity-head">Quantity</div>
                                </div>
                                <div className="order-price-table-body-container">
                                    {priceTable(buy)}
                                </div>
                                <div className="order-product-total-section">
                                    <h6>Total Price :</h6><span><i className="fas fa-rupee-sign"></i>{totalCost}</span>
                                    <h6>Payment Mode :</h6><span>Cash on delivery</span>
                                    <p></p><button className="place-order-btn" type="button" onClick={() => { orderItem(buy,quantityArray,totalCost); props.history.push("/order-list") }}>PLACE  ORDER <i className="fas fa-paper-plane"></i></button>
                                </div>
                                {/* <div className="order-product-total-section">
                                    <div className="order-total-price"><div className="order-total-title">Total Price :</div><div className="order-total-value"><i className="fas fa-rupee-sign"></i><h4 style={{ display: "inline-block", marginLeft: "0.5em" }}>{totalCost}</h4></div></div>
                                    <div className="order-total-price"><div className="order-total-title">Payment Mode :</div><div className="order-total-value">Cash on delivery</div></div>
                                    <div className="order-product-btn"><button className="place-order-btn" type="button" onClick={() => { orderItem(buy); props.history.push("/order-list") }}>PLACE  ORDER <i className="fas fa-play" style={{ color: "white", marginLeft: "0.5em" }}></i></button></div>
                                </div> */}
                                {/* <div className="order-bill-title"><h3>Order Details</h3></div>
                                <div className="order-price-table-header">
                                    <div className="order-product-name-head">Product Name</div>
                                    <div className="order-product-price-head">Price</div>
                                    <div className="order-product-quantity-head">Quantity</div>
                                </div>
                                <div className="order-price-table-body-container">
                                    {priceTable(buy)}
                                </div>
                                <hr />
                                <div className="order-product-total-section">
                                    <div className="order-total-price"><div className="order-total-title">Total Price :</div><div className="order-total-value"><i className="fas fa-rupee-sign"></i><h4 style={{ display: "inline-block", marginLeft: "0.5em" }}>{totalCost}</h4></div></div>
                                    <div className="order-total-price"><div className="order-total-title">Payment Mode :</div><div className="order-total-value">Cash on delivery</div></div>
                                    <div className="order-product-btn"><button className="place-order-btn" type="button" onClick={() => { orderItem(buy); props.history.push("/order-list") }}>PLACE  ORDER <i className="fas fa-play" style={{ color: "white", marginLeft: "0.5em" }}></i></button></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state.buy)
    return {
        buy: state.buy,
        customer: state.customer
    }
}

export default connect(mapStateToProps, { orderItem, buyAll })(OrderProduct);