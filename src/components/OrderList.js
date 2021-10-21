import React from 'react';
import { connect } from 'react-redux';
import Empty from './Empty';
import NoOrderList from '../style/no-order-icon.jpg';

const OrderList = ({ order, ...props }) => {

    const purchaseProduct = (card) => {
        return card.products.map((product,index)=>{
            return(
                <div className="product-card">
                    <img src={product.product_image} alt="" />
                    <div className="order-product-content">
                        <h4>{product.product_name}</h4>
                        <h6>Rate:</h6><span>{product.product_ratings}<i className='fas fa-star' style={{ color: "#FFA900",marginLeft:"0.3rem" }}></i></span>
                        <h6>Price:</h6><span><i className="fas fa-rupee-sign" style={{ color: "#161616",marginRight:"0.3rem" }}></i>{product.product_price}</span>
                        <h6>Quantity:</h6><span>{product.quantity}</span>
                    </div>
                    <div className="total-product-cost">
                        <h4>Total Price</h4><span>{card.totalProductCost[index]}</span>
                    </div>
                </div>
            )
        })
    }

    const purchaseOrderList = () => {
        return order.map((item)=>{
            console.log(item)
            return(
                <div className="deal-container">
                    <div className="deal-details">
                        <p><h6>Order Date</h6><span>{item.orderTime}</span></p>
                        <p><h6>Order Id</h6><span>{item.orderId}</span></p>
                        <p><h6>Products</h6><span>{item.products.length}</span></p>
                        <p><h6>Total Cost</h6><span>{item.totalBillCost}</span></p>
                    </div>
                    <div className="product-item-container">
                        {purchaseProduct(item)}
                    </div>
                    <div className="back-btn"><button onClick={()=>props.history.push("/")}>Continuous Shopping</button></div>
                </div>
            )
        })
    }
    
    // const purchaseOrderList = (orderList) => {
    //     return orderList.map((cards)=>{
    //         return cards.map((card)=>{
    //             return(
    //                 <div className="cards-section">
    //                     <div clasName="cards-proflie" >
    //                         <div className="cards-image"><img src={card.product_image} alt="Not Found" /></div>
    //                         <div className="cards-title"><div className="cards-title-name">{card.product_name}</div></div>
    //                         <div className="card-content">
    //                             <div className="cards-price"><strong>price: </strong><span className="price-value"><i className="fas fa-rupee-sign"  style={{color:"#161616"}}></i> {card.product_price}</span></div>
    //                             <div className="cards-price"><strong className="price-title">rate: </strong><span className="price-value">{card.product_ratings}<i className='fas fa-star'  style={{color:"#FFA900"}}></i></span></div>
    //                         </div>
    //                     </div>
    //                     <div className="cards-btn">
    //                         <button className="card-btn" type="button"><a href={card.info}> Info</a></button>
            
    //                     </div>
    //                 </div>
    //             )
    //         })
    //     })
    // }

    return (
        <div className="order-list-container">
            {order.length===0 ? <Empty emptyImage={NoOrderList} emptyContent="No Items. have been Placed as your order"/> : purchaseOrderList()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        order: state.order
    }
}

export default connect(mapStateToProps)(OrderList);
