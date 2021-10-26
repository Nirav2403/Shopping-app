import React from 'react';
import { connect } from 'react-redux';
import { showOneData, sho } from '../actions/custonAction';
import Empty from './Empty';
import noSearch from '../style/no-search.jpg'

const SearchProduct = ({ search, showOneData, ...props }) => {
    const searchProductItem = (search) => {
        if (search.length === 0) {
            return (
                <Empty emptyImage={noSearch} emptyContent="No Results" />
            )
        } else {
            const showCard = (show) => { showOneData(show, "showItem"); props.history.push("/showproduct") }
            return search.map((card) => {
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
    }
    return (
        <div>
            <div className="search-container">
                {searchProductItem(search)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        search: state.search
    }
}

export default connect(mapStateToProps, { showOneData })(SearchProduct);