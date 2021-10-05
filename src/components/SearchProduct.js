import React from 'react';
import { connect } from 'react-redux';
import { showOneData } from '../actions/custonAction';
import Empty from './Empty';
import noSearch from '../style/no-search.jpg'

const SearchProduct = ({ search, showOneData }) => {
    const searchProductItem = (search) => {
        if (search.length === 0) {
            return (
                <Empty emptyImage={noSearch} emptyContent="No Results"/>
            )
        } else {
            return search.map((card) => {
                return (
                    <>
                       <div className="cards-section">
                    <div clasName="cards-proflie">
                        <div className="cards-image"><img src={card.product_image} alt="Not Found" /></div>
                        <div className="cards-title"><div className="cards-title-name">{card.product_name}</div></div>
                        <div className="card-content">
                            <div className="cards-price"><strong>price: </strong><span className="price-value"><i className="fas fa-rupee-sign"  style={{color:"#161616"}}></i> {card.product_price}</span></div>
                            <div className="cards-price"><strong className="price-title">rate: </strong><span className="price-value">{card.product_ratings}<i className='fas fa-star'  style={{color:"#FFA900"}}></i></span></div>
                        </div>
                    </div>
                    <div className="cards-btn">
                        <button className="card-btn" type="button"><a href={card.info}> Info</a></button>
                        <button className="card-btn" type="button" onClick={() => { showOneData(card, "addItem") }}>add cart</button>
                    </div>
                </div>
                    </>
                )
            })
        }
    }
    return (
        <div>
            <div className="search-main-container">
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