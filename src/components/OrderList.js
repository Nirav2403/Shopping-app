import React from 'react';
import { connect } from 'react-redux';
import Empty from './Empty';
import NoOrderList from '../style/no-order-icon.jpg';

const OrderList = ({ order, ...props }) => {
    
    const purchaseOrderList = (orderList) => {
        return orderList.map((cards)=>{
            return cards.map((card)=>{
                return(
                    <div className="cards-section">
                        <div clasName="cards-proflie" >
                            <div className="cards-image"><img src={card.product_image} alt="Not Found" /></div>
                            <div className="cards-title"><div className="cards-title-name">{card.product_name}</div></div>
                            <div className="card-content">
                                <div className="cards-price"><strong>price: </strong><span className="price-value"><i className="fas fa-rupee-sign"  style={{color:"#161616"}}></i> {card.product_price}</span></div>
                                <div className="cards-price"><strong className="price-title">rate: </strong><span className="price-value">{card.product_ratings}<i className='fas fa-star'  style={{color:"#FFA900"}}></i></span></div>
                            </div>
                        </div>
                        <div className="cards-btn">
                            <button className="card-btn" type="button"><a href={card.info}> Info</a></button>
            
                        </div>
                    </div>
                )
            })
        })
    }
    return (
        <div className="order-list-container">
            {order.length===0 ? <Empty emptyImage={NoOrderList} emptyContent="No Items. have been Placed as your order"/> : purchaseOrderList(order)}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.order)
    return {
        order: state.order
    }
}

export default connect(mapStateToProps)(OrderList);
