import React from 'react';
import { connect } from 'react-redux';
import { showOneData } from '../actions/custonAction';

const SearchProduct = ({ search, showOneData }) => {
    const searchProductItem = (search) => {
        if (search === null) {
            return (
                <div className="show-search-error">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg><i class="bi bi-search"></i>
                    <h1>No Result</h1>
                </div>
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